const Letter = function (character) {
    this.character = character;
    this.isGuessed = false;
    this.display = function () {
        if (this.isGuessed) {
            return (this.character)
        }
        else if (this.isGuessed = false) {
            return ("_")
        }
    }
    this.letterGuess = function () {
        if (userInput === this.character) {
            this.isGuessed = true
        }
    }
}

module.exports = Letter

