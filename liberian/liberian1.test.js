const Liberian = require('./Liberian');
const libraryUsers = require('../data/libraryUsers');
const queue = require('../data/queue');


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

test('that book')
