
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
		this.guessLetters.push(userLetter);

		//checks to see if the user's guess is right
		var letter; 

		for(var i = 0; i<this.wordArray.length; i++){

		
			if(this.displayWord[i] !="_"){
				console.log(this.displayWord);
			}
			else if(this.wordArray[i] === userLetter && this.displayWord[i] === "_"){
			 letter = new HangmanLetter(userLetter, true);
			 this.displayWord[i]= letter.display();
			}
			else{
				letter = new HangmanLetter(userLetter,false);
				this.displayWord[i]= letter.display();


			}

		}  
		return this.displayWord;
  };
	
}



module.exports = Word;