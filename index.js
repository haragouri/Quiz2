var readlineSync = require("readline-sync");
var score = 0

//welcome function
function welcome() {
  var userName = readlineSync.question("what's your name?")
  console.log("welcome " + userName + " , Let's check how much you know about India")
}

var questions = [
  {
    question: "What is capital of India ",
    answer: "Delhi"
  },
  {
    question: "How many states in India ",
    answer: "25"
  },
  {
    question: "Who is PM of India ",
    answer: "Modi"
  },
  {
    question: "What's national flower of India ",
    answer: "lotus"
  },
  {
    question: "What's national sport of India ",
    answer: "Hockey"
  },
]

//game function
function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase === answer.toUpperCase) {
    console.log("right");
    score = score + 1;
    //console.log("score is " + score);
  } else {
    console.log("wrong");
    score = score - 1;
    //console.log("score is " + score);
  }
  console.log("your score is " + score); //either of if works or else works, this will work at last
}

//game function
function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function showScore() {
  console.log("This is end of quiz, you scored: " + score);
}


welcome();
game();
showScore();