const allQuestions = [
  {
    level: 5,
    question: "Which country won the first-ever FIFA World Cup in 1930?",
    options: ["Argentina", "Italy", "Uruguay", "Brazil"],
    answer: "Uruguay",
    fact: "Uruguay won the inaugural 1930 World Cup, defeating Argentina 4-2 in the final."
  },
  {
    level: 10,
    question: "Which club has won the most UEFA Champions League titles?",
    options: ["FC Barcelona", "Bayern Munich", "Real Madrid", "Liverpool"],
    answer: "Real Madrid",
    fact: "Real Madrid have won the UEFA Champions League a record 15 times."
  },
  {
    level: 12,
    question: "Who is the all-time top scorer in men's international football?",
    options: ["Lionel Messi", "Cristiano Ronaldo", "Ali Daei", "Miroslav Klose"],
    answer: "Cristiano Ronaldo",
    fact: "Cristiano Ronaldo holds the record for the most goals in men's international football."
  },
  {
    level: 18,
    question: "Which nation has won the most FIFA World Cups?",
    options: ["Germany", "Italy", "Argentina", "Brazil"],
    answer: "Brazil",
    fact: "Brazil have won the World Cup five times, the highest total."
  },
  {
    level: 22,
    question: "Who scored the winning goal in the 2018 FIFA World Cup final?",
    options: ["Harry Kane", "Antoine Griezmann", "Mario Mandzukic", "Kylian Mbappe"],
    answer: "Mario Mandzukic",
    fact: "Mario Mandzukic scored the decisive goal as Croatia beat England in the semifinals, but the 2018 final was won by France after Mbappe's hat-trick."
  },
  {
    level: 28,
    question: "Which player won the Ballon d'Or in 2023?",
    options: ["Kylian Mbappe", "Erling Haaland", "Lionel Messi", "Rodri"],
    answer: "Lionel Messi",
    fact: "Lionel Messi won the 2023 Ballon d'Or after a strong season with Inter Miami and Argentina."
  },
  {
    level: 35,
    question: "Which player is known as 'CR7'?",
    options: ["Karim Benzema", "Kylian Mbappe", "Cristiano Ronaldo", "Andres Iniesta"],
    answer: "Cristiano Ronaldo",
    fact: "CR7 is the nickname of Cristiano Ronaldo."
  },
  {
    level: 40,
    question: "Which club has won the English Premier League title the most times?",
    options: ["Liverpool", "Chelsea", "Manchester United", "Arsenal"],
    answer: "Manchester United",
    fact: "Manchester United have won the Premier League more times than any other club."
  },
  {
    level: 45,
    question: "Which stadium hosted the 2014 FIFA World Cup final?",
    options: ["Maracanã", "Estadio Azteca", "Wembley", "Moscow Stadium"],
    answer: "Maracanã",
    fact: "The 2014 final was played at the Maracanã in Rio de Janeiro."
  },
  {
    level: 52,
    question: "Which goalkeeper won the Golden Glove at the 2018 World Cup?",
    options: ["Keylor Navas", "Thibaut Courtois", "Manuel Neuer", "David De Gea"],
    answer: "Thibaut Courtois",
    fact: "Courtois won the Golden Glove after Belgium's run to the semifinals in Russia."
  },
  {
    level: 58,
    question: "Who is the all-time top scorer in the UEFA Champions League?",
    options: ["Robert Lewandowski", "Cristiano Ronaldo", "Mesut Ozil", "Karim Benzema"],
    answer: "Cristiano Ronaldo",
    fact: "Cristiano Ronaldo is the all-time leading scorer in the Champions League."
  },
  {
    level: 65,
    question: "Which player won the FIFA World Cup 2022 Golden Ball award?",
    options: ["Kylian Mbappe", "Lionel Messi", "Rodri", "Luka Modric"],
    answer: "Lionel Messi",
    fact: "Lionel Messi won the Golden Ball as the best player of the 2022 World Cup."
  },
  {
    level: 70,
    question: "Which club has won the most Copa Libertadores titles?",
    options: ["River Plate", "Boca Juniors", "Independiente", "Flamengo"],
    answer: "Independiente",
    fact: "Independiente hold the record for the most Copa Libertadores titles."
  },
  {
    level: 75,
    question: "Who scored the famous 'Hand of God' goal in the 1986 World Cup?",
    options: ["Diego Maradona", "Pelé", "Gary Lineker", "Zinedine Zidane"],
    answer: "Diego Maradona",
    fact: "Diego Maradona scored the controversial Hand of God goal against England in 1986."
  },
  {
    level: 80,
    question: "Which country has won the African Cup of Nations the most times?",
    options: ["Ghana", "Cameroon", "Egypt", "Nigeria"],
    answer: "Egypt",
    fact: "Egypt have won the Africa Cup of Nations a record seven times."
  },
  {
    level: 86,
    question: "Which player won the 2010 Ballon d'Or?",
    options: ["Cristiano Ronaldo", "Xavi", "Andres Iniesta", "Lionel Messi"],
    answer: "Lionel Messi",
    fact: "Lionel Messi won the 2010 Ballon d'Or after an iconic season with Barcelona."
  },
  {
    level: 90,
    question: "Which club is nicknamed 'The Old Lady'?",
    options: ["Juventus", "Inter Milan", "Napoli", "AC Milan"],
    answer: "Juventus",
    fact: "Juventus are commonly known as 'The Old Lady' of Italian football."
  },
  {
    level: 95,
    question: "Who is the only player to win the World Cup, Champions League, and Ballon d'Or in the same year?",
    options: ["Zinedine Zidane", "Ronald Koeman", "Lionel Messi", "Paolo Maldini"],
    answer: "Lionel Messi",
    fact: "Lionel Messi won the World Cup, the Champions League, and the Ballon d'Or across his career, with the 2015-16 season being a major peak."
  },
  {
    level: 100,
    question: "Which player holds the record for the most goals in a single FIFA World Cup tournament?",
    options: ["Just Fontaine", "Miroslav Klose", "Gerd Muller", "Ronaldo"],
    answer: "Just Fontaine",
    fact: "Just Fontaine scored 13 goals in the 1958 World Cup, a record for a single tournament."
  }
];

