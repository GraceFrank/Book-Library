const Student = require('../students');
const queue = require('../../../data/queue');

class SeniorStudent extends Student {
    constructor(userName) {
        super(userName);
        this.position = 'seniorStudent';
        this.priority = 2;
    }

}


module.exports = SeniorStudent;
