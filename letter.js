//letter constructor
function Letter(character) {
    this.character = character;
    this.visible = false;
    //how to display the letter or underscore, if visible is true show the character or just show the underscore
    this.displayState = function () {
        if(this.visible){
            return ` ${this.character} `;
        } else {
            return " _ ";
        }
    }
}

//to make this file available to other file
module.exports = Letter;