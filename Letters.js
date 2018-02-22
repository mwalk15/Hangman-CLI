function playGame(letter, guessedCorrectly){
	this.letter = letter;
	this.guessedCorrectly = guessedCorrectly;
	this.display = function(){
		if(this.guessedCorrectly){
			return this.letter
		}else{
			return '_'
		}
	}
}

module.exports = playGame;