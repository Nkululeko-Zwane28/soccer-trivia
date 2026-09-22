const allQuestions = [
  { category: "World Cup", level: 1, question: "Which country won the first FIFA World Cup in 1930?", options: ["Italy", "Uruguay", "Argentina", "Brazil"], answer: "Uruguay", fact: "Uruguay won the inaugural World Cup by beating Argentina 4-2 in the final." },
  { category: "World Cup", level: 3, question: "How many teams participate in the FIFA World Cup final tournament today?", options: ["24", "32", "48", "16"], answer: "32", fact: "The World Cup has had 32 teams in the tournament since 1998, with some earlier formats having fewer teams." },
  { category: "World Cup", level: 8, question: "Which country has won the most FIFA World Cups?", options: ["Germany", "Argentina", "Italy", "Brazil"], answer: "Brazil", fact: "Brazil have won the World Cup five times, more than any other nation." },
  { category: "World Cup", level: 12, question: "Who is the top scorer in World Cup history?", options: ["Miroslav Klose", "Pelé", "Ronaldo", "Gerd Müller"], answer: "Miroslav Klose", fact: "Miroslav Klose scored 16 goals across four World Cups and remains the all-time top scorer in the competition." },
  { category: "World Cup", level: 18, question: "Who won the 2018 FIFA World Cup?", options: ["Croatia", "France", "Argentina", "Germany"], answer: "France", fact: "France won the 2018 World Cup in Russia, defeating Croatia 4-2 in the final." },
  { category: "World Cup", level: 22, question: "Which country hosted the 2014 FIFA World Cup?", options: ["South Africa", "Brazil", "Germany", "Russia"], answer: "Brazil", fact: "Brazil was the host nation for the 2014 World Cup, which was won by Germany." },
  { category: "World Cup", level: 27, question: "Which player won the Golden Ball at the 2022 World Cup?", options: ["Kylian Mbappé", "Lionel Messi", "Rodri", "Luka Modrić"], answer: "Lionel Messi", fact: "Lionel Messi won the Golden Ball as the best player of the 2022 World Cup." },
  { category: "World Cup", level: 32, question: "Which nation won the 2002 World Cup?", options: ["Brazil", "France", "Germany", "Argentina"], answer: "Brazil", fact: "Brazil won the 2002 World Cup in Japan and South Korea, their fifth title." },
  { category: "World Cup", level: 40, question: "Who scored the famous 'Hand of God' goal in 1986?", options: ["Maradona", "Ronaldo", "Pelé", "Zidane"], answer: "Maradona", fact: "Diego Maradona scored the infamous Hand of God goal against England in 1986." },
  { category: "World Cup", level: 46, question: "Which country won the 1978 World Cup?", options: ["Argentina", "Uruguay", "West Germany", "Italy"], answer: "Argentina", fact: "Argentina won the 1978 World Cup in Argentina after defeating the Netherlands in the final." },

  { category: "Players", level: 2, question: "Which player is nicknamed 'CR7'?", options: ["Karim Benzema", "Cristiano Ronaldo", "Kylian Mbappé", "Mesut Özil"], answer: "Cristiano Ronaldo", fact: "CR7 is the nickname of Cristiano Ronaldo." },
  { category: "Players", level: 5, question: "Who is known as 'The Egyptian King'?", options: ["Mohamed Salah", "Omar Marmoush", "Hossam Hassan", "Ahmed Hassan"], answer: "Mohamed Salah", fact: "Mohamed Salah is widely known as 'The Egyptian King' in football." },
  { category: "Players", level: 9, question: "Which player won the Ballon d'Or in 2023?", options: ["Erling Haaland", "Rodri", "Lionel Messi", "Kylian Mbappé"], answer: "Lionel Messi", fact: "Lionel Messi won the 2023 Ballon d'Or." },
  { category: "Players", level: 15, question: "Who is the all-time top scorer in UEFA Champions League history?", options: ["Robert Lewandowski", "Karim Benzema", "Cristiano Ronaldo", "Lionel Messi"], answer: "Cristiano Ronaldo", fact: "Cristiano Ronaldo holds the record for most goals in the Champions League." },
  { category: "Players", level: 21, question: "Which player has won the most Ballon d'Or awards?", options: ["Cristiano Ronaldo", "Lionel Messi", "Michel Platini", "Johan Cruyff"], answer: "Lionel Messi", fact: "Lionel Messi has won the Ballon d'Or a record eight times." },
  { category: "Players", level: 26, question: "Who won the 2010 FIFA World Cup Golden Ball?", options: ["David Villa", "Wesley Sneijder", "Lionel Messi", "Diego Forlán"], answer: "Diego Forlán", fact: "Diego Forlán was named the best player of the 2010 World Cup." },
  { category: "Players", level: 30, question: "Which player is famous for the 'No. 10' role and captained Argentina to World Cup success in 2022?", options: ["Di María", "Messi", "Aguero", "Tevez"], answer: "Messi", fact: "Lionel Messi captained Argentina to the FIFA World Cup title in 2022." },
  { category: "Players", level: 34, question: "Who won the 2018 FIFA World Cup Golden Ball?", options: ["Kylian Mbappé", "Luka Modrić", "Antoine Griezmann", "Harry Kane"], answer: "Harry Kane", fact: "Harry Kane won the Golden Boot, while Luka Modrić won the Golden Ball in 2018." },
  { category: "Players", level: 39, question: "Which player won the FIFA World Cup in 2014 with Germany and later retired from international football?", options: ["Mats Hummels", "Thomas Müller", "Philipp Lahm", "Bastian Schweinsteiger"], answer: "Philipp Lahm", fact: "Philipp Lahm captained Germany to their fourth World Cup in 2014." },
  { category: "Players", level: 44, question: "Who was the top scorer at Euro 2024?", options: ["Kylian Mbappé", "Harry Kane", "Rodri", "Bukayo Saka"], answer: "Kylian Mbappé", fact: "Kylian Mbappé was one of the standout scorers at Euro 2024, depending on the tournament edition in the fictionalized challenge set." },

  { category: "Clubs", level: 4, question: "Which club has won the most UEFA Champions League titles?", options: ["Barcelona", "Bayern Munich", "Liverpool", "Real Madrid"], answer: "Real Madrid", fact: "Real Madrid have won the Champions League a record 15 times." },
  { category: "Clubs", level: 7, question: "Which club is nicknamed 'The Reds'?", options: ["Manchester United", "Liverpool", "Chelsea", "Arsenal"], answer: "Liverpool", fact: "Liverpool are famously known as 'The Reds'." },
  { category: "Clubs", level: 11, question: "Which club is nicknamed 'The Old Lady'?", options: ["Juventus", "AC Milan", "Inter Milan", "Napoli"], answer: "Juventus", fact: "Juventus are commonly referred to as 'The Old Lady'." },
  { category: "Clubs", level: 17, question: "Which English club has won the Premier League the most times?", options: ["Arsenal", "Chelsea", "Manchester United", "Liverpool"], answer: "Manchester United", fact: "Manchester United have won the Premier League title more times than any other club." },
  { category: "Clubs", level: 23, question: "Which club plays its home matches at Camp Nou?", options: ["Real Madrid", "Barcelona", "Atletico Madrid", "Valencia"], answer: "Barcelona", fact: "Camp Nou is the home ground of Barcelona." },
  { category: "Clubs", level: 29, question: "Which club is based in Milan and plays in red and black stripes?", options: ["Inter Milan", "Juventus", "AC Milan", "Roma"], answer: "AC Milan", fact: "AC Milan are famous for their red and black kits." },
  { category: "Clubs", level: 35, question: "Which club won the 2022-23 UEFA Champions League?", options: ["Manchester City", "Real Madrid", "Bayern Munich", "Inter Milan"], answer: "Manchester City", fact: "Manchester City won the 2022-23 UEFA Champions League, their first title in the competition." },
  { category: "Clubs", level: 41, question: "Which club won the 2023-24 UEFA Champions League?", options: ["Real Madrid", "Barcelona", "Bayern Munich", "Inter Milan"], answer: "Real Madrid", fact: "Real Madrid continued their European dominance by winning the 2023-24 Champions League." },
  { category: "Clubs", level: 48, question: "Which club is known as 'The Bianconeri'?", options: ["Juventus", "Napoli", "Roma", "Parma"], answer: "Juventus", fact: "Juventus are sometimes referred to as 'The Bianconeri' because of their black-and-white stripes." },
  { category: "Clubs", level: 56, question: "Which club won the 2024 Copa Libertadores?", options: ["Flamengo", "River Plate", "Boca Juniors", "Palmeiras"], answer: "Flamengo", fact: "Flamengo are among the most decorated clubs in South American football and have won multiple Libertadores titles." },

  { category: "Records", level: 6, question: "Which nation has won the Africa Cup of Nations most times?", options: ["Nigeria", "Ghana", "Egypt", "Cameroon"], answer: "Egypt", fact: "Egypt have won the Africa Cup of Nations a record seven times." },
  { category: "Records", level: 10, question: "Which player is the all-time top scorer in men's international football?", options: ["Lionel Messi", "Cristiano Ronaldo", "Ali Daei", "Miroslav Klose"], answer: "Cristiano Ronaldo", fact: "Cristiano Ronaldo holds the record for the most goals in men's international football." },
  { category: "Records", level: 14, question: "Which player scored 13 goals in a single World Cup tournament in 1958?", options: ["Pelé", "Just Fontaine", "Gerd Müller", "Ronaldo"], answer: "Just Fontaine", fact: "Just Fontaine scored 13 goals in the 1958 World Cup, a record for a single tournament." },
  { category: "Records", level: 19, question: "Which club has won the most Copa Libertadores titles?", options: ["Independiente", "River Plate", "Boca Juniors", "Flamengo"], answer: "Independiente", fact: "Independiente hold the record for the most Copa Libertadores titles." },
  { category: "Records", level: 24, question: "Which goalkeeper has won the most UEFA Champions League titles?", options: ["Iker Casillas", "Manuel Neuer", "Peter Schmeichel", "Gianluigi Buffon"], answer: "Iker Casillas", fact: "Iker Casillas won the Champions League with Real Madrid on three occasions." },
  { category: "Records", level: 31, question: "Which player scored the most goals in a single Premier League season?", options: ["Alan Shearer", "Sergio Agüero", "Luis Suárez", "Mohamed Salah"], answer: "Alan Shearer", fact: "Alan Shearer holds the record for the most goals in a single Premier League season with 31." },
  { category: "Records", level: 37, question: "Which player has won the most FIFA World Cup titles?", options: ["Pelé", "Pavel Nedvěd", "Diego Maradona", "Zinedine Zidane"], answer: "Pelé", fact: "Pelé won three FIFA World Cups with Brazil." },
  { category: "Records", level: 43, question: "Which African nation won the 2013 Africa Cup of Nations?", options: ["Ghana", "Nigeria", "Cameroon", "Burkina Faso"], answer: "Nigeria", fact: "Nigeria won the 2013 AFCON in South Africa." },
  { category: "Records", level: 52, question: "Which player won the Golden Boot at the 2014 World Cup?", options: ["Thomas Müller", "James Rodríguez", "Lionel Messi", "Robin van Persie"], answer: "James Rodríguez", fact: "James Rodríguez won the Golden Boot at the 2014 World Cup with six goals." },
  { category: "Records", level: 60, question: "Which player is the all-time leading scorer in the UEFA European Championship?", options: ["Michel Platini", "Alan Shearer", "Cristiano Ronaldo", "Ruud Gullit"], answer: "Cristiano Ronaldo", fact: "Cristiano Ronaldo is the all-time top scorer in UEFA European Championship history." },

  { category: "Tournaments", level: 13, question: "Which competition is the top club tournament in Europe?", options: ["Europa League", "Copa del Rey", "Champions League", "FA Cup"], answer: "Champions League", fact: "The UEFA Champions League is the elite European club competition." },
  { category: "Tournaments", level: 20, question: "Which team won Euro 2020?", options: ["England", "France", "Italy", "Spain"], answer: "Italy", fact: "Italy won Euro 2020, defeating England on penalties in the final." },
  { category: "Tournaments", level: 25, question: "Which club won the first ever Premier League title in 1992-93?", options: ["Manchester United", "Blackburn Rovers", "Liverpool", "Arsenal"], answer: "Manchester United", fact: "Manchester United won the inaugural Premier League title in 1992-93." },
  { category: "Tournaments", level: 33, question: "Which nation won the 2019 Copa América?", options: ["Brazil", "Argentina", "Chile", "Uruguay"], answer: "Brazil", fact: "Brazil defeated Peru in the 2019 Copa América final." },
  { category: "Tournaments", level: 38, question: "Who won the 2021 Copa América?", options: ["Brazil", "Argentina", "Uruguay", "Chile"], answer: "Argentina", fact: "Argentina won the 2021 Copa América, defeating Brazil in the final." },
  { category: "Tournaments", level: 45, question: "Which club won the 2022-23 English Premier League title?", options: ["Arsenal", "Manchester City", "Liverpool", "Chelsea"], answer: "Manchester City", fact: "Manchester City won the Premier League in 2022-23." },
  { category: "Tournaments", level: 50, question: "Which club won the 2023-24 La Liga title?", options: ["Barcelona", "Real Madrid", "Atletico Madrid", "Girona"], answer: "Real Madrid", fact: "Real Madrid won the 2023-24 La Liga title." },
  { category: "Tournaments", level: 58, question: "Which team won the 2022 FIFA World Cup?", options: ["Argentina", "France", "Brazil", "Germany"], answer: "Argentina", fact: "Argentina defeated France in the 2022 World Cup final on penalties." },
  { category: "Tournaments", level: 66, question: "Which club has won the most Serie A titles in Italy?", options: ["Juventus", "AC Milan", "Inter Milan", "Napoli"], answer: "Juventus", fact: "Juventus have won the most Serie A titles in Italian football history." },
  { category: "Tournaments", level: 72, question: "Which club won the 2024 Copa del Rey?", options: ["Barcelona", "Real Madrid", "Girona", "Atletico Madrid"], answer: "Barcelona", fact: "Barcelona won the Copa del Rey in the 2023-24 campaign." }
];

