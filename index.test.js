const libraryMethods = require('./index');

const Book = libraryMethods.bookClass;
const Person = libraryMethods.personClass;
const SeniorStudent = libraryMethods.seniorStudent;
const JuniorStudent = libraryMethods.juniorStudent;


const library = {
    georgeOfTheJungle: new Book('georgeOfTheJungle', 3),
    noviceToNinja: new Book('noviceToNinja', 2),
    airtel: new Book('airtel', 10)
}

const school = {
    dareLawal: new Teacher('dareLawal'),
    graceFrank: new SeniorStudent('graceFrank'),
    vickyFrank: new JuniorStudent('vickyFrank'),
    frank: new SeniorStudent('frank'),
    lanre: new Teacher('lanre')
}


// //Returns each letter in the string as an inverse of its current case
// describe('9.  Inverses the case of characters in a string', () => {
//     test('A simple case of a string', () => {
//         expect('Mr Ben'.inverseCase()).toEqual('mR bEN');
//     });
//     test('a case of a sentence', () => {
//         expect('I Love You'.inverseCase()).toEqual('i lOVE yOU');
//     });
//     test('a case of a sentence containing non-alphabets', () => {
//         expect('Will we go?'.inverseCase()).toEqual('wILL WE GO?');
//     });
// });