const setupScreen = document.getElementById("setupScreen");
const gameScreen = document.getElementById("gameScreen");
const resultsScreen = document.getElementById("resultsScreen");
const difficultySlider = document.getElementById("difficultySlider");
const difficultyValue = document.getElementById("difficultyValue");
const startButton = document.getElementById("startButton");
const progressDisplay = document.getElementById("progressDisplay");
const scoreDisplay = document.getElementById("scoreDisplay");
const questionText = document.getElementById("questionText");
const levelBadge = document.getElementById("levelBadge");
const optionsContainer = document.getElementById("optionsContainer");
const nextButton = document.getElementById("nextButton");
const aggregateScore = document.getElementById("aggregateScore");
const accuracyPercent = document.getElementById("accuracyPercent");
const correctCount = document.getElementById("correctCount");
const totalQuestions = document.getElementById("totalQuestions");
const answersList = document.getElementById("answersList");
const answerSection = document.getElementById("answerSection");
const restartButton = document.getElementById("restartButton");

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let correctAnswers = 0;
let selectedDifficulty = 50;
let selectedAnswers = [];

function updateDifficultyLabel() {
  selectedDifficulty = Number(difficultySlider.value);
  difficultyValue.textContent = selectedDifficulty;
}

function buildQuestionSet(level) {
  const eligible = [...allQuestions]
    .filter((q) => q.level <= level)
    .sort((a, b) => a.level - b.level);

  let finalSet = eligible.slice(0, 10);

  if (finalSet.length < 10) {
    const extra = [...allQuestions]
      .filter((q) => !finalSet.some((selected) => selected.question === q.question))
      .slice(0, 10 - finalSet.length);
    finalSet = [...finalSet, ...extra];
  }

  return finalSet.slice(0, 10);
}

function startGame() {
  updateDifficultyLabel();
  currentQuestions = buildQuestionSet(selectedDifficulty);
  currentIndex = 0;
  score = 0;
  correctAnswers = 0;
  selectedAnswers = [];

  setupScreen.classList.add("hidden");
  resultsScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");

  renderQuestion();
}

function renderQuestion() {
  const currentQuestion = currentQuestions[currentIndex];
  if (!currentQuestion) {
    finishGame();
    return;
  }

  scoreDisplay.textContent = `Score: ${score}`;
  progressDisplay.textContent = `Question ${currentIndex + 1}/${currentQuestions.length}`;
  levelBadge.textContent = currentQuestion.level;
  questionText.textContent = currentQuestion.question;

  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.textContent = option;
    button.addEventListener("click", () => handleAnswer(button, option, currentQuestion));
    optionsContainer.appendChild(button);
  });

  nextButton.classList.add("hidden");
}

function handleAnswer(button, chosenOption, currentQuestion) {
  const buttons = [...optionsContainer.querySelectorAll("button")];

  buttons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === currentQuestion.answer) {
      btn.classList.add("correct");
    }
    if (btn.textContent === chosenOption && chosenOption !== currentQuestion.answer) {
      btn.classList.add("incorrect");
    }
  });

  const isCorrect = chosenOption === currentQuestion.answer;
  if (isCorrect) {
    correctAnswers += 1;
    const reward = 10 + currentQuestion.level;
    score += reward;
  }

  scoreDisplay.textContent = `Score: ${score}`;
  selectedAnswers.push({
    question: currentQuestion.question,
    selected: chosenOption,
    correct: currentQuestion.answer,
    isCorrect,
    fact: currentQuestion.fact
  });

  nextButton.classList.remove("hidden");
}

function nextQuestion() {
  currentIndex += 1;

  if (currentIndex < currentQuestions.length) {
    renderQuestion();
  } else {
    finishGame();
  }
}

function finishGame() {
  gameScreen.classList.add("hidden");
  resultsScreen.classList.remove("hidden");

  const accuracy = (correctAnswers / currentQuestions.length) * 100;
  const pointsRatio = (score / (currentQuestions.length * (10 + 100))) * 100;
  const aggregate = (pointsRatio * 0.7) + (accuracy * 0.3);

  aggregateScore.textContent = `${Math.round(aggregate)}/100`;
  accuracyPercent.textContent = `${Math.round(accuracy)}%`;
  correctCount.textContent = correctAnswers;
  totalQuestions.textContent = currentQuestions.length;

  answersList.innerHTML = "";
  selectedAnswers.forEach((entry) => {
    const item = document.createElement("li");
    item.innerHTML = `<strong>${entry.isCorrect ? "Correct" : "Incorrect"}</strong> — ${entry.question}<br> Your answer: <strong>${entry.selected}</strong><br> Correct answer: <strong>${entry.correct}</strong><br> Fact: ${entry.fact}`;
    answersList.appendChild(item);
  });

  answerSection.classList.remove("hidden");
}

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", () => {
  resultsScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");
  difficultySlider.value = 50;
  updateDifficultyLabel();
});
difficultySlider.addEventListener("input", updateDifficultyLabel);

updateDifficultyLabel();
