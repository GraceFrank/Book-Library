const Student = require('../students');
const JuniorStudent = require('./juniorStudent')
const queue = require('../../../data/queue');

const kingsley = new JuniorStudent('kingsley');

describe('test that Student inherits properties and methods of person', () => {
    test('that Student has property card', () => {
        expect(kingsley['card']).toBeTruthy();
    });
    test('that request function adds bookTitle to queue', () => {
        kingsley.request('amazon');
        expect(queue[0].includes('amazon')).toBeTruthy();
    });
    test('that request function adds person to queue', () => {
        kingsley.request('amazon');
        expect(queue[0][0]).toEqual(kingsley);
    });
    test('that return function removes book from user card', () => {
        kingsley.request('amazon');
        kingsley.returnBook('amazon');
        expect(kingsley['card'].has('amazon')).toBeFalsy();
    });
});

test('that the position is seniorStudent', () => {
    expect(kingsley.position).toBe('juniorStudent');
});
test('that the priority is 2', () => {
    expect(kingsley.priority).toBe(3);
});