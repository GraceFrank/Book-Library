class Book {
    constructor({
        title,
        author,
        isbn,
        copies,
    }) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
        this.avilableCopies = copies;
        this.borrowers = new Set()
    }
    borrow(userName) {
        if (this.avilableCopies >= 1 && this.borrowers.has(userName) === false) {
            this.avilableCopies--;
            this.borrowers.add(userName);
            return `book suscesfullly borrowed by ${userName}`;
        } else {
            return 'book Taken'
        } //end of else statement
    } //end of if statement

    returnBook(userName) {
        if (this.borrowers.has(userName)) {
            this.avilableCopies++;

            this.borrowers.delete(userName, )
            return `book suscesfullly returned by ${userName}`;
        } else {
            return 'Book already returned'
        } //end of else statement
    } //end of if statement


} //end of book class


const georgeOfTheJungle = new Book({
    title: 'George of The Jungle',
    author: 'Kelvin Scott',
    isbn: 'i87tgg67',
    copies: 6
});

console.log(georgeOfTheJungle.borrow('graceFrank'));

console.log(georgeOfTheJungle.borrowers);
console.log(georgeOfTheJungle.borrow('graceFrank'));

console.log(georgeOfTheJungle.returnBook('graceFrank'));

console.log(georgeOfTheJungle.borrowers);










module.exports = {
    bookConstrutor: Book,
}