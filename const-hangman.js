//requiring inquirer package
const inquirer = require('inquirer');
const Word = require('./word.js');
const wordList = ['horticulture', 'garden', 'vegetables', 'flowers', 'lavender', 'hiking', 'camping', 'farming' ];
// garden
// [ 'g', 'a', 'r', 'd', 'e', 'n' ]

//setting up game constructor
let game = {
    wordList: wordList,
    guessesRemaining: 10,
    curWordConstruct: '',
    //to show the "board" with either blanks or the correct chosen letters
    renderBoard: function () {
        let w = this.curWordConstruct.wordStateByLetter;
        //mapping over each letter and returning the value/letter as dictated by displaystate
        let r = w.map(function (val) {
            return val.displayState();
        });
        //brings the elements in the array together into a string
        return r.join('');

    },
    //how to get a word selected at random from the WordBank
    generateWord: function () {
        let leng = this.wordList.length;
        let randWord = this.wordList[Math.floor(Math.random() * leng)];
        // adds the generated word to the word constructor
        this.curWordConstruct = new Word(randWord)
    },
    //starting the game and running the generateWord function to get the first word and to show the board and to prompt the user to make their letter guesses
    startGame: function () {
        console.log(`\n------Let's Play Constructor Hangman!--------\n`);
        this.generateWord();
        console.log(this.renderBoard());
        this.makeGuess();
    },
    //check the guesses
    evaluateGuess: function (guess) {
        let t = this.curWordConstruct.wordStateByLetter;
        //maps over the letters in the word that is stored in the curWordConstruct from the random word generated and if one of the letters match the guess then make it visible
        let updatedWord = t.map((val, index) => {
            if (guess === val.character) {
                val.visible = true;
            }
            return val;
        });
        //updates the curWordConstruct to the updatedWord created from the mapping and seeing their was a match
        this.curWordConstruct.wordStateByLetter = updatedWord;
        //show the board
        console.log(this.renderBoard());
        //prompt the user again
        this.makeGuess();
    },
    //promptingthe suer to make a guess
    makeGuess: function () {
        inquirer
            .prompt([{
                type: "input",
                name: "choice",
                message: "Pick a Letter"
            }])
            //taking the letter and changing to upper case and also verifying that it is a letter and not a number
            .then(function (val) {
                var n = val.choice.toUpperCase();
                if (!isNaN(value)) 
                {
                    return true;
                } 
                else 
                {
                    return false;
                }
                console.log(n);
                game.evaluateGuess(n);
                // need to create function to check if guessed letter is correct

            });
    }
}
//start the game
game.startGame();


