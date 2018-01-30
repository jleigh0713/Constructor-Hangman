const Letter = require("./letter.js")


function Word (word){
    this.word = word;
    this.wordArray = this.word.split('');
    this.wordLength = this.word.length;
    this.wordStateGen = function () {
        let arr = this.wordArray;
        let letterArr = arr.map(function (val) {
            return new Letter(val)
        });
        return letterArr;
    },
    this.wordStateByLetter = this.wordStateGen();
    
}
module.exports = Word;