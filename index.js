var readlineSync = require('readline-sync');
var chalk = require('chalk');
 
var score = 0;

// data of high score
var highScores = [
  {
    name: "Rohan",
    score: 5,
  },

  {
    name: "Deepak",
    score: 3,
  },
]


questions = [{
  question: "From which city I am? ",
  answer: "Mumbai"
},
{
  question: "What's my college name? ",
  answer: "XIE"
},
{
  question: "Where do I work?",
  answer: "Innovaccer"
},
{
  question: "Which language I like? ",
  answer: "JavaScript"
},
{
  question: "What's my favourite show? ",
  answer: "Mirzapur"
}]

// welcome user
function welcome(){
  var userName = readlineSync.question("What's your name? ")
  console.log(chalk.blue("👋 Hey, " + userName))
  console.log("Welcome to DO YOU KNOW Rohan!")
  console.log("Lets start.")
}

// play function
function play(question, answer){
  var userAnswer = readlineSync.question(chalk.green.bold(question))
  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    score = score + 1
  }
  else{
    console.log("Wrong answer 🙄")
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game(){
  for(var i=0; i<questions.length; i++){
    var currQuestion = questions[i]
    play(currQuestion.question, currQuestion.answer)
  }
}

// display score
function showScore(){
  console.log(chalk.underline.bold("Hey your score is: ", score))
  console.log("Check out the high scores, if you want to be there ping me.");
  highScores.map(score => console.log(score.name, " : ", score.score))
  console.log("Enjoy!")
}

welcome()
game()
showScore()