class Person {
    constructor(name) {
        this.name = name;


    }
    request(book) {
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


const school = {
    dareLawal: new Teacher('dareLawal'),
    graceFrank: new SeniorStudent('graceFrank'),
    vickyFrank: new JuniorStudent('vickyFrank'),
    frank: new SeniorStudent('frank'),
    lanre: new Teacher('lanre')
}