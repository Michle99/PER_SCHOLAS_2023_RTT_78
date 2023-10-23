// Define an array of words or phrases for the game
const words = ["javascript", "programming", "hangman", "challenge", "surprise", "openai", "gpt3"];
let currentWord = "";
let hiddenWord = [];
let attempts = 6; // Number of allowed incorrect attempts
let gameOver = false;

// Function to select a random word from the array
function selectRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Initialize the game
function initializeGame() {
  currentWord = selectRandomWord().toLowerCase();
  hiddenWord = currentWord.split("").map(() => "_");
  attempts = 6;
  gameOver = false;
  updateDisplay();
}

// Function to update the game display
function updateDisplay() {
  const wordDisplay = hiddenWord.join(" ");
  const attemptMessage = `Remaining attempts: ${attempts}`;
  const message = gameOver ? (hiddenWord.indexOf("_") === -1 ? "You won! Congratulations!" : "You lost. Try again!") : `Guess the word: ${wordDisplay}`;

  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>Word Guessing Game</h1>
    <p>${message}</p>
    <p>${attemptMessage}</p>
    <input type="text" id="guess" placeholder="Enter a letter" />
    <button id="submit">Submit Guess</button>
    <button id="play-again" style="display: ${gameOver ? "block" : "none"}">Play Again</button>
  `;

  // Event listeners
  document.getElementById("submit").addEventListener("click", handleGuess);
  document.getElementById("play-again").addEventListener("click", initializeGame);
}

// Function to handle user input
function handleGuess() {
  if (gameOver) return;

  const guess = document.getElementById("guess").value.toLowerCase();

  if (guess.length === 1 && guess.match(/[a-z]/)) {
    const correctGuesses = [];

    // Check if the guessed letter is in the word
    for (let i = 0; i < currentWord.length; i++) {
      if (currentWord[i] === guess && hiddenWord[i] === "_") {
        hiddenWord[i] = guess;
        correctGuesses.push(i);
      }
    }

    if (correctGuesses.length === 0) {
      attempts--;
    }

    if (hiddenWord.indexOf("_") === -1 || attempts === 0) {
      // If there are no underscores left in hiddenWord or no remaining attempts, the game is over
      gameOver = true;
    }

    updateDisplay();
  }
  document.getElementById("guess").value = "";
}

// Initialize the game and display
initializeGame();
