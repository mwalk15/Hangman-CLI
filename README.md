# Hangman-CLI
Command Line Hangman Game
 Create Letter.js Constructor
 Create word.js file that calls the the letter constructor.
 Create index.js file that then requires the word.js file. Require inquirer to write prompting for the game.
 Create a .gitignore file that will withhold some node changes being uploaded to github repositiory.
 Go to git bash command center and navigate into Hangman folder and do an npm init.
 NPM INSTALL --SAVE INQUIRER

word.js file contains functions that first take the hangman word, aand split the letters so that the user can guess letter by letter. Created a function that takes the user's guess and pushes it to an array to keep track of letters guessed. In this function, if the user guesses the right letter, and there is an underscore(or placeholder) where the letter should be, the letter guessed will replace the placeholder. If the user guesses wrong, the placeholder will remain, and the letter wll post so that user can see that the letter hads already been used.

index.js file requires the functions and constructors in the word.js file and incorporates them into the index.js file. Created a sample word that will act as the sole word to guess in the game. (Go back to create an array in the future.) Created function so that if the user guesses all words, console log "you win!"" if all letters have not been guessed, console log "keep going" after each letter guessed. Created prompt that tells user to guess a letter, and then checks to se if guess is right so that placeholder can be changed to actual letter.