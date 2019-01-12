class Person {
    constructor(name) {
        this.name = name;


    }
    request(book) {
        book.bookRequest.push(this)
    }
    returnB(book) {
        book.returnB(this.name);
    }
}

class Teacher extends Person {
    constructor(name) {
        super(name)
        this.priority = 1
        this.position = 'Teacher'
    }
}

class Student extends Person {
    constructor(name, ) {
        super(name)
        this.position = 'Student'

    }
}

class SeniorStudent extends Student {
    constructor(name) {
        super(name)
        this.position = 'SeniorStudent'
        this.priority = 2
    }
}

class JuniorStudent extends Student {
    constructor(name) {
        super(name)
        this.position = 'JuniorStudent'
        this.priority = 3
    }
}



class Book {
    constructor(title, copies) {
        this.title = title;
        this.copies = copies;
        this.avilableCopies = copies;
        this.bookRequest = [];
        this.borrowers = new Set()
    }

    processesbookRequest(personObject) {
        this.bookRequest.sort(function (a, b) {
            return a.priority - b.priority;
        });

        for (let i = 0; i < this.bookRequest.length; i++) {
            console.log(this.borrow(this.bookRequest[i].name));
        }
    }

    borrow(userName) {
        if (this.avilableCopies >= 1 && this.borrowers.has(userName) === false) {
            this.avilableCopies--;
            this.borrowers.add(userName);
            return `${userName}: ${this.title} book suscesfullly borrowed by ${userName}`;
        } else {
            return `${userName}: ${this.title} book Taken`
        } //end of else statement
    } //end of if statement

    returnBook(userName) {
        if (this.borrowers.has(userName)) {
            this.avilableCopies++;

            this.borrowers.delete(userName, )
            return `${this.title} book suscesfullly returned by ${userName}`;
        } else {
            return `${userName}: ${this.title} Book not borrowed`
        } //end of else statement
    } //end of if statement


} //end of book class

// const dareLawal = new Teacher('dareLawal');
// const graceFrank = new SeniorStudent('graceFrank');
// const vickyFrank = new JuniorStudent('vickyFrank')
// const frank = new SeniorStudent('frank')
// const lanre = new Teacher('lanre')

// const georgeOfTheJungle = new Book('georgeOfTheJungle', 3);
// const noviceToNinja = new Book('noviceToNinja', 2);
// const airtel = new Book('airtel', 10);

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


school.graceFrank.request(library.georgeOfTheJungle);
school.graceFrank.request(library.noviceToNinja);
school.graceFrank.request(library.airtel);
school.frank.request(library.georgeOfTheJungle);
school.lanre.request(library.noviceToNinja);
school.vickyFrank.request(library.airtel);
school.dareLawal.request(library.noviceToNinja);
school.frank.request(library.airtel);
school.dareLawal.request(library.airtel);
school.lanre.request(library.airtel);

library['airtel'].processesbookRequest();
library['noviceToNinja'].processesbookRequest();
library['georgeOfTheJungle'].processesbookRequest();














module.exports = {
    personClass: Person,
    seniorStudent: SeniorStudent,
    juniorStudent: JuniorStudent,
    bookClass: Book
}