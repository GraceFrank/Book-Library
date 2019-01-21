const Student = require('../students');

//junior student inherits from student class
class JuniorStudent extends Student {
    constructor(userName) {
        super(userName);
        this.position = 'juniorStudent';
        this.priority = 3;
    }

}


module.exports = JuniorStudent;