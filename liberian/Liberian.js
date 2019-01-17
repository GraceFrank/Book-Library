const book = require('../data/books');
const queue = require('../data/queue');
const libraryUsers = require('../data/libraryUsers');


class Liberian {
    constructor(name) {
        this.name = name;
    }

    borrow(userName, bookTitle) {
        if (book[bookTitle]) {
            if (libraryUsers[userName]['card'].has(bookTitle) == false && book[bookTitle].copies >= 1) {
                book[bookTitle].copies -= 1;
                libraryUsers[userName].card.add(bookTitle);
            } else {
                return 'book taken';
            } //end of if Statement 
        } else {
            return 'book does not exist';
        }
    }

    returnBook(userName, bookTitle) {
        if (book[bookTitle]) {
            if (libraryUsers[userName]['card'].has(bookTitle)) {
                book[bookTitle].copies += 1;
                libraryUsers[userName].card.delete(bookTitle);
            } else {
                return 'book not borrowed';
            }
        } else {
            return 'book does not exist';
        }

    }//return book function

 
}





module.exports = Liberian;