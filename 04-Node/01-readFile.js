/*var a = 6;
var b = 3;
var sum = function(x, y){
return x+y;
}
console.log(sum(a, b))
console.log(sum(2,8))
console.log(sum(8,6))
console.log(sum(15,15))*/

// read file

//import
//include
//script src
//link href

var fs = require('fs');

/*var content = fs.readFileSync("../coverage.txt");//1gb
console.log("File read successfully")
console.log(content.toString())*/

fs.readFile("./config.json", function(err, data){
	
	if(err){
		console.log("Some error occurred");
		console.log(err)
	} else {
/*
		var sleep = function(millisecs){
		   var now = new Date().getTime();
		   while(now+millisecs>new Date().getTime()){}
		}
		sleep(3000);
*/
//		console.log("file read in callback")
		var fileObj = JSON.parse(data.toString())
		console.log(fileObj.ip)
		console.log(fileObj.port)
	}

})

	console.log("after file read, continue")

