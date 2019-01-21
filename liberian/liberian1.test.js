const Liberian = require('./Liberian');
const libraryUsers = require('../data/libraryUsers');
const queue = require('../data/queue');
const returnQueue = require('../data/returnQueue');


const progress = new Liberian('progress');
libraryUsers.josh.request('amazon')
libraryUsers.austin.request('amazon')
libraryUsers.dareLawal.request('amazon')

describe('testing the process book require', () => {
    progress.processesbookRequest();

    test('that the processesbookRequest function actually sorts the array', () => {
        expect(queue[0][0]).toEqual(libraryUsers.austin);
    });
    test('that the processesbookRequest function actually sorts the array', () => {
        expect(queue[1][0]).toEqual(libraryUsers.josh);
    });
    test('that the processesbookRequest function actually sorts the array', () => {
        expect(queue[2][0]).toEqual(libraryUsers.dareLawal);
    });

});

describe('testing the returnall book functions', () => {
    libraryUsers.dareLawal.returnBook('amazon');
    test('that if darelawar retuns a book it will be retunred', () => {

        progress.returnallBooks();
        expect(libraryUsers.dareLawal.card.has('amazon')).toBeFalsy();
    })
    test('that if darelawar retuns a book it will be retunred', () => {
        progress.returnallBooks();
        expect(returnQueue[0][0]).toEqual(libraryUsers.dareLawal);
    })
})