let Letter = require("./letter.js")

const Word = function () {
    this.newLetter = [];
    this.wordString = function () {
        let lastWordString = "";
        for (let i = 0; i < this.newLetter.length; i++) {
            lastWordString += this.newLetter[i].display() + " ";
        }
        return lastWordString;
    }
    this.letterCheck = function (userInput) {
        for (let i = 0; i < this.newLetter.length; i++) {
            this.newLetter[i].letterCheck(userInput)
        }
    }

}
module.exports = Word;

