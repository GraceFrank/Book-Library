const Student = require('../students');

class SeniorStudent extends Student {
    constructor(userName) {
        super(userName);
        this.position = 'seniorStudent';
        this.priority = 2;
    }

}


module.exports = SeniorStudent;