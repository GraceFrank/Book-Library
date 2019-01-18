const Liberian = require('./Liberian');
const book = require('../data/books');
const libraryUsers = require('../data/libraryUsers');




const progress = new Liberian('progress');

test('that the liberian class can create a new instance of an object', () => {
    expect(typeof progress).toBe('object');
})

let copies = book['amazon'].copies;


describe('testing the borrow function', () => {
    progress.borrow('dareLawal', 'amazon');
    
    test('that  actually borrows the book and reduce the book copies', () => {
        expect(book['amazon'].copies).toBe(copies - 1);
    });

    test('that borrowed book is added to the users card', () => {
        expect(libraryUsers['dareLawal'].card.has('amazon')).toBe(true);
    });

    test('that the book is not borrowed to a user who has already borrowed a book', () => {
        expect(progress.borrow('dareLawal', 'amazon')).toBe('book taken');
    });

    test('that the copies of book is not reduced when book is not borrowed ', () => {
        progress.borrow('dareLawal', 'amazon');
        expect(book['amazon'].copies).toBe(copies - 1);
    });

    test('that book not existing in the library cannot be borrowed ', () => {
        expect(progress.borrow('dareLawal', 'css3')).toBe('book does not exist');
    });

});


describe('testing the returnBook function', () => {

    test('that it actually returns the book and increase the book copies', () => {
        progress.returnBook('dareLawal', 'amazon');
        expect(book['amazon'].copies).toBe(copies);
    });

    test('that it actually returns the book and increase the book copies', () => {
        progress.returnBook('dareLawal', 'amazon');
        expect(book['amazon'].copies).toBe(copies);
    });

    test('that borrowed book is removed from the users card', () => {
        progress.returnBook('dareLawal', 'amazon');
        expect(libraryUsers['dareLawal'].card.has('amazon')).toBe(false);
    });

    test('that the book not in a users card cannot be returned', () => {
        progress.returnBook('dareLawal', 'amazon');
        expect(progress.returnBook('dareLawal', 'amazon')).toBe('book not borrowed');
    });

    test('that the copies of book is not increased when book is not borrowed ', () => {
        progress.returnBook('dareLawal', 'amazon');
        progress.returnBook('dareLawal', 'amazon');
        expect(book['amazon'].copies).toBe(copies);
    });

    test('that book not existing in the library cannot be borrowed ', () => {
        progress.returnBook('dareLawal', 'amazon');
        expect(progress.returnBook('dareLawal', 'css3')).toBe('book does not exist');
    });
});