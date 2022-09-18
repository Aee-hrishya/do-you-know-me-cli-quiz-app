const readlineSync = require("readline-sync");
let score = 0;

const highScores = [
  {
    name: "Raman",
    score: 5,
  },
  {
    name: "Tushar",
    score: 3,
  },
];

const questions = [
  {
    question: "What is my name?",
    answer: "Hrishikesh",
  },
  {
    question: "Where do I live?",
    answer: "Navi Mumbai",
  },
  {
    question: "What's my favourite color?",
    answer: "Purple",
  },
  {
    question: "Which school did I go to?",
    answer: "Agnels",
  },
  {
    question: "Who is my favourite sports person?",
    answer: "Tyson Fury",
  },
];

const welcome = () => {
  const userName = readlineSync.question("Hey buddy! May I have your name?");
  console.log(`Welcome ${userName}! Let's see how well you know me!!!`);
};

const play = (question, answer) => {
  let userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("Wow! you're right!");
    score++;
  } else {
    console.log(":( Sorry wrong answer.");
  }

  console.log("Current score is", score);
  console.log("-----------------------------------------");
};

const game = () => {
  for (let i = 0; i < questions.length; i++) {
    let currQuestion = questions[i];
    play(currQuestion.question, currQuestion.answer);
  }
};

const showHighScore = () => {
  console.log("Heyy! You did great, your score is: ", score);
  console.log("If you are the new high scorer ping me I'll change it.");
  console.log("Check out the highscores:-");
  highScores.map((score) => console.log(score.name, ":", score.score));
};

welcome();
game();
showHighScore();
