const queue = require('../data/queue')
//person is a superclass which all users _teacher, students inherits from
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