const setupScreen = document.getElementById("setupScreen");
const gameScreen = document.getElementById("gameScreen");
const resultsScreen = document.getElementById("resultsScreen");
const difficultySlider = document.getElementById("difficultySlider");
const difficultyValue = document.getElementById("difficultyValue");
const categorySelect = document.getElementById("categorySelect");
const questionCountSelect = document.getElementById("questionCountSelect");
const startButton = document.getElementById("startButton");
const scoreDisplay = document.getElementById("scoreDisplay");
const progressDisplay = document.getElementById("progressDisplay");
const timerDisplay = document.getElementById("timerDisplay");
const progressBar = document.getElementById("progressBar");
const levelBadge = document.getElementById("levelBadge");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const nextButton = document.getElementById("nextButton");
const finalScore = document.getElementById("finalScore");
const accuracyPercent = document.getElementById("accuracyPercent");
const correctCount = document.getElementById("correctCount");
const totalQuestions = document.getElementById("totalQuestions");
const summaryMessage = document.getElementById("summaryMessage");
const answersList = document.getElementById("answersList");
const answerSection = document.getElementById("answerSection");
const restartButton = document.getElementById("restartButton");

let questionPool = [];
let currentIndex = 0;
let score = 0;
let correctAnswers = 0;
let selectedAnswers = [];
let timerInterval = null;
let timeLeft = 20;
let totalQuestionsInRound = 0;

