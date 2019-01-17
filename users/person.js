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

const aondofa = new Person('aondofa');

aondofa.request('amazon');
console.log(queue);
console.log(queue.includes([aondofa, 'amazon']));



module.exports = Person;