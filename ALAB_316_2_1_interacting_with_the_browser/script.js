// Define an array of words or phrases for the game
const words = ["javascript", "programming", "hangman", "challenge", "surprise", "openai", "gpt-3"];
let currentWord = "";
let hiddenWord = [];
let attempts = 6; // Number of allowed incorrect attempts
let gameWon = false;

// Function to select a random word from the array
function selectRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Initialize the game
function initializeGame() {
  currentWord = selectRandomWord().toLowerCase();
  hiddenWord = currentWord.split("").map(() => "_");
  attempts = 6;
  gameWon = false;
  updateDisplay();
}

// Function to update the game display
function updateDisplay() {
  const wordDisplay = hiddenWord.join(" ");
  const message = gameWon ? "You won! Congratulations!" : `Guess the word: ${wordDisplay}`;
  const attemptMessage = `Remaining attempts: ${attempts}`;

  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>Word Guessing Game</h1>
    <p>${message}</p>
    <p>${attemptMessage}</p>
    <input type="text" id="guess" placeholder="Enter a letter" />
    <button id="submit">Submit Guess</button>
    <button id="play-again" style="${gameWon ? "display: block;" : "display: none;"}">Play Again</button>
  `;

  if (gameWon) {
    document.getElementById("guess").style.display = "none";
    document.getElementById("play-again").style.display = "block";
  }

  // Event listener for button click
  document.getElementById("submit").addEventListener("click", handleGuess);
  document.getElementById("play-again").addEventListener("click", initializeGame);
}

// Function to handle user input
function handleGuess() {
  if (gameWon) return;

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

    if (attempts === 0) {
      gameWon = false; // User has lost
    }

    if (hiddenWord.indexOf("_") === -1) {
      gameWon = true; // User has won
    }
    
    updateDisplay();
  }
  document.getElementById("guess").value = "";
}

// Initialize the game and display
initializeGame();
