var tmi = require("tmi.js");

var allowedMessages = ["up", "down", "left", "right", "talk"];

var twitchClient;
var twitchUsername;

module.exports = {
	initialize(clientId, username, password, messageCallback, balanceCallback) {
		var options = {
			options: {
				clientId: clientId,
				debug: true
			},
			channels: [username],
			identity: {
				username: username,
				password: password
			},
			logger: {
				info: function(obj) {
					//ignore later
					console.log("[INFO]" + obj);
				},
				warn: function(obj) {
					console.log("[WARN] " + obj);
				},
				error: function(obj){
					console.log("[ERROR] " + obj);
				}
			}
		};

		var client = new tmi.client(options);

		client.on("chat", function(channel, userstate, message, self) {
			
			var msg = message.trim().toLowerCase();
			
			if (msg.startsWith("balance"))
			{
				client.say(username, userstate["username"] + "'s balance: $" + balanceCallback(userstate["user-id"]));
				return;
			}
			
			messageCallback(channel, userstate, msg, self);
		});

		client.connect();
		
		twitchClient = client;
		twitchUsername = username; 
	},
	announce(message) {
		twitchClient.say(twitchUsername, message);
	},
	whisper(message, user)
	{
		twitchClient.whisper(user, message);
	}
}