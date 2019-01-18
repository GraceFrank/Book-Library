const book = require('../data/books');
const queue = require('../data/queue');
const libraryUsers = require('../data/libraryUsers');

// the liberian handles all requests borrow and retunrn books
class Liberian {
    constructor(name) {
        this.name = name;
    }
//borrows book to a user if a book is avilable
    borrow(userName, bookTitle) {
        if (book[bookTitle]) {
            if ((libraryUsers[userName]['card'].has(bookTitle) == false) && (book[bookTitle].copies >= 1)) {
                book[bookTitle].copies--;
                libraryUsers[userName].card.add(bookTitle);
            } else {
                return 'book taken';
            } //end of if Statement 
        } else {
            return 'book does not exist';
        }
    }
//returns book book borrowed
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

    }//end ofreturn book function


//sortss the requst queue in order of priority  
        processesbookRequest() {
            queue.sort(function (a, b) {
                return a[0].priority - b[0].priority;
            });

            for (let i = 0; i < queue.length; i++) {
                this.borrow(queue[i][0].userName, queue[i][1]);
            }
        }
}






module.exports = Liberian;