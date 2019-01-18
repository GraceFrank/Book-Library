const Person = require("../person");

//teacher inherits from person
class Teacher extends Person {
  constructor(userName) {
    super(userName);
    this.position = "teacher";
    this.priority = 1;
  }
}

module.exports = Teacher;
