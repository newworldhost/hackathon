/* jshint esversion: 6 */
// Declare the words array with 10 default words and load from local storage if available
let defaultWords = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon'];
let words = JSON.parse(localStorage.getItem('words')) || defaultWords;
let currentWord;
let scrambledWord;
let timer;
let timeLimit = 60;
let score = 0;
let isPlaying = false;

/**
 * This function is for the timer 
 */
function startTimer() {
    let timeRemaining = timeLimit;
    timer = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            document.getElementById('timer').textContent = `Time Remaining ${timeRemaining}s`;
        } else {
            clearInterval(timer);
            checkWords();
        }
    }, 1000); // Set the timer interval to 1 second
}

/**
* This function shuffles the words up
*/
function shuffle(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
}

/**
* This function loads the word game
*/
function loadGame() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    scrambledWord = shuffle(currentWord);
    console.log(scrambledWord)
    document.getElementById('scrambled-word').textContent = scrambledWord;
}

/**
* Function to add a new word
*/
function addWord() {
    const newWord = document.getElementById('new-word-input').value.trim();
    const isValidWord = /^[a-zA-Z]+$/.test(newWord) && !/(.).*?\1{2}/.test(newWord) && !/(.).*?\1{3}/.test(newWord); // Check if the word contains only letters and no more than three repeated characters
    if (newWord && isValidWord) {
        if (!words.includes(newWord)) {
            words.push(newWord);
            localStorage.setItem('words', JSON.stringify(words)); // Save updated words array to local storage
            document.getElementById('new-word-input').value = '';
            document.getElementById('add-word-result').textContent = 'Word Added';
            setTimeout(() => {
                document.getElementById('add-word-result').textContent = '';
            }, 2000); // Clear the message after 2 seconds
        } else {
            document.getElementById('add-word-result').textContent = 'Word already exists';
        }
    } else {
        document.getElementById('add-word-result').textContent = 'Please enter a valid word containing only letters';
    }
    console.log(words);
}

// Add event listener for pressing enter to submit a new word
document.getElementById('new-word-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addWord();
    }
});

// Function to view words
function viewWords() {
    const wordsList = document.getElementById('words-list');
    wordsList.innerHTML = ''; // Clear the list before displaying
    words.forEach(word => {
        const wordItem = document.createElement('p');
        wordItem.textContent = word;
        wordsList.appendChild(wordItem);
    });
}

// Load the first scrambled word when the page loads
window.onload = loadGame;

// This is so the user can press enter to submit a guess
document.getElementById('guess-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

/**
* This function checks if the guess is the correct word
*/
function checkGuess() {
    const guess = document.getElementById('guess-input').value;
    if (guess === currentWord) {
        document.getElementById('result').textContent = 'Correct';
        setTimeout(() => {
            document.getElementById('result').textContent = '';
        }, 2000); // Clear the message after 2 seconds
        loadGame(); // Load a new word when the guess is correct
    } else {
        document.getElementById('result').textContent = 'Try Again';
        setTimeout(() => {
