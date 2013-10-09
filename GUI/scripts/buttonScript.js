
$(document).bind('pageinit', "#tracking", function(){
	var startButton = document.getElementById("start");
	var stopButton = document.getElementById("stop");
	
	stopButton.style.display = "none";

	startButton.addEventListener('click',showStop, false);
	stopButton.addEventListener('click',showStart, false);
	
	function showStop() {
        stopButton.style.display ="block";
        startButton.style.display = "none";
	}
	function showStart(){
       startButton.style.display = "block";
       stopButton.style.display = "none";
	}
});
