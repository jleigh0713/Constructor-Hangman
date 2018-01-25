var Letter = require('./letter.js')

function Word(wrd)
{
	this.word = wrd;
	this.ltrs = [];
	this.wordGuessed = false;

	
	this.getLtr = function() 
	{
    	for(var i = 0; i<that.word.length; i++)
    	{
	      var newLtr = new Letter(that.word[i]);
	      this.ltrs.push(newLetter);
	};


  	this.wordFound = function() 
  	{
    	if(this.ltrs.every(function(ltr)
    	{
      		return ltr.appear === true;
    	}
    	))
    	{
      		this.wordGuessed = true;
      		return true;
    	}
    };


	this.confirmLtr= function(chosenltr)
	{
		var whattoreturn = 0;

		this.ltrs.forEach(chosenltr)
		{
			if (this.ltrs[i].charac == chosenltr)
			{
				this.ltrs[i].appear = true;
				whattoreturn++;
			}
		}
		return whattoreturn;
	};


	this.showWord= function() 
    {
    	var show = '';

    	that.ltrs.forEach(function(chosenltr)
    	{
      		var currentLetter = chosenltr.letterRender();
      		show += currentLetter;
    	});
    	return show;
	};
}

module.exports = Word;