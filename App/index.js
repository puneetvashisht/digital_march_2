var express = require('express');
var bodyParser = require('body-parser');

var MongoClient = require('mongodb').MongoClient;

var app = express();

app.use(express.static(__dirname+"/webContent"))
app.use(bodyParser.json());

MongoClient.connect("mongodb://localhost:27017/pollApp", function(err, db){
	if(err){
		console.log('error in db connection');
	} else {
		console.log("db connection is created");
		var collection = db.collection("userCollection");
		
		app.listen(9999,function(){
			console.log("server is running at 9999");
		});
		
		
		
	}
});
		
