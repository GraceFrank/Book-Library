const queue = require('../data/queue')

class Person{
    constructor(userName) {
        this.userName = userName;
        this.card = new Set();
    }

    request(bookTitle) {
        queue.push([this, bookTitle]);
        
    }

    returnBook(bookTitle) {
        this['card'].delete(bookTitle);
        
    }
}



module.exports = Person;