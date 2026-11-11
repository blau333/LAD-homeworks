//1. Что выдает код?
// function f() {
//   alert(this);
// }
// let user = {
//   g: f.bind(null),
// };
// user.g();
// Зависит от того, в каком режиме работает код. В строгом режиме будет undefined, в нестрогом - window

//2. Повторный bind
// function f() {
//   alert(this.name);
// }
// f = f.bind({ name: "Вася" }).bind({ name: "Петя" });
// f();
// Выведет "Вася", так как bind не может быть повторно применен к уже привязанной функции

//3.Свойство функции после bind
// function sayHi() {
//   alert(this.name);
// }
// sayHi.test = 5;
// let bound = sayHi.bind({
//   name: "Вася",
// });
// alert(bound.test);
// undefined, так как bind возвращает новую функцию, которая не имеет свойства test

//2.1 Потеря контекста
// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }
// let user = {
//   name: "Вася",
//   loginOk() {
//     alert(`${this.name} logged in`);
//   },
//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };
// askPassword(user.loginOk, user.loginFail);
// Потеря контекста, так как методы loginOk и loginFail вызываются без объекта user, поэтому this будет undefined. 
// Чтобы исправить это, можно использовать bind:
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//2.2 Частичное применение
// let user = {
//   name: "John",
//   login(result) {
//     alert(this.name + (result ? " logged in" : " failed to log in"));
//   },
// };
// askPassword(user.login.bind(user, true), user.login.bind(user, false));
// В этом случае мы используем bind для привязки контекста и передачи аргумента result

//2.3 Привязать this к elem
// const elem = { value: "Привет" };
// function func(surname, name) {
//   alert(this.value + ", " + surname + " " + name);
// }
// // тут напишите конструкцию с bind()
// func = func.bind(elem);
// func("Иванов", "Иван"); // должно вывести "Привет, Иванов Иван"
// func("Петров", "Петр"); // должно вывести "Привет, Петров Петр"

//3.1 Замыкания

// function createTimer(start, end) {
// 	let current = start;
// 	let active = true;
// 	const step = start <= end ? 1 : -1;

// 	return function () {
// 		if (!active) return;

// 		if (current === end) {
// 			console.log(`${current}, Таймер завершил работу`);
// 			active = false;
// 		} else {
// 			console.log(current);
// 			current += step;
// 		}
// 	};
// }

// 4.1 Объект с методами

//   let city1 = {
//     name: "Brussels",
//     population: 1300000,
//     getName() {
//       return this.name;
//     },
//     getPopulation() {
//       return this.population;
//     },
//     setProp(key, value) {
//       this[key] = value;
//     },
//   };

// city1.setProp("population", 1210000)
// console.log(city1.getPopulation()); // 1210000

// 4.2 Чужие методы через call, apply, bind
// let city1 = {
//   name: "Brussels",
//   population: 1300000,
//   getName() {
//     return this.name;
//   },
//   getPopulation() {
//     return this.population;
//   },
//   setProp(key, value) {
//     this[key] = value;
//   },
// };
// let city2 = {
//   name: "Antwerp",
//   population: 530000,
// };

// 4.3 Обьем с высотой 10
// function makeVolume(height) {
//   return function(length, width) {
//     return length * width * height;
//   };
// }
// const volumeHeight10 = makeVolume(10);

// console.log(volumeHeight10(2, 3)); // 60
// console.log(volumeHeight10(4, 5)); // 200

// const makeVolume = (height) => (length, width) => length * width * height;

// const volumeHeight11 = makeVolume(10);
// console.log(volumeHeight11(2, 3)); // 60

