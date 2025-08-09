# Shakespeare Typing Game

A lightweight typing game to improve speed and accuracy, using Shakespeare quotes. Press Enter to end a round. After finishing, answer a bonus multiple-choice question: which play is the quote from? Earn bonus points for correct answers.

## Features
- Real-time WPM and accuracy
- End round with Enter
- Highlighted end-of-round overlay with score
- “% faster than average” vs 40 WPM baseline
- Bonus question with 4 options and points
- Strict mode to prevent typing past mistakes
- High score saved in your browser

## Run locally
Open `index.html` in any modern browser.

## Deploy on GitHub Pages
1. Create a new GitHub repo, e.g. `typing-game-shakespeare`.
2. Upload these files: `index.html`, `style.css`, `app.js`, `quotes.js`.
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Select branch `main` and folder `/root`.
6. Click **Save**. Within a minute or two, your site will be published at `https://<your-username>.github.io/typing-game-shakespeare/`.

## Adding more quotes
Quotes and their plays live in `quotes.js` as an array of objects:

```js
const QUOTES = [
  { text: "To be or not to be, that is the question.", play: "Hamlet" },
  // ...
];
```

Add more entries following the same shape. The bonus question appears only if a `play` value exists for the shown quote.

