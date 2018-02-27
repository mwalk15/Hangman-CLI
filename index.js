
  var inquirer = require("inquirer");
var Word =require("./word.js");

//the word that user will try to guess
var gameWord = new Word("banana");

//create an array the contains _ for all the letters
gameWord.holderArray();


function checkWordGuess(wordForGame){
	//get the current display word that contains correct letter guesses
	//and underscores. Join the array together to create on string
	var userWordDisplayGuess = wordForGame.displayWord.join("");
	console.log(userWordDisplayGuess);
	
	//if the display word is equal to the word that the user needs to guess
	if(userWordDisplayGuess === wordForGame.word){
		//print you win
		console.log("You win!")
		return true
	}else{
		console.log("Keep going!")
		return false

	}	
}


//var endGame = checkWordGuess(gameWord);
var count = 0;



function question(){
inquirer.prompt([{
		type: "input",
		name: "modeSelect",
		message: "Guess a Letter! Guess the right word and you'll win a prize!!!",
	}]).then( function (response) {
			
			//ask the user to guess a letter
			console.log(response.modeSelect);

			//check to see if the user guessed right, if so replace the letter
			gameWord.newLetter(response.modeSelect);

			
		    console.log(gameWord.displayWord);
			
			//check to see if the word is guessed if not ask the question again
			var checking = checkWordGuess(gameWord);
			console.log(checking);
			if(checking === false){
				question()
			}

	})
}

question();