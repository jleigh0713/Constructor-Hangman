//require inquirer
var inquirer = require('inquirer');
//require the word file
var Word = require('./word.js');
//require the letter file
var Letter = require('./letter.js');


//providing greeting
console.log("Let's play Constructor Hangman!");

//setting up game object
var game = 
{

	wordBank:['horticulture', 'garden', 'vegetables', 'flowers', 'lavender', 'hiking', 'camping', 'farming' ],
	guessesWon: 0,
	guessesLeft: 10,
	randomWord: null,
	show: 0,
	
//setting up the start of the game and getting a word out of the word bank at random
	startGame: function()
	{
		this.resetGuesses();
		this.randomWord = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
		this.randomWord.getLtr();
		this.promptUser();
	},
//resetting guesses when game starts over
	resetGuesses: function()
	{
 		this.guessesLeft = 10;
 	},
//prompt user to choose a letter and checks their inout to make sure its valid
	promptUser: function()
	{
    	inquirer.prompt([
    	{
            name: 'pckdLtr',
            type: 'input',
            message: 'Choose a letter',
            validate: function(value) 
            {
                if (!isNaN(value)) 
                {
                    return true
                } 
                else 
                {
                    return false
                }
            }
        }
    	]).then(function(answer)
    	{//
        	var found = randomWord.confrimLtr(chosenLtr);
        	// if the chosen letter does not equal a letter in the word then its an incorrect guess
            if(found === 0)
            {
            	console.log('Incorrect');
				//guesses counter goes down
				guessesLeft --;
            } 
            else 
            {  //if the chosen letter does equal a letter in the word then the letter is displayed and it is logged as a correct guess
 				console.log("CORRECT");
 				// if the word equals all of the chosen letters then it is a win
 				if(randomWord.showltrs())
 				{
 					console.log("You won!");
 					return;
 				}
 			}

           // displays the guesses remaining
 			console.log("Guesses remaining: " + guessesLeft);
 			// if the guesses left and the word has not been guessed yet then this prompts the user again to choose a letter
 			if((guessesLeft > 0) && (randomWord.wordGuessed == false))
    		{
 				promptUser();
 			}//if guesses left is zero then the game is over
 			else if(guessesLeft == 0)
 			{
 				console.log("Game over. Correct Word ", randomWord.word);
 			} 
 			else 
 			{//other than that show the word
 				console.log(randomWord.showWord());
 			}

		});

 	}

}
//start the game
game.startGame();






