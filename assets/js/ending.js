// Parses the timer value from the URL
var timerValue = document.URL.substring(document.URL.indexOf("?") + 1);
var score = document.getElementById("score-container");
score.textContent = timerValue;

// Store initials and timer score into local storage
function submitScore() 
{
  var initialValue = document.getElementById("initials");

  if (typeof(Storage) !== "undefined") 
  {
    // Code for localStorage/sessionStorage.
    var highScore = localStorage.getItem("highScores");
    if (highScore === null)
    {
      highScore = "";
    }

    var myHighScore = initialValue.value + ":" + timerValue + ";";
    localStorage.setItem("highScores", highScore + myHighScore);

    location.replace("highscore.html");
  } 
  else 
  {
    // Sorry! No Web Storage support..
    location.replace("highscore.html?" + timerValue + "&" + initialValue.value);
  }
}

var submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", submitScore);
