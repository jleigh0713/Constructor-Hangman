
var Word = require('./word.js');

var Letter = function(ltr)
{

  this.letter = ltr;

  this.appear = false;

  this.showLetter = function() {
    if(this.letter == ' '){ 
      this.appear = true;
      return '  ';
    }if(this.appear === false){ 
      return ' _ ';
    } else{ 
      return this.letter;
    }

  };
}

module.exports = Letter;