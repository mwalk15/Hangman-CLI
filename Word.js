
var HangmanLetter =require("./letters.js");

//created the word constructor
var Word = function(word){
	this.word = word;
	this.wordArray = this.word.split("");
	this.displayWord = [];
	this.guessLetters =[];

	//makes displayWord array entirely underscores
	this.holderArray = function(){
		for(var i =0; i<this.wordArray.length;i++){
			this.displayWord.push("_");
		}
	}

	//created a function that checks if the user guessed the right letter
	this.newLetter = function(userLetter) {
		
		//every letter the user guesses push the letter
		this.guessLetters.push(userLetter);

		//instance of the HangmanLetter
		//checks to see if the user's guess is right
		var letter; 

		for(var i = 0; i<this.wordArray.length; i++){

			//console.log(this.displayWord);

			//if a letter already exsist then just display the word
			if(this.displayWord[i] !="_"){
				console.log(this.displayWord);
			}

			//if the user guesses the right letter and there is a blank underscore 
			//then replace the letter at the index
			else if(this.wordArray[i] === userLetter && this.displayWord[i] === "_"){
			 letter = new HangmanLetter(userLetter, true);
			 this.displayWord[i]= letter.display();
			}

			//if user guesses the wrong letter then just display an underscore
			else{
				letter = new HangmanLetter(userLetter,false);
				this.displayWord[i]= letter.display();

				//this.displayWord.push(letter.display());
			}

		}  
		return this.displayWord;
  };
	
}



module.exports = Word;