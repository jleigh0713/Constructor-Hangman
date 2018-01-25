var inquirer = require('inquirer');
var Word = require('./word.js');
var Letter = require('./letter.js');



console.log("Welcome to Constructor Hangman!");
console.log("Guess a letter");

Game = 
{

	wordBank:['horticulture', 'garden', 'vegetables', 'flowers', 'lavender', 'hiking', 'camping', 'farming' ],
	guessesWon: 0,
	guessesLeft: 10,
	randomWord: null,
	show: 0,
	

	startGame: function()
	{
		this.resetGuesses();
		this.randomWord = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
		this.randomWord.getLtr();
		this.promptUser();
	},

	resetGuesses: function()
	{
 		this.guessesLeft = 10;
 	},

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
    	{
        	var found = randomWord.confrimLtr(chosenLtr);

            if(found === 0)
            {
            	console.log('Incorrect');
				guessesLeft --;
                //counter goes up
                show ++;
            } 
            else 
            {
 				console.log("CORRECT");

 				if(randomWord.showltrs())
 				{
 					console.log("You won!");
 					console.log("-------------------");
 					return;
 				}
 			}


 			console.log("Guesses remaining: " + guessesLeft);
 			console.log("-------------------");
 			if((guessesLeft > 0) && (randomWord.wordGuessed == false))
    		{
 				promptUser();
 			}
 			else if(guessesLeft ==0)
 			{
 				console.log("Game over. Correct Word ", randomWord.word);
 			} 
 			else 
 			{
 				console.log(randomWord.showWord());
 			}

		});

 	}

}

Game.startGame();






