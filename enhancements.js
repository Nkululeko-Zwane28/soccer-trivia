/* Feature layer: five-round story mode, Web Audio feedback, level map and local leaderboard. */
(() => {
  const $ = (id) => document.getElementById(id);
  const welcome = $("welcomeScreen");
  const leaderboardScreen = $("leaderboardScreen");
  const setup = $("setupScreen");
  const game = $("gameScreen");
  const results = $("resultsScreen");
  const originalStart = $("startButton");
  const storyStart = $("storyStartButton");
  const next = $("nextButton");
  const restart = $("restartButton");
  const answerSection = $("answerSection");
  const leaderboardKey = "soccerTriviaLeaderboard";
  let audioContext;
  let storyQuestions = [];
  let storyIndex = 0;
  let storyScore = 0;
  let storyCorrect = 0;
  let storyAnswers = [];
  let storyTimer;
  let storyTime = 20;
  let storyAnswered = false;

  function sound(type) {
    try {
      audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      oscillator.connect(gain); gain.connect(audioContext.destination);
      const notes = type === "correct" ? [523, 659, 784] : type === "wrong" ? [180, 130] : [330, 440];
      oscillator.frequency.value = notes[0]; oscillator.type = "sine";
      gain.gain.setValueAtTime(.0001, audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(.08, audioContext.currentTime + .02);
      gain.gain.exponentialRampToValueAtTime(.0001, audioContext.currentTime + .24);
      oscillator.start(); oscillator.stop(audioContext.currentTime + .25);
    } catch (_) { /* Audio is optional and may be blocked until user interaction. */ }
  }

  function showOnly(section) {
    [welcome, leaderboardScreen, setup, game, results].forEach((item) => item?.classList.add("hidden"));
    section?.classList.remove("hidden"); section?.classList.add("fade-in");
  }

  function getLeaderboard() { try { return JSON.parse(localStorage.getItem(leaderboardKey) || "[]"); } catch (_) { return []; } }
  function renderLeaderboard() {
    const list = $("leaderboardList"); const scores = getLeaderboard();
    list.innerHTML = scores.length ? scores.map((entry, i) => `<li><span><span class="rank">${i + 1}.</span> ${escapeHtml(entry.name)}</span><span class="score">${entry.score}/100</span></li>`).join("") : `<li><span>No scores yet. Complete the story to become the first champion.</span></li>`;
  }
  function saveLeaderboard() {
    const name = ($("playerName").value || "Anonymous Fan").trim().slice(0, 18);
    const score = Number($("finalScore").textContent.split("/")[0]) || 0;
    const scores = [...getLeaderboard(), { name, score, date: new Date().toISOString() }].sort((a,b) => b.score - a.score).slice(0, 10);
    localStorage.setItem(leaderboardKey, JSON.stringify(scores));
    $("saveScoreBox").innerHTML = `<p class="helper-text">Score saved. Your result is now in the hall of fame.</p>`;
    renderLeaderboard(); sound("correct");
  }
  function escapeHtml(value) { return value.replace(/[&<>'"]/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[char])); }

  function buildLevelMap(currentLevel) {
    const map = $("levelMap"); map.innerHTML = "";
    for (let level = 1; level <= 100; level += 1) {
      const node = document.createElement("span"); node.className = `level-node ${level <= currentLevel ? "unlocked" : "locked"} ${level === currentLevel ? "current" : ""}`; node.textContent = level; node.title = level <= currentLevel ? `Level ${level} unlocked` : `Level ${level} locked`;
      map.appendChild(node);
    }
  }
  function levelFor(index) { return Math.min(100, Math.floor(index / Math.max(1, storyQuestions.length / 100)) + 1); }
  function chapterFor(level) { return Math.min(5, Math.ceil(level / 20)); }
  function buildStoryQuestions() {
    const source = window.allQuestions || [];
    const shuffled = [...source].sort(() => Math.random() - .5);
    const target = 25;
    if (!shuffled.length) return [];
    return Array.from({ length: target }, (_, i) => ({ ...shuffled[i % shuffled.length], level: Math.min(100, Math.floor((i / target) * 100) + 1) }));
  }
  function startStory() {
    clearInterval(storyTimer); storyQuestions = buildStoryQuestions(); storyIndex = 0; storyScore = 0; storyCorrect = 0; storyAnswers = [];
    showOnly(game); renderStoryQuestion(); sound("start");
  }
  function renderStoryQuestion() {
    if (storyIndex >= storyQuestions.length) return finishStory();
    storyAnswered = false; const item = storyQuestions[storyIndex]; const level = item.level; const chapter = chapterFor(level);
    $("storyRoundLabel").textContent = `Chapter ${chapter} · Round ${chapter}`; $("tierLockLabel").textContent = `Levels ${chapter * 20 - 19}–${chapter * 20} · next tier locked`;
    $("scoreDisplay").textContent = `Score: ${storyScore}`; $("progressDisplay").textContent = `Question ${storyIndex + 1}/${storyQuestions.length}`; $("levelBadge").textContent = level; $("questionText").textContent = item.question; buildLevelMap(level);
    $("progressBar").style.width = `${(storyIndex / storyQuestions.length) * 100}%`; $("optionsContainer").innerHTML = ""; $("nextButton").classList.add("hidden");
    item.options.forEach((option) => { const button = document.createElement("button"); button.className = "option-button"; button.type = "button"; button.textContent = option; button.onclick = () => answerStory(button, option, item); $("optionsContainer").appendChild(button); });
    startStoryTimer();
  }
  function startStoryTimer() { clearInterval(storyTimer); storyTime = Math.max(8, 22 - Math.floor(storyQuestions[storyIndex].level / 10)); $("timerDisplay").textContent = `Time: ${storyTime}s`; storyTimer = setInterval(() => { storyTime -= 1; $("timerDisplay").textContent = `Time: ${storyTime}s`; if (storyTime <= 0) { clearInterval(storyTimer); answerStory(null, "No answer", storyQuestions[storyIndex]); } }, 1000); }
  function answerStory(button, chosen, item) {
    if (storyAnswered) return; storyAnswered = true; clearInterval(storyTimer); const correct = chosen === item.answer;
    document.querySelectorAll("#optionsContainer .option-button").forEach((node) => { node.disabled = true; if (node.textContent === item.answer) node.classList.add("correct"); if (node.textContent === chosen && !correct) node.classList.add("incorrect"); });
    if (button && !correct) button.classList.add("shake"); if (correct) { storyCorrect += 1; storyScore += 10 + item.level; sound("correct"); } else sound("wrong");
    storyAnswers.push({ ...item, selected: chosen, isCorrect: correct }); $("scoreDisplay").textContent = `Score: ${storyScore}`; next.classList.remove("hidden");
  }
  function finishStory() {
    clearInterval(storyTimer); const total = storyQuestions.length; const accuracy = total ? storyCorrect / total * 100 : 0; const points = total ? storyScore / (total * 110) * 100 : 0; const aggregate = Math.min(100, Math.round(accuracy * .6 + points * .4));
    showOnly(results); $("finalScore").textContent = `${aggregate}/100`; $("accuracyPercent").textContent = `${Math.round(accuracy)}%`; $("correctCount").textContent = storyCorrect; $("totalQuestions").textContent = total; $("summaryMessage").textContent = aggregate >= 80 ? "Legendary campaign. The answer vault is now open." : aggregate >= 50 ? "Strong campaign. The complete answer vault is now open." : "Every legend starts somewhere. Review the vault and try again."; answerSection.classList.add("unlocked"); answerSection.querySelector(".helper-text").textContent = "All five chapters completed — answers unlocked."; $("answersList").innerHTML = storyAnswers.map((item) => `<li><strong>${item.isCorrect ? "Correct" : "Incorrect"}</strong> — ${item.question}<br>Your answer: <strong>${escapeHtml(item.selected)}</strong><br>Correct answer: <strong>${escapeHtml(item.answer)}</strong><br>Fact: ${escapeHtml(item.fact)}</li>`).join(""); sound("start");
  }

  storyStart.onclick = startStory; $("leaderboardButton").onclick = () => { renderLeaderboard(); showOnly(leaderboardScreen); }; $("backToWelcome").onclick = () => showOnly(welcome); $("resultsLeaderboardButton").onclick = () => { renderLeaderboard(); showOnly(leaderboardScreen); }; $("clearLeaderboard").onclick = () => { localStorage.removeItem(leaderboardKey); renderLeaderboard(); }; $("saveScoreButton").onclick = saveLeaderboard;
  next.onclick = () => { storyIndex += 1; renderStoryQuestion(); };
  restart.onclick = () => { answerSection.classList.remove("unlocked"); showOnly(welcome); };
  originalStart.addEventListener("click", (event) => { event.preventDefault(); event.stopImmediatePropagation(); startStory(); }, true);
  showOnly(welcome);
})();
