// Game logic for Shakespeare Typing Game
// Expects QUOTES = [{ text: '...', play: '...' }, ...]

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
highScoreEl.textContent = highScore;

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

  // Base score: prioritize accuracy, then speed (simple balanced formula)
  roundScore = Math.max(0, Math.round(acc * (wpm / 2)));
  totalScore += roundScore;

  finalScore.textContent = `Round score: ${roundScore} | Total: ${totalScore}`;

  // Bonus question if play known
  if (current.play) {
    buildBonus(current);
    bonusBlock.style.display = 'block';
  } else {
    bonusBlock.style.display = 'none';
  }

  overlay.style.display = 'flex';
}

function buildBonus(q) {
  bonusQuote.textContent = `“${q.text}”`;

  // Build multiple-choice options: correct + 3 random distinct plays
  const plays = Array.from(new Set(QUOTES.map(x => x.play).filter(Boolean)));
  const choices = new Set([q.play]);
  while (choices.size < 4 && plays.length) {
    const p = plays[Math.floor(Math.random() * plays.length)];
    choices.add(p);
  }
  const shuffled = [...choices].sort(() => Math.random() - 0.5);

  bonusForm.innerHTML = '';
  shuffled.forEach(p => {
    const id = `opt_${Math.random().toString(36).slice(2,8)}`;
    const wrap = document.createElement('label');
    wrap.innerHTML = `<input type="radio" name="bonus" value="${p}" id="${id}"> ${p}`;
    bonusForm.appendChild(wrap);
  });

  bonusResult.textContent = '';
}

submitBonus?.addEventListener('click', (e) => {
  e.preventDefault();
  const sel = bonusForm.querySelector('input[name="bonus"]:checked');
  if (!sel) {
    bonusResult.textContent = 'Pick one answer.';
    return;
  }
  const choice = sel.value;
  if (choice === current.play) {
    const bonus = 200; // flat bonus
    totalScore += bonus;
    bonusResult.textContent = `Correct. +${bonus} bonus points.`;
  } else {
    bonusResult.textContent = `Nope. Correct answer: ${current.play}.`;
  }
  scoreEl.textContent = totalScore;
  finalScore.textContent = `Round score: ${roundScore} | Total: ${totalScore}`;

  if (totalScore > highScore) {
    highScore = totalScore;
    localStorage.setItem('highScore', String(highScore));
    highScoreEl.textContent = highScore;
  }
});

// Typing input handling
inputEl.addEventListener('input', (e) => {
  const input = e.target.value;
  const spans = document.querySelectorAll('#quote span');

  if (!startTime) {
    startTime = Date.now();
    timer = setInterval(updateStats, 200);
  }

  correctChars = 0;
  spans.forEach((span, i) => {
    const ch = input[i];
    if (ch == null) {
      span.classList.remove('correct', 'incorrect');
    } else if (ch === span.textContent) {
      span.classList.add('correct');
      span.classList.remove('incorrect');
      correctChars++;
    } else {
      span.classList.add('incorrect');
      span.classList.remove('correct');
      if (strictMode.checked) {
        // prevent drifting by blocking extra wrong chars
        e.target.value = input.slice(0, i + 1);
      }
    }
  });

  // If user has matched the full text exactly, auto-finish
  if (input === current.text) {
    finishRound();
  }
});

// Enter to finish
inputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    finishRound();
  } else if (e.key === 'Escape') {
    e.preventDefault();
    overlay.style.display = 'none';
    newRound();
  }
});

nextBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  newRound();
});
newBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  newRound();
});

// Initialize
newRound();
