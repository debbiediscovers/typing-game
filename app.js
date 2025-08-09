// Game logic for Shakespeare Typing Game
// Expects QUOTES = [{ text: '...', play: '...' }, ...]

// Normalise curly quotes/apostrophes to straight equivalents for robust comparison
function normaliseQuotes(str) {
  return String(str)
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"');
}

// Utility: sample without replacement bag
let bag = [];
function nextQuote() {
  if (bag.length === 0) {
    bag = [...QUOTES].sort(() => Math.random() - 0.5);
  }
  return bag.pop();
}

const quoteEl = document.getElementById('quote');
const inputEl = document.getElementById('input');
const statsEl = document.getElementById('stats');
const scoreEl = document.getElementById('score');
const highScoreEl = document.getElementById('highScore');
const overlay = document.getElementById('resultOverlay');
const finalWPM = document.getElementById('finalWPM');
const finalAcc = document.getElementById('finalAcc');
const finalVsAvg = document.getElementById('finalVsAvg');
const finalTime = document.getElementById('finalTime');
const finalScore = document.getElementById('finalScore');
const nextBtn = document.getElementById('nextBtn');
const newBtn = document.getElementById('newBtn');
const strictMode = document.getElementById('strictMode');

const bonusBlock = document.getElementById('bonus');
const bonusQuote = document.getElementById('bonusQuote');
const bonusForm = document.getElementById('bonusForm');
const submitBonus = document.getElementById('submitBonus');
const bonusResult = document.getElementById('bonusResult');

let current = null;
let startTime = null;
let timer = null;
let correctChars = 0;
let roundScore = 0;
let totalScore = 0;
let highScore = Number(localStorage.getItem('highScore') || 0);
if (highScoreEl) highScoreEl.textContent = highScore;

function renderQuote(text) {
  quoteEl.innerHTML = text.split('').map(ch => `<span>${ch}</span>`).join('');
}

function newRound() {
  current = nextQuote();
  renderQuote(current.text);
  inputEl.value = '';
  correctChars = 0;
  roundScore = 0;
  startTime = null;
  clearInterval(timer);
  statsEl.textContent = `Time: 0s | WPM: 0 | Accuracy: 100% | Score: ${totalScore}`;
  inputEl.focus();
}

function computeStats() {
  const now = Date.now();
  const elapsed = Math.max(1, (now - (startTime || now)) / 1000);
  const typed = inputEl.value.length;
  const wpm = Math.round((typed / 5) / (elapsed / 60));
  const acc = typed > 0 ? Math.round((correctChars / typed) * 100) : 100;
  return { elapsed, wpm, acc };
}

function updateStats() {
  const { elapsed, wpm, acc } = computeStats();
  statsEl.textContent = `Time: ${Math.floor(elapsed)}s | WPM: ${wpm} | Accuracy: ${acc}% | Score: ${totalScore}`;
}

function finishRound() {
  clearInterval(timer);
  const { elapsed, wpm, acc } = computeStats();
  finalWPM.textContent = `${wpm} WPM`;
  finalAcc.textContent = `Accuracy: ${acc}%`;
  finalTime.textContent = `Time: ${Math.floor(elapsed)}s`;

  const avg = 40;
  const diffPct = Math.round(((wpm - avg) / avg) * 100);
  finalVsAvg.textContent = diffPct >= 0 ? `${diffPct}% faster than the average person` : `${Math.abs(diffPct)}% slower than the average person`;

  // Base score. Accuracy matters more than ego
  roundScore = Math.max(0, Math.round
