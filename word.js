//requiring the letter file
const Letter = require("./letter.js")

//word constructor
function Word (word)
{
    this.word = word;
    //splitting the word into separate letters
    this.wordArray = this.word.split('');
    this.wordLength = this.word.length;
    //mapping or going over the wordArray and returnining a new isntance of Letter to be used and storing it in letterArr
    this.wordStateGen = function () 
    {
        let arr = this.wordArray;
        let letterArr = arr.map(function (val) 
        {
            return new Letter(val)
        });
        return letterArr;
    };
    //storing letterArr in wordStateByLetter in order to compare the returned letter to the word that is generated
    this.wordStateByLetter = this.wordStateGen();
    
}
//to make this file available to other file
module.exports = Word;