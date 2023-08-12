// Sample quiz questions
const questions = [
    {
      question: "1. Who is the GOAT of Football?",
      choices: ["Pele", "Cristiano Ronaldo", "Lionel Messi", "Maradona"],
      correctAnswer: 1,
    },
    {
      question: "2. What is 2 + 2?",
      choices: ["3", "4", "5", "6"],
      correctAnswer: 1,
    },
    {
        question: "3. What is the capital of Nepal?",
        choices:["Pokhara","Nepaljung","Kathmandu","Baglung"],
        correctAnswer:2,
    },{
      question: "4. Which country does Cristiano Ronaldo belongs to ",
      choices:["Nepal" ,"Argentina","Portugal","Spain"],
      correctAnswer:2,
    }
];
  
  let currentQuestion = 0;
  let score = 0;

function displayQuestion() {
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  
  questionElement.textContent = questions[currentQuestion].question;
  
  choicesElement.innerHTML = "";
  questions[currentQuestion].choices.forEach((choice, index) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = choice;
    button.setAttribute("onclick", `checkAnswer(${index})`);
    li.appendChild(button);
    choicesElement.appendChild(li);
  });
  
  updateScore();
}
  
function checkAnswer(choiceIndex) {
  if (choiceIndex === questions[currentQuestion].correctAnswer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    showResult();
  }
}
  
  function updateScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Score: ${score}`;
    console.log("yes Score is updating")
  }
  
  function showResult() {
    const container1 = document.querySelector(".container1");
    container1.innerHTML = `
      <h1>Quiz App</h1>
      <p>Congratulations! You have completed the quiz.</p>
      <p>Your final score is: ${score}/${questions.length}</p>
    `;
  }
  displayQuestion();
  