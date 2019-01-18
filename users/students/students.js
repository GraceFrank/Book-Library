const Person = require('../person');
const queue = require('../../data/queue');

//student inherits from person and senior student and juniorstudents will inherit from student
class Student extends Person {
    constructor(userName) {
        super(userName);
        this.position = 'student';

    }

}


module.exports = Student;