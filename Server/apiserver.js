var http = require('http');
var url = require('url');
var fs = require('fs');
var personSVG = require('./personSvg.js');

module.exports = {
	initialize(update, requestLastIndex) {
		http.createServer(function(req, res) {
			if (req.url === "/")
				ServeClient(req, res);
			else if (req.url.startsWith("/svg"))
				ServeSVG(req, res);
			else if (req.url.startsWith("/person"))
				ServePerson(req, res);
			else if (req.url.startsWith("/js"))
				ServeJS(req, res);
			else if (req.url.startsWith("/audio"))
				ServeAudio(req, res);
			else if (req.url.startsWith("/update"))
				Update(req, res, update);
			else
			{
				res.writeHead(404);
				res.end();
			}
		}).listen(8080);
	}
}

function ServeClient(req, res)
{
	var fileStream = fs.createReadStream("static/index.html");
	res.writeHead(200, {'Content-Type': 'text/html'});
	fileStream.pipe(res);
}

function ServeJS(req, res)
{
	var fileStream = fs.createReadStream(req.url.substring(1));
	res.writeHead(200, {"Content-Type": "text/javascript"});
	fileStream.pipe(res);
}

function ServeAudio(req, res)
{
	console.log("[HTTP] Getting audio file: " + req.url);
	var fileStream = fs.createReadStream(req.url.substring(1));
	res.writeHead(200, {"Content-Type": "application/ogg"});
	fileStream.pipe(res);
}

var svgs = {
	"person": "static/person.svg",
	"vs": "static/vs.svg",
	"background": "static/background.svg",
	"betsopen": "static/betsopen.svg",
	"betsclosed": "static/betsclosed.svg",
	"dating-background": "static/dating-background.svg"
};

var hairStyles = [null, '<ellipse ry="52" rx="84" id="svg_1" cy="64.5" cx="100.5" stroke-opacity="null" stroke-width="null" stroke="null" fill="#894F3F"/>' +
	  '<rect id="svg_2" height="109" width="167" y="65.5" x="17.5" stroke-opacity="null" stroke-width="null" stroke="null" fill="#894F3F"/>'
	  ]
	  
var bodyStyles = [null, '<ellipse stroke="null" ry="48.5" rx="77.000004" id="svg_4" cy="227" cx="101.499996" stroke-opacity="null" stroke-width="null" fill="#729C62"/>' +
	  '<rect id="svg_5" height="154" width="152" y="226.5" x="26.5" fill-opacity="null" stroke-opacity="null" stroke-width="null" stroke="null" fill="#729C62"/>']

function ServePerson(req, res)
{
	try {
		var params = req.url.split("/").filter(Boolean);
		
		var hairstyle = params[1];
		var haircolor = params[2];
		var skincolor = params[3];
		var bodystyle = params[4];
		var bodycolor = params[5];
		var bodycolor2 = params[6];
		
		res.writeHead(200, {'Content-Type': 'image/svg+xml'});
		res.end(personSVG.generate(hairstyle, haircolor, skincolor, bodystyle, bodycolor, bodycolor2));
	}
	catch (e) {
		res.writeHead(500);
		res.end();
	}
}

function ServeSVG(req, res)
{
	var path = req.url.substring(5);
	var fileStream;
	
	
	for (var svg in svgs)
	{
		if (path.startsWith(svg))
		{
			fileStream = fs.createReadStream(svgs[svg]);			
			res.writeHead(200, {'Content-Type': 'image/svg+xml'});
			fileStream.pipe(res);
			return;
		}
	}
	
	res.writeHead(404);
	res.end();
	return;
}

function Update(req, res, update)
{
	//console.log("[HTTP] Update");
	
	try {
		update(function(gameState) {
			res.writeHead(200);
			res.end(JSON.stringify(gameState));
		});
	}
	catch (e) {
		console.log(e);
		res.writeHead(500);
		res.end(e.toString());
		return;
	}
}