var letter = require('./letter.js')

module.exports = class Word
{
	constructor(word,ltrs,guessedWord)
	{
		this.word
		this.ltrs = [];
		this.guessedWord = false;
	}
	
	getLetter() 
	{
		for (var i=0; i<this.word.length; i++)
		{
			this.ltrs.push ( new letter(this.word[i]));
		}
	};

	showltrs()
	{
		this.guessedWord = this.ltrs.every(function(guessedLtr)
		{
			return guessedLtr.appear;
		});
		return this.guessedWord;
	};

	confirmLtr(chosenltr)
	{
		var getback = 0;

		for (var i = 0; i < this.ltrs.length; i++) 
		{
			if (this.ltrs[i].charac == chosenltr)
			{
				this.ltrs[i].appear = true;
				getback++;
			}
		}
		return getback;
	};

	showWord() 
	{
		var string = '';
		for (var i=0; i < this.ltrs.length; i++){
			string += this.ltrs[i].letterRender();
		}
		return string;
	};

}





