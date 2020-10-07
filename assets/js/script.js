var timer = document.getElementById("timer");

var secondsLeft = 75;
timer.textContent = "Time: " + secondsLeft;

function timeLeft () {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;
    
    if(secondsLeft === 0){
      clearInterval(timerInterval);
    }

  }, 1000);
}

timeLeft();