var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');


//console.log(express)
var server = express();
server.use(bodyParser.json());

server.get("/", function(req, res){
	console.log("client is coming in get");
	res.send("<h2>Welcome User</h2>")
})

server.post("/", function(req, res){
	console.log("client is coming in post");
	res.send("<h2>Welcome User</h2>")
})

server.post("/login", function(req, res){
	console.log(req.body);
//	if(req.body.email ===  req.body.password){
//		req.body.isAuthenticated = true;
//		delete req.body.password;
//	}
//	res.send(req.body)
	res.send("<h2>Welcome "+req.body.email+"</h2>")
})

server.get("/hello/:name", function(req, res){
	console.log(req.params.name)
	res.send("<h2>Hello "+req.params.name+"</h2>")
})

fs.readFile("./config.json", function(err, data){
	
	if(err){
		console.log("Some error occurred");
		console.log(err)
	} else {
		var config = JSON.parse(data.toString());
		server.listen(config.port, config.ip, function(err){
			if(err){
				console.log(err);
			} else {
				console.log("server is running at "+config.ip+":"+config.port);
			}
		})
		
	}

})
