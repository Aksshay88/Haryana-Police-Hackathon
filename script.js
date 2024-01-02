const quizData = [
  {
    question: "Which drug is commonly known as 'weed' or 'pot'?",
    options: ["Heroin", "Cocaine", "Marijuana", "Methamphetamine"],
    answer: "Marijuana"
  },
  {
    question: "What does LSD stand for?",
    options: [
      "Lysergic Sound Drum",
      "Lysergic Sulphate Dihydrate",
      "Lysergic Acid Diethylamide",
      "Lysergic Solid Dose"
    ],
    answer: "Lysergic Acid Diethylamide"
  },
  // Add more questions and answers
];

let currentQuestion = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", init);

function init() {
  showQuestion();
  document.getElementById("nextBtn").addEventListener("click", nextQuestion);
  document.getElementById("restartBtn").addEventListener("click", restartQuiz);
}

function showQuestion() {
  const question = document.getElementById("question");
  const options = document.getElementById("options");
  const currentQuizData = quizData[currentQuestion];

  question.textContent = currentQuizData.question;
  options.innerHTML = "";

  currentQuizData.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", () => checkAnswer(option));
    options.appendChild(btn);
  });
}

function checkAnswer(option) {
  const currentQuizData = quizData[currentQuestion];
  if (option === currentQuizData.answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
    document.getElementById("nextBtn").style.display = "none";
  } else {
    showResult();
  }
}

function showResult() {
  const quiz = document.getElementById("quiz");
  const result = document.getElementById("result");
  quiz.style.display = "none";
  result.style.display = "block";
  document.getElementById("score").textContent = You scored ${score} out of ${quizData.length};
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  const quiz = document.getElementById("quiz");
  const result = document.getElementById("result");
  quiz.style.display = "block";
  result.style.display = "none";
  showQuestion();
}
