const Student = require('../students');
const queue = require('../../../data/queue');

class JuniorStudent extends Student {
    constructor(userName) {
        super(userName);
        this.position = 'juniorStudent';
        this.priority = 3;
    }

}


module.exports = JuniorStudent;
