//require the letter.js file
var Letter = require('./letter.js')

//creating constructor for word
function Word(wrd)
{
	this.word = wrd;
	this.ltrs = [];
	this.wordGuessed = false;

//function for getting the letter and pushing into ltrs array to hold
	this.getLtr = function() 
	{
    	for(var i = 0; i<this.word.length; i++)
    	{
	      var newLtr = new Letter(this.word[i]);
	      this.ltrs.push(new Letter);
	};

//function if we found the current chosen word
  	this.wordFound = function() 
  	{
    	if(this.ltrs.every(function(ltr)
    	{   //
      		return ltr.appear === true;
    	}))
    	{   //sets wordGuessed to true
      		this.wordGuessed = true;
      		return true;
    	}
    };

    // goes through each letter of the word to see if any matches the chosen letter
	this.confirmLtr= function(chosenltr)
	{
		var returnsomething = 0;

		this.ltrs.forEach(chosenltr)
		{
			if (this.ltrs[i].charac == chosenltr)
			{
				this.ltrs[i].appear = true;
				returnsomething++;
			}
		}
		//if the chosen letter matches then the Letter object will display
		return returnsomething;
	};

    //displays the word if any of the chosen letters are found
	this.showWord= function() 
    {
    	var show = '';

    	that.ltrs.forEach(function(chosenltr)
    	{
    		//if the current letter of the wrord equal the chosen/guessed letter then show it
      		var currentLetter = chosenltr.letterRender();
      		show += currentLetter;
    	});
    	return show;
	};
	}
}

//setting up so this file can be used in another file
module.exports = Word;