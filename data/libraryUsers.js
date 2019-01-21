const Teacher = require('../users/teachers/teacher');
const SeniorStudent = require('../users/students/juniorStudent/juniorStudent');
const JuniorStudent = require('../users/students/seniorStudent/seniorStudent');

// users for the library
/*every user looks like this
 {
     userName: 'kazeem',
     card: Set {}, //card stores books borrowd by a user
     position: 'juniorStudent',
     priority: 3
 }
 */
const libraryUsers = {
    austin: new Teacher('austin'),
    davidMobeyi: new Teacher('davidMobeyi'),
    dareLawal: new SeniorStudent('dareLawal'),
    kazeem: new SeniorStudent('kazeem'),
    nnamdi: new JuniorStudent('nnamdi'),
    josh: new JuniorStudent('josh')
}


module.exports = libraryUsers;