function updateDifficultyLabel() {
  difficultyValue.textContent = difficultySlider.value;
}

function getFilteredQuestions() {
  const selectedCategory = categorySelect.value;
  const maxDifficulty = Number(difficultySlider.value);

  return allQuestions
    .filter((item) => item.level <= maxDifficulty)
    .filter((item) => selectedCategory === "all" || item.category === selectedCategory)
    .sort((a, b) => a.level - b.level);
}

function buildQuestionSet() {
  const filtered = getFilteredQuestions();
  const target = Number(questionCountSelect.value);

  if (filtered.length <= target) {
    return [...filtered].sort(() => Math.random() - 0.5).slice(0, filtered.length);
  }

  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, target);
}

function startGame() {
  clearInterval(timerInterval);
  selectedAnswers = [];
  currentIndex = 0;
  score = 0;
  correctAnswers = 0;

  questionPool = buildQuestionSet();
  totalQuestionsInRound = questionPool.length;

  setupScreen.classList.add("hidden");
  resultsScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");

  renderQuestion();
}

function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 20;
  timerDisplay.textContent = `Time: ${timeLeft}s`;

  timerInterval = setInterval(() => {
    timeLeft -= 1;
    timerDisplay.textContent = `Time: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeout();
    }
  }, 1000);
}

function renderQuestion() {
  if (currentIndex >= questionPool.length) {
    finishGame();
    return;
  }

  const currentQuestion = questionPool[currentIndex];
  const progressPercent = ((currentIndex) / totalQuestionsInRound) * 100;
  progressBar.style.width = `${progressPercent}%`;
  progressDisplay.textContent = `Question ${currentIndex + 1}/${totalQuestionsInRound}`;
  scoreDisplay.textContent = `Score: ${score}`;
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
  startTimer();
}

function handleAnswer(button, chosenOption, currentQuestion) {
  clearInterval(timerInterval);

  const buttons = [...optionsContainer.querySelectorAll("button")];
  buttons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === currentQuestion.answer) {
      btn.classList.add("correct");
    }
    if (btn.textContent === chosenOption && btn.textContent !== currentQuestion.answer) {
      btn.classList.add("incorrect");
    }
  });

  const isCorrect = chosenOption === currentQuestion.answer;
  if (isCorrect) {
    correctAnswers += 1;
    score += 10 + currentQuestion.level;
  }

  selectedAnswers.push({
    question: currentQuestion.question,
    selected: chosenOption,
    correct: currentQuestion.answer,
    isCorrect,
    fact: currentQuestion.fact,
    level: currentQuestion.level
  });

  scoreDisplay.textContent = `Score: ${score}`;
  nextButton.classList.remove("hidden");
}

function handleTimeout() {
  const currentQuestion = questionPool[currentIndex];
  const buttons = [...optionsContainer.querySelectorAll("button")];

  buttons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === currentQuestion.answer) {
      btn.classList.add("correct");
    }
  });

  selectedAnswers.push({
    question: currentQuestion.question,
    selected: "No answer",
    correct: currentQuestion.answer,
    isCorrect: false,
    fact: currentQuestion.fact,
    level: currentQuestion.level
  });

  nextButton.classList.remove("hidden");
}

function nextQuestion() {
  currentIndex += 1;
  const progressPercent = (currentIndex / totalQuestionsInRound) * 100;
  progressBar.style.width = `${Math.min(progressPercent, 100)}%`;

  if (currentIndex < questionPool.length) {
    renderQuestion();
  } else {
    finishGame();
  }
}

function computeFinalScore() {
  const accuracy = (correctAnswers / totalQuestionsInRound) * 100;
  const maxPossiblePoints = totalQuestionsInRound * 110;
  const pointsPercent = (score / maxPossiblePoints) * 100;
  const finalAggregate = Math.min(100, Math.round((accuracy * 0.6) + (pointsPercent * 0.4)));

  return { accuracy, pointsPercent, finalAggregate };
}

function finishGame() {
  clearInterval(timerInterval);
  gameScreen.classList.add("hidden");
  resultsScreen.classList.remove("hidden");

  const { accuracy, pointsPercent, finalAggregate } = computeFinalScore();
  finalScore.textContent = `${finalAggregate}/100`;
  accuracyPercent.textContent = `${Math.round(accuracy)}%`;
  correctCount.textContent = correctAnswers;
  totalQuestions.textContent = totalQuestionsInRound;

  if (finalAggregate >= 80) {
    summaryMessage.textContent = "Outstanding! You have a world-class understanding of football facts and records.";
  } else if (finalAggregate >= 60) {
    summaryMessage.textContent = "Strong performance. You know your football history well and are close to elite-level knowledge.";
  } else if (finalAggregate >= 40) {
    summaryMessage.textContent = "Solid effort. You have a good football base with room to improve your match knowledge.";
  } else {
    summaryMessage.textContent = "A good start. Review the answers and get back on the pitch with more football study.";
  }

  answerSection.classList.remove("hidden");
  answersList.innerHTML = "";

  selectedAnswers.forEach((entry) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <strong>${entry.isCorrect ? "Correct" : "Incorrect"}</strong> — ${entry.question}<br>
      Your answer: <strong>${entry.selected}</strong><br>
      Correct answer: <strong>${entry.correct}</strong><br>
      Fact: ${entry.fact}
    `;
    answersList.appendChild(item);
  });
}

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", () => {
  resultsScreen.classList.add("hidden");
  setupScreen.classList.remove("hidden");
  difficultySlider.value = 100;
  updateDifficultyLabel();
});
difficultySlider.addEventListener("input", updateDifficultyLabel);

updateDifficultyLabel();
