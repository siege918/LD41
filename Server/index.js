var twitch = require("./twitch.js");
var apiserver = require("./apiserver.js");
var sem = require('semaphore')(1);
var personGenerator = require("./personGenerator.js");

var clientId = process.argv[2];
var username = process.argv[3];
var password = process.argv[4];

var commands = {};

var bets = {};
var balances = {};
var gameState = require("./gameData.js");

function getBalance(uid)
{
	if (!balances[uid])
		addBalance(uid, 400);
	
	return balances[uid];
}

function addBalance(uid, add)
{
	console.log("Giving " + add + " dollars to " + uid);
	
	if (!balances[uid])
		balances[uid] = 0;
	
	balances[uid] += add;
}

function updateLeaderboard(username, balance)
{
	
}

var lastIndex = 0;
var currentIndex = 1;
var cachedResponse = [];

twitch.initialize(clientId, username, password,
	function(channel, userstate, message, self) {
		
		if (!gameState.betsOpen)
			return;
		
		var splitString = message.split(/[ ,]+/).filter(Boolean);
		
		var val;
		var quantity = 1;
		
		switch (splitString[0]) {
			case 'for':
				val = 'for';
				break;
			case 'against':
				val = 'against';
				break;
			default:
				return;
		}
		
		if (splitString.length > 1)
		{
			quantity = parseInt(splitString[1]);
			
			if (quantity <= 0 || getBalance(userstate["user-id"]) < quantity)
			{
				return;
			}
		}
		
		sem.take(function() {
			bets[userstate["user-id"]] = {username: userstate["username"], amount: quantity, direction: val};
			gameState.bets.push(bets[userstate["user-id"]]);
			
			if (gameState.bets.length > 8)
				gameState.bets.shift();
			
			sem.leave();
		});
	},
	getBalance
);

apiserver.initialize(
	function(callback) {
		sem.take(function() {
			
			gameState.timeRemaining--;
			
			if (!gameState.timeRemaining)
			{
				gameState.betsOpen = !gameState.betsOpen;
				
				if (gameState.betsOpen)
				{
					
					gameState.timeRemaining = 30;
					
					var winner = 'for';
					var odds = gameState.oddsAgainst;
					var message = "The date was a success! Begin betting for the next round now."
					
					if (gameState.score <= .5)
					{
						winner = 'against';
						odds = gameState.oddsFor;
						message = "The date was a failure. Begin betting for the next round now."
					}
					
					//Resolve bets
					for (var bet in bets)
					{
						if (bets[bet].direction === winner)
						{
							addBalance(bet, odds * bets[bet].amount);
						}
						else
						{
							addBalance(bet, -1 * bets[bet].amount);
						}
					}
					
					//Generate new players
					gameState.player1 = personGenerator.generate();
					gameState.player2 = personGenerator.generate();
					
					//Calculate odds
					var odds = (Math.random() * 2) + 1;
					var which = Math.random() < .5;
					
					if (which)
					{
						gameState.oddsAgainst = Math.round(odds * 100) / 100;
						gameState.oddsFor = 1;
					}
					else
					{
						gameState.oddsAgainst = 1;
						gameState.oddsFor = Math.round(odds * 100) / 100;
					}
					
					twitch.announce(message);
					gameState.bets = [];
					gameState.score = .5;
				}
				else
				{
					gameState.timeRemaining = 25;
					twitch.announce("Betting is closed! Enjoy the date!");
				}
			}
			
			if (!gameState.betsOpen)
			{
				var which = Math.random() < .5;
					
				if (which)
				{
					gameState.score += gameState.oddsFor / 10;
				}
				else
				{
					gameState.score -= gameState.oddsAgainst / 10;
				}
				
				if (gameState.score < 0)
					gameState.score = 0;
				if (gameState.score > 1)
					gameState.score = 1;
			}
			
			callback(gameState);
			sem.leave();
		});
	},
	function()
	{
		return lastIndex;
	}
);