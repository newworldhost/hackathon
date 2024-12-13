/*jshint esversion: 6 */
let words = ['fun', 'going', 'javascript', 'variable', 'array'];
let currentWord;
let scrambledWord;
/**
* this function shuffles the words up
*/
function shuffle(word) {
	return word.split('').sort(() => Math.random() - 0.5).join('');
}
/**
* this function loads the word game
*/
function loadGame() {
	currentWord = words[Math.floor(Math.random() * words.length)];
	scrambledWord = shuffle(currentWord);
	document.getElementById('scrambled-word').textContent = scrambledWord;
}
/**
* this function is checking if the guess is the correct word
*/
function checkGuess() {
	const guess = document.getElementById('guess-input').value;
	if (guess === currentWord) {
		document.getElementById('result').textContent = 'Correct';
	} else {
		document.getElementById('result').textContent = 'Try Again';
	}
}
/**
* this function is for users to add a new word tothe array
*/

function addWord() {
	const newWord = document.getElementById('new-word-input').value;
	if (newWord.trim());
	words.push(newWord.trim())
	document.getElementById('new-word-input').value = '';
	document.getElementById('add-word-result').textContent = 'Word Added';
} else {
	document.getElementById('add-word-result').textContent = 'Please enter a valid word';
}
// Ensure the game loads when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', loadGame);
