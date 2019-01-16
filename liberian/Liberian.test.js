const Liberian = require('./Liberian');
const book = require('../data/books');
const libraryUsers = require('../data/libraryUsers');



const progress = new Liberian('progress');

test('that the liberian class can create a new instance of an object', () => {
        expect(typeof progress).toBe('object');
})



describe('testing the borrow function', () => {
    copies = book['amazon'].copies
    progress.borrow('dareLawal', 'amazon')

    test('test that it actually borrows the book and reduce the book copies', () => {
        expect(book['amazon'].copies).toBe(copies -1);
    })
    test('test the book is added to the users card', () => {
        expect(libraryUsers['dareLawal'].card.has('amazon')).toBe(true);
    })
})