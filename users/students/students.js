const Person = require('../person');
const queue = require('../../data/queue');

class Student extends Person {
    constructor(userName) {
        super(userName);
        this.position = 'student';

    }

}


module.exports = Student;