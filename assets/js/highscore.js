if (typeof(Storage) !== "undefined") 
{
  // Code for localStorage/sessionStorage.
  var highScores = localStorage.getItem("highScores");

  // Loop through and parses out the high scores, then display it to the user
  var ranking = 1;
  while (highScores !== "")
  {
    var initialValue = highScores.substring(0, highScores.indexOf(":"));
    var timerValue = highScores.substring(highScores.indexOf(":") + 1, highScores.indexOf(";"));

    var highScoreBoard = document.getElementById("highScoreBoard");
    var highScoreText = ranking++ + ". " + initialValue + " - " + timerValue + "<br>";
    highScoreBoard.innerHTML += highScoreText;

    highScores = highScores.substring(highScores.indexOf(";") + 1);
  }
}
else
{
  // Sorry! No Web Storage support..
  // Parses the timer and initial value from the URL
  var highScore = document.URL.substring(document.URL.indexOf("?") + 1);
  var initialValue = highScore.substring(highScore.indexOf("&") + 1);
  var timerValue = highScore.substring(0, highScore.indexOf("&"));

  var highScoreBoard = document.getElementById("highScoreBoard");
  var highScoreText =  "1. " + initialValue + " - " + timerValue + "<br>";
  highScoreBoard.innerHTML += highScoreText;
}

// Clear out high score text and data from local storage
var clearHighScoresBtn = document.getElementById("clearHighScoresBtn");
clearHighScoresBtn.addEventListener("click", function()
{
  document.getElementById("highScoreBoard").innerHTML = "";
  localStorage.removeItem("highScores");
});