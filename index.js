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




} //end of book class











module.exports = {
    bookConstrutor: Book,
}