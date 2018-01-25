//require the word.js file
var Word = require('./word.js');

//create the Letter constructor
var Letter = function(ltr)
{
   //store letter
  this.letter = ltr;
  //setting boolean to false to start
  this.appear = false;

//define function to show letter
  this.showLetter = function() 
  {
    if(this.letter === ' ')
    { 
    //so that the blank is not considered false when checking if the current word is found
      this.appear = true;
      return '  ';
    }
    //an underscore will return instead
    if(this.appear === false)
    { 
      return ' _ ';
    } 
    else
    { 
    	//or it will show itself
      return this.letter;
    }

  };
}

//setting up the export of this file to be used in other file
module.exports = Letter;