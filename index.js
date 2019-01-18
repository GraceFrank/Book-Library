const book = require('./data/books');
const libraryUsers = require('./data/libraryUsers');
const queue = require('./data/queue');
const Liberian = require('./liberian/Liberian');
const Person = require('./users/person');
const Student = require('./users/students/students');
const Teaher = require('./users/teachers/teacher');

const progress = new Liberian('progress');
libraryUsers.josh.request('amazon')
libraryUsers.austin.request('amazon')
libraryUsers.dareLawal.request('amazon')

progress.processesbookRequest();

console.log(libraryUsers.josh);
console.log(libraryUsers.austin);
console.log(libraryUsers.dareLawal);

