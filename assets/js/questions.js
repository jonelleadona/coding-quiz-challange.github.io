
// Display timer text
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

// Display question text
var quizQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    
    answers: ["Strings", "Bootstrap", "Alerts", "Numbers"],
    correct: "b",
  },
  {
    question: "The condition in an if/else statement is enclosed within _______.",
    
    answers: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
    correct: "c",
  },
  {
    question: "Array in JavaScript can be used to store _____.",
    
    answers: ["Numbers and strings", "Other Arrays", "Booleans", "All of the Above"], 
    correct: "d"
  },
  {
    question: "String values must be enclosed within ________ when being assigned to variables.",

    answers: ["Commas", "Curly Brackets", "Quotes", "Paranthesis"],
    correct: "b"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",

    answers: ["JavaScript", "Terminal / Bash", "For Loops", "Console.log"],
    correct: "c"
  },
];

var currQuestion = -1;

function displayQuestion()
{
  ++currQuestion;
  
  // Go to ending page when last question is reached
  if (currQuestion >= quizQuestions.length)
  {
    location.replace("ending.html");
  }

  // Display questions
  var askedQuestions = document.getElementById("askedQuestions");
  askedQuestions.textContent = quizQuestions[currQuestion].question;

  // Remove previous button before creating new ones
  document.querySelectorAll(".rmvBtn").forEach(function (btn) {
    btn.remove();
  });
  
  // Create as many buttons as length of answers
  for (var i = 0; i < quizQuestions[currQuestion].answers.length; ++i)
  {
    var button = document.createElement("button");
    button.innerHTML = quizQuestions[currQuestion].answers[i];
    button.className = "rmvBtn";
    button.addEventListener("click", displayQuestion);
    document.getElementById("questionDiv").appendChild(button);
  }
}

displayQuestion();
