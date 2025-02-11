let question = [
  {
    question: "Which is the largest animal in the world",
    answer: [
      { text: "Shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the largest Continent in the world",
    answer: [
      { text: "Asia", correct: true },
      { text: "Africa", correct: false },
      { text: "America", correct: false },
      { text: "Euerope", correct: false },
    ],
  },
  {
    question: "Which is the Fastest animal in the world",
    answer: [
      { text: "Cheeta", correct: false },
      { text: "Rat", correct: false },
      { text: "Horse", correct: false },
      { text: "Falcon ", correct: true },
    ],
  },
  {
    question: "Which is the Hardest material in the world",
    answer: [
      { text: "Steel", correct: false },
      { text: "Glass", correct: false },
      { text: "Diamond", correct: true },
      { text: "Sodiam", correct: false },
    ],
  },
  {
    question: "Which is the largest planet in the Universe",
    answer: [
      { text: "Jupiter", correct: true },
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
      { text: "Pluto", correct: false },
    ],
  },
];

const questionElem = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currQuestion = question[currQuestionIndex];
  let questionNo = currQuestionIndex + 1;
  questionElem.innerHTML = questionNo + ". " + currQuestion.question;
  currQuestion.answer.forEach((ans) => {
    const button = document.createElement("button");
    button.innerHTML = ans.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (ans.correct) {
      button.dataset.correct = ans.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function selectAnswer(e) {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((btn) => {
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct");
    }
    btn.disabled = "true";
  });
  nextButton.style.display = "block";
}
function resetState() {
  answerButton.innerHTML = "";
  nextButton.style.display = "none";
}
startQuiz();
 
nextButton.addEventListener("click",()=>{
  if(currQuestionIndex<question.length){
handlNextButton();
  }
  else{
    startQuiz();
  }
})

function handlNextButton(){
  currQuestionIndex++;
  if(currQuestionIndex<question.length){
showQuestion()
  }else{
showScore()
  }
}
function showScore(){
  resetState()
  questionElem.innerHTML= `You Have Scored ${score} out of ${question.length}!`
  nextButton.innerHTML="Play Again";
  nextButton.style.display="block"
}