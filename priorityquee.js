const queue = [

];







class Person {
    constructor(name) {
        this.name = name;


    }
    borrow(book) {
        queue.push(this)
    }
    returnB(book) {
        console.log(`${book} book returned by ${this.name}`)
    }
}

class Teacher extends Person {
    constructor(name) {
        super(name)
        this.priority = 1
        this.position = 'Teacher'
    }
}

class Student extends Person {
    constructor(name, ) {
        super(name)
        this.position = 'Student'

    }
}

class SeniorStudent extends Student {
    constructor(name) {
        super(name)
        this.position = 'SeniorStudent'
        this.priority = 2
    }
}

class JuniorStudent extends Student {
    constructor(name) {
        super(name)
        this.position = 'JuniorStudent'
        this.priority = 3
    }
}

// const dareLawal = new Teacher('dareLawal');
// const graceFrank = new SeniorStudent('graceFrank');
// const vickyFrank = new JuniorStudent('vickyFrank')
// console.log(dareLawal.borrow('george of the jungle'));
// console.log(graceFrank.borrow('george of the jungle'));
// console.log(vickyFrank.borrow('george of the jungle'));



// // queue.sort(function (a, b) {
// //     return a.priority - b.priority;
// // });

// // console.log(queue);

console.log(queue)