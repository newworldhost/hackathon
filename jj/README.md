# Word Scramble

## Introduction

Welcome to Word Scramble! This project is a fun and interactive word game where players attempt to unscramble a series of jumbled words. Additionally, users can add their own words to the game, enhancing the gameplay experience.

## Features

- **Scramble and Unscramble Words**: Players are given a scrambled word and must guess the correct word.
- **Add New Words**: Users can contribute new words to the game.
- **Responsive Design**: The game is styled using Bootstrap and custom CSS for an attractive and user-friendly interface.
- **Local Storage**: Words are stored locally, so users can continue to see their added words even after refreshing the page.

## Files

1. **index.html**: The main HTML file containing the structure of the game.
2. **style.css**: The stylesheet for custom styling of the game.
3. **script.js**: The JavaScript file containing the game logic.
## wireframe 
![wireframe](https://i.postimg.cc/sXNL8RHg/wireframe3.png)
## Getting Started

To get started with the Word Scramble game, follow these steps:

1. **Clone the Repository**:
   ```sh
   git clone [repository-url]
Open index.htmlin a Browser: Open the index.html file in your preferred web browser to start playing the game.

How to Play
Start the Game: When you open the game, a scrambled word will be displayed.

Guess the Word: Type your guess into the input box and click the "Submit" button.

Check Your Guess: The game will tell you if your guess is correct or incorrect.

Add a New Word: Enter a new word in the input box and click the "Add Word" button to add it to the game's word list.

Technologies Used
HTML: For the structure of the game.

CSS: For styling and layout.

JavaScript: For game logic and interactivity.

Bootstrap: For responsive design.

Font Awesome: For social media icons.

License
© Word Scramble. All rights reserved.

## user stories
User Story: As a player, I want to see a scrambled word when I start the game, so that I can challenge myself to unscramble it.

Acceptance Criteria:

When the game starts, a scrambled word is displayed on the screen.

The scrambled word is generated from a predefined list of words.

Tasks:

[/] Create an array of predefined words.

[/] Implement a function to shuffle the letters of a word.

[/] Implement a function to select a random word from the array and display it in scrambled form on the screen.

[/] Ensure the scrambled word is displayed when the game loads.

User Story: As a player, I want to be able to submit my guess and receive immediate feedback, so that I know if my guess is correct or not.

Acceptance Criteria:

The game shows a message indicating whether the guess is correct or incorrect after submission.

The message is displayed immediately after submitting the guess.

Tasks:

[/] Implement a function to check the player's guess against the current word.

[/] Display a message indicating if the guess is correct or incorrect.

[/] Clear the input field after the guess is submitted.

[/] Ensure the game provides immediate feedback upon guess submission.

User Story: As a player, I want to add new words to the game, so that I can expand the game's word list and play with more variety.

Acceptance Criteria:

The player can enter a new word and add it to the word list.

The game notifies the player if the word was added successfully or if it already exists.

The game only accepts valid words containing letters.

Tasks:

[/] Implement an input field and button for adding new words.

[/] Implement a function to validate the new word.

[/] Add the new word to the word list if it is valid and does not already exist.

[/] Display a message indicating the result of the addition.

[/] Save the updated word list to local storage.

User Story: As a player, I want the game to remember the words I add, so that I can see them in future sessions even if I close and reopen the game.

Acceptance Criteria:

The words added by the player are saved to local storage.

The game loads the saved words from local storage when it starts.

Tasks:

[/] Implement a function to save the word list to local storage.

[/] Implement a function to load the word list from local storage when the game starts.

[/] Ensure the game uses the saved word list if available.

[/] Test that the added words persist across sessions.


## Acknowledgments
Thanks to the creators of Bootstrap, Font Awesome, and any other libraries or tools used in this project.