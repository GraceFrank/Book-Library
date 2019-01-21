const book = require('../data/books');
const queue = require('../data/queue');
const libraryUsers = require('../data/libraryUsers');
const returnQueue = require('../data/returnQueue');

// the liberian handles all requests borrow and retunrn books
class Liberian {
    constructor(name) {
        this.name = name;
    }
    //borrows book to a user if a book is avilable
    borrow(userName, bookTitle) {
        if (book[bookTitle]) { //check if the book exist in the lirary
            if ((libraryUsers[userName]['card'].has(bookTitle) == false) && (book[bookTitle].copies >= 1)) {
                //checks if the book is in the users card                   checks that the book copies is not finished
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
            if (libraryUsers[userName]['card'].has(bookTitle)) { // checks if user has a book in its card
                book[bookTitle].copies += 1; //increses the book copies by 1
                libraryUsers[userName].card.delete(bookTitle); //remove book from users  card
            } else {
                return 'book not borrowed';
            }
        } else {
            return 'book does not exist';
        }

    } //end ofreturn book function


    //sorts the requst queue in order of priority  
    processesbookRequest() {
        queue.sort(function (a, b) {
            return a[0].priority - b[0].priority;
        });

        //perform  borrow book for every usere in the queue
        for (let i = 0; i < queue.length; i++) {
            this.borrow(queue[i][0].userName, queue[i][1]);
            /*the queue is an arrary of arrays
                                
                            */

        }
    }

    returnallBooks() {
        for (let i = 0; i < returnQueue.length; i++) {
            this.returnBook(returnQueue[i][0].userName, returnQueue[1]);
        }

    }

}




module.exports = Liberian;