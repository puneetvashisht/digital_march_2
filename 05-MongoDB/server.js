var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/myDatabase", function(err, db){
	if(err){
		console.log('error in db connection');
	} else {
		console.log("db connection is created");
		var collection = db.collection("userCollection");
		
		
		app.post("/insertUser", function(req, res){
			var data = req.body;
			console.log(data);
			console.log("insert in mongodb");
			collection.insert(data, function(err, result){
				var isInserted = false;
				if(err){console.log('error in insertion')}
				else{
					console.log("inserted")					
					isInserted = true;
				}
				res.send({success: isInserted})
			});
		})

		app.get("/getUsers", function(req, res){
			collection.find().toArray(function(err, data){
				if(err){
					console.log("error in fetching user data");
					res.send({success: false});
				} else {
					res.send({success: true, user: data})
				}
			})
		})

		app.put("/updateUser", function(req, res){
			collection.findOneAndUpdate({age: req.body.age}, {
				$set: {
					email: req.body.email
				}
			}, function(err, data){
				if(err){
					console.log("error in updation")
					res.send({success: false});
				} else {
					res.send({success: true})
				}
			})
		})

		app.delete("/removeUser", function(req, res){
			collection.findOneAndDelete({age: req.body.age}, function(err, data){
				if(err){
					console.log("error in deletion")
					res.send({success: false});
				} else {
					res.send({success: true})
				}
			})
		})

	app.listen(8888, function(){
		console.log("server is running at 8888")
	})
	}
})

