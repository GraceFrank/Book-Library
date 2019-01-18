const Person = require('../person');
const queue = require('../../data/queue');

class Teacher extends Person{
    constructor(userName) {
        super(userName);
        this.position = 'teacher';
        this.priority = 1;
        
    }

}


module.exports = Teacher;