const book = require('../data/books');
const libraryUsers = require('../data/libraryUsers');


class Liberian{
    constructor(name) {
        this.name = name;
    }
    borrow(userName, bookTitle) {
        if ( libraryUsers[userName]['card'].has(bookTitle) && book[bookTitle].copies >= 1) {
            book[bookTitle].copies -= 1;
            libraryUsers[userName].card.add(bookTitle);
        } else {
            return 'booktaken';
        } //end of if Statement 
    }
}




module.exports = Liberian;

