const Person = require('../users/person');
const Teacher = require('../users/teachers/teacher');
const SeniorStudent = require('../users/students/juniorStudent/juniorStudent');
const JuniorStudent = require('../users/students/seniorStudent/seniorStudent');

const libraryUsers = {
    austin: new Teacher('austin'),
    davidMobeyi: new Teacher('davidMobeyi'),
    dareLawal: new SeniorStudent('dareLawal'),
    kazeem: new SeniorStudent('kazeem'),
    nnamdi: new JuniorStudent('nnamdi'),
    josh: new JuniorStudent('josh')
}

module.exports = libraryUsers;