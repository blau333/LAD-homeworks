// const animal = {
//     legs: 4,
// }
// const dog = {
//     hasTail: true,
//     name: "Шарик",
//     age: 5,
//     sayBark() {
//         console.log("Гав-гав");
//     }
// }

// dog.__proto__ = animal;

// console.log(dog);

// const user = {
//     isReader: true
// }
// const admin = Object.create(user);

// admin.isWriter = true;

// console.log(admin)
// dog.sayBark();

// function User(name, age) {
//     this.name = name;
//     this.age = age;
//     this.sayHi = function () {
//         console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет`);
//     }
// }

// User.prototype.sayBye = function () {
//     console.log(`Пока, меня зовут ${this.name}, мне ${this.age} лет`);
// }

// let FirstUser = new User("Вася", 25);
// let SecondUser = new User("Петя", 30);
// let ThirdUser = new User("Маша", 20);

// // console.log(FirstUser);
// // console.log(SecondUser);
// // console.log(ThirdUser);
// FirstUser.sayHi();
// SecondUser.sayHi();
// ThirdUser.sayHi();
// FirstUser.sayBye();
// SecondUser.sayBye();
// ThirdUser.sayBye();


// function Postcard(from, to) {
//     this.from = from;
//     this.to = to;
// }

// Postcard.prototype.show = function () {
//     console.log(`Граммота отправлена из ${this.from} в ${this.to}`);
// }
// Postcard.prototype.setFrom = function (from) {
//   this.from = from;
// };

// let postcard1 = new Postcard("Zurich", "Zheneva");
// let postcard2 = new Postcard("Amsterdam", "Barselona");

// postcard1.show();
// postcard2.show();

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log(`Привет, меня зовут ${this.name}, мне ${this.age} лет`);
    }
}
// const user1 = new User("Вася", 25);
// user1.sayHi();

// console.log(user1);

// class Person {
// constructor(name) {
// this.name = name; // срабатывает сеттер
// }


//     get name() {
//     console. log ( 'Был запрос имени!')
//     return this._name;
//     }
//     set name(value) {
//     if (value.length < 2) {
//     console. log ("Имя слишком короткое");
//     return;
//     }
//         this._name = value;
//     }
// }
// const person = new Person("Ivan");
// console. log(person. name) ;
// person.name = "Ivan Ashihrin"; // Имя слишком короткое
// // person.name;

class Person {
    constructor(name) {
        this.name = name;
    }
    constructor(surname) {
        this.surname = surname;
    }

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}
class Employee extends Person {
    constructor(name, surname, rate, days) {
        super(name, surname);
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days;
    }
}

const employee = new Employee("Иван", "Иванов", 100, 20);
console.log(employee.fullName);
console.log(employee.getSalary());
consol