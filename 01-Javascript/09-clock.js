		var clock = document.getElementById("clock");
		var intervalId;
		function startClock(){
			var date = new Date();
	/*		
			var seconds = date.getSeconds();
			var minutes = date.getMinutes();
			var hours = date.getHours();

			clock.innerHTML = hours + ":" + minutes + ":" + seconds;
	*/

			clock.innerHTML = date.toLocaleTimeString();
		}
		
		
		document.getElementById('start').addEventListener('click', function(){
			document.getElementById('clock').style.color = "green";
			intervalId = setInterval(startClock, 1000);
		})
		
		document.getElementById('stop').addEventListener('click', function(){
			document.getElementById('clock').style.color = "red";
			clearInterval(intervalId);
		})
		
