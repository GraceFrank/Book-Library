const libraryMethods = require('./index');

const Book = libraryMethods.bookClass;
const Person = libraryMethods.personClass;
const SeniorStudent = libraryMethods.seniorStudent;
const JuniorStudent = libraryMethods.juniorStudent;
const Teacher = libraryMethods.teacher;


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



//Returns each letter in the string as an inverse of its current case


describe('borrow book function  works', () => {
    
    test('a case where a person requests a book ', () => {
        const airtel = new Book('airtel', 10);
        const graceFrank = new SeniorStudent('graceFrank');
        expect(airtel.borrow(graceFrank.name)).toBe(true);
    });
    test('where a person requests a book already borrowed ', () => {
        const airtel = new Book('airtel', 10);
        const graceFrank = new SeniorStudent('graceFrank');
        airtel.borrow(graceFrank.name)
        expect(airtel.borrow(graceFrank.name)).toBe(false);
    });
   
});

describe('retun book function  works', () => {

    test('a case where a person returns a book after borrowing ', () => {
        const airtel = new Book('airtel', 10);
        const graceFrank = new SeniorStudent('graceFrank');
        airtel.borrow(graceFrank.name)

        expect(airtel.returnBook(graceFrank.name)).toBe(true);
    });
    test('where a person returns a book not borrowed ', () => {
        const airtel = new Book('airtel', 10);
        const graceFrank = new SeniorStudent('graceFrank');
            expect(airtel.returnBook(graceFrank.name)).toBe(false);
    });

});

       
describe('test that the prority queue works', () => {

    test('a case where a person returns a book after borrowing ', () => {
        const airtel = new Book('airtel', 10);
        const graceFrank = new SeniorStudent('graceFrank');
        const dareLawal = new Teacher('dareLawal');
        const vickyFrank = new JuniorStudent('vickyFrank');

        

        expect(airtel.processesbookRequest()).toBe(true);
    });


});

