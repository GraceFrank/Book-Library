const libraryUsers = require('./data/libraryUsers');
const Liberian = require('./liberian/Liberian');


const progress = new Liberian('progress');
libraryUsers.josh.request('amazon');
libraryUsers.austin.request('amazon');
libraryUsers.dareLawal.request('amazon');

progress.processesbookRequest();

console.log(libraryUsers.josh);
console.log(libraryUsers.austin);
console.log(libraryUsers.dareLawal);