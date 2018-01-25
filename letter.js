
var word = require("./word.js")	;

module.exports = class Letter
{
	constructor(ltr)
	{
		this.ltr = ltr;
		
	}

	showBlanks()
	{
		this.index = ltr
		this.appear = false;
		this.letterRender = function()
		{
		return !(this.appear) ? "_": this.idex;
		}
	}
}


