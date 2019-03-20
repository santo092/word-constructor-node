var Word = require("./word.js");
var inquirer = require("inquirer")


let wordArray = ["car", "house", "room", "television", "water"]
let randomWord;
let finalWord;
var leftToGuess;
var lives = 6;

function newGame() {
    randomWord = "";
    var r = parseInt(Math.floor(Math.random() * (wordArray.length)));
    randomWord = wordArray[r];
    finalWord = new Word(randomWord);
    leftToGuess = finalWord.newLetter.length;
}

function gameOver() {
    console.log("Game Over");
    inquirer.prompt([{
        type: "confirm",
        name: "playAgain",
        message: "Would you like to play again?"
    }]).then(function (response) {
        if (response.playAgain) {
            newGame();
            print();
            askToGuess();
        }
        else {
            console.log("Ok, see you around!")
        }
    })
}

function disWord() {
    displayWord = finalWord.wordString();
    console.log(displayWord);
    finalWord.compare = displayWord;
}

function askToGuess() {
    inquirer.prompt([
        {
            name: "ask",
            message: "Guess a letter",

        }
    ]).then(function (response) {
        let input = response.ask
        if (lives > 0) {
            if (input.length === 1) {
                finalWord.letterCheck(input)
                displayWord = finalWord.wordString()

                if (finalWord.compare === displayWord) {
                    console.log("Nope, there is no", input, "in the word")
                    lives--
                    console.log("You have", lives, "guess(es) remaining.")
                    if (lives === 0) {
                        gameOver()
                    } else {
                        print()
                        askToGuess()
                    }

                } else {
                    console.log("Good choce!")
                    leftToGuess--
                    print();
                    if (leftToGuess === 0) {

                        console.log("Great Job! Here's the next word:");
                        newGame()
                        print();
                        askToGuess();
                    } else {
                        askToGuess()
                    }
                }

            } else if (input.length === 0) {
                console.log("Please choose a letter.");
                askToGuess()
            } else {
                console.log("Pick one letter a a time please.")
                askToGuess()
            }


        } else {
            gameOver()
        }
    })
}


function print() {
    console.log("\n")
    console.log("******************************************")
    disWord()
    console.log("\n*****************************************")
    console.log("\n")
}
newGame()
print()
askToGuess();
