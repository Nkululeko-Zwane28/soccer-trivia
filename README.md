# Soccer Trivia Master

A responsive browser-based soccer trivia adventure built with HTML, CSS, and JavaScript.

## New features

- Startup welcome screen and five-chapter story mode
- True 1–100 level progression map
- Five rounds with 25 timed questions
- Difficulty tiers: 1–20, 21–40, 41–60, 61–80, and 81–100
- Tier lock messaging and progressive level unlocking
- Correct/incorrect sound effects generated with the Web Audio API
- Animated level nodes, transitions, answer feedback, and result reveal
- Answers remain locked until all rounds are completed
- Local top-10 leaderboard using browser `localStorage`
- Name-safe leaderboard rendering and mobile-friendly layout
- Existing custom game controls and curated question categories remain available

## Run locally

Open `index.html` in a browser, or run:

```bash
python -m http.server 8000
```

Visit `http://localhost:8000`.

## Data and accuracy

The game contains a curated static question bank. Football records and competition results change over time, so facts should be reviewed against authoritative sources before presenting the game as a definitive historical database. The leaderboard is local to the browser and is not shared between players.
