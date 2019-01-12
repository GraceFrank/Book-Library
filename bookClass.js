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


const library = {
    georgeOfTheJungle: new Book('georgeOfTheJungle', 3),
    noviceToNinja: new Book('noviceToNinja', 2),
    airtel: new Book('airtel', 10)
}

console.log(library.georgeOfTheJungle);