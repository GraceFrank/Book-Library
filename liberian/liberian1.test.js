const Liberian = require('./Liberian');
const book = require('../data/books');
const libraryUsers = require('../data/libraryUsers');
const queue = require('../data/queue');

const Person = require('../users/person');
const Student = require('../users/students/students');
const Teaher = require('../users/teachers/teacher');

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

