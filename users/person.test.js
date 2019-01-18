const Person = require('./person');
const queue = require('../data/queue');

const aondofa = new Person('aondofa');
describe('test the person class', () => {

    test('that person class has the card preoperty', () => {
        expect(aondofa.card).not.toBeFalsy();
    });
  
})


describe('testing the request function if it add the person object and booktitle to queue', () => {
      test('that request function adds bookTitle to queue', () => {
          aondofa.request('amazon');
          expect(queue[0].includes('amazon')).toBeTruthy();
      });
      test('that request function adds person to queue', () => {
          aondofa.request('amazon');
          expect(queue[0][0]).toEqual(aondofa);
      });
})

describe('testing the returnBook function works', () => {
    test('that return function removes book from user card', () => {
        aondofa.request('amazon');
        aondofa.returnBook('amazon');
        expect(aondofa['card'].has('amazon')).toBeFalsy();
    });
   
})
