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
        this.borrowers = []
    }
    borrow(userName) {
        if (this.avilableCopies >= 1 && this.borrowers.includes(userName) === false) {
            this.avilableCopies--;
            this.borrowers.push(userName);
            return `book suscesfullly borrowed by ${userName}`;
        } else {
            return 'book Taken'
        } //end of else statement
    } //end of if borrow function

    returnBook(userName) {
        if (this.borrowers.includes(userName)) {
            this.avilableCopies++;
            const indexOfUserName = this.borrowers.indexOf(userName);
            this.borrowers.splice(indexOfUserName, 1)
            return `book suscesfullly returned by ${userName}`;
        } else {
            return 'Book already returned'
        } //end of else statement
    } //end of return book function




} //end of book class











module.exports = {
    bookConstrutor: Book,
}