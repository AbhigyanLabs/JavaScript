# Project related to DOM

## Project Link
[Click here to open practise Projects](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## 1. Project Color Changer

```javascript

const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')

buttons.forEach(function (button){
  button.addEventListener('click', function(e){
    
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    } 

    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }

    if(e.target.id == 'blue'){
      body.style.backgroundColor = e.target.id;
    }

    if(e.target.id == 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## 2. Project BMI Calculator

```Javascript
// Select the form element
const form = document.querySelector('form');

// Add submit event listener
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload on submit

  // Get height and weight values
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // Validate height input
  if (isNaN(height) || height <= 0) {
    results.innerHTML = `⚠️ Please enter a valid height (${height})`;
  }
  // Validate weight input
  else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `⚠️ Please enter a valid weight (${weight})`;
  }
  // If both inputs are valid, calculate BMI
  else {
    // ✅ Correct BMI formula: weight (kg) / [height (m)]²
    const bmi = (weight / (height / 100) ** 2).toFixed(2);

    // Show result with interpretation
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi} – Underweight</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>${bmi} – Normal Weight</span>`;
    } else {
      results.innerHTML = `<span>${bmi} – Overweight</span>`;
    }
  }
});

```

## 3. Project Clock

```Javascript 
// Get a reference to the element in the DOM with id="clock"
const clock = document.getElementById('clock');

// Schedule a function to run repeatedly every 1000 milliseconds (1 second)
setInterval(function () {
  // Create a new Date object representing the current date and time
  let date = new Date();

  // Convert the time to a locale-aware string (e.g., "12:31:05 PM")
  // and place it inside the #clock element
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## 4. Guess Game

``` Javascript

// 🎯 Generate a random number between 1 and 100
let randomNum = parseInt(Math.random() * 100) + 1;

// 🧩 Select DOM elements
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

// Paragraph element for the "Start New Game" button
const p = document.createElement('p');

// 🔢 Game variables
let prevGuess = [];
let numGuess = 1;
let playGame = true;

// ▶️ Start game if playGame is true
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent page reload
    const guess = parseInt(userInput.value.trim()); // Read and clean user input
    validateGuess(guess);
  });
}

/**
 * ✅ Validate user input
 * Ensures guess is a number between 1 and 100.
 */
function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('⚠️ Please enter a valid number between 1 and 100.');
  } else {
    prevGuess.push(guess); // Store valid guess

    if (numGuess === 11) {
      // Limit: 10 attempts
      displayGuess(guess);
      displayMessage(`💀 Game Over! The correct number was ${randomNum}.`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

/**
 * 🔍 Compare user's guess with the random number
 * Gives feedback: too high, too low, or correct.
 */
function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage('🎉 You guessed it right!');
    endGame();
  } else if (guess < randomNum) {
    displayMessage('⬇️ Number is too low!');
  } else {
    displayMessage('⬆️ Number is too high!');
  }
}

/**
 * 🧾 Display guesses and remaining attempts
 */
function displayGuess(guess) {
  userInput.value = ''; // Clear input field
  guessSlot.innerHTML += `${guess}  `; // Show all guesses
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`; // Update remaining attempts
}

/**
 * 💬 Display status or feedback message
 */
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

/**
 * 🛑 End the game when won or lost
 */
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', ''); // Disable further input
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">🔁 Start New Game</h2>`;

  // Prevent multiple restart buttons
  if (!document.querySelector('#newGame')) {
    startOver.appendChild(p);
  }

  playGame = false;
  newGame();
}

/**
 * 🔁 Restart the game
 * Resets variables, clears guesses, and enables input.
 */
function newGame() {
  const newGameButton = document.querySelector('#newGame');

  newGameButton.addEventListener('click', function () {
    // Regenerate random number
    randomNum = parseInt(Math.random() * 100) + 1;

    // Reset state variables
    prevGuess = [];
    numGuess = 1;

    // Clear UI elements
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    lowOrHi.innerHTML = '';

    // Re-enable input and remove reset button
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```