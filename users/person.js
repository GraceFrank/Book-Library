const queue = require('../data/queue');
const returnQueue = require('../data/returnQueue');
//person is a superclass which all users _teacher, students inherits from
class Person {
    constructor(userName) {
        this.userName = userName;
        this.card = new Set(); //every person has a card which would store the books borrowed by the user
    }

    //when a person request a book, he is added to the book request queue
    request(bookTitle) {
        queue.push([this, bookTitle]);

    }

    returnBook(bookTitle) {
        returnQueue.push([this, bookTitle]);

    }
}



module.exports = Person;