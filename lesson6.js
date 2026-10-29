// const re = /o/g;
// const letter = 'o';
// const same = new RegExp(letter, "g");
// const result = "hello world".replace(/o/g, '0')
// console.log(result);

// const fruit = ['appl', 'babana', 'graepe']

// // fruit.age = '1m day' <---это плохо

// // fruit[10] = 'pineapple';



// // console.log(typeof(fruit));
// // console.log(Array.isArray()); 
// fruit.push('pineapple', 'grape', 'orange');
// fruit[0] = 'pineopel';
// console.log(fruit.push('pineapple', 'grape', 'orange'));
// fruit.unshift("peach")
// fruit.pop();
// fruit.shift();
// fruit.shift();
// fruit.shift();
// console.log(fruit.indexOf('grape'));
// let arr = [1, 2, 3, 4];

// let found = arr.find((item) => item > 2);
// console.log(found); //3 - первый подходящий, 4 уже не проверяется

// let numbers = [1, 2, 3, 4];
// const evenNumbers = numbers.find((el) => el % 2 === 0);
// console.log(evenNumbers);
// let arr = [1, 2, 3, 4];

// let tens = arr.map((item, idx) => item * idx);
// console.log(tens);
// 

// let sum = arr.reduce((accum, current) => {
//     if (current % 2 !== 0) return accum;
//     return accum + current

// }, 0);
// console.log(sum);

// let nums = [10, 9 , 1, 25];
// nums.sort((a, b) => b - a);
// console.log(nums);

// const users = [
//     {
//         name: 'Boris',
//         age: 20
//     },
//     {
//         name: 'Ansh',
//         age: 24
//     },
//     {
//         name: "Nomad",
//         age: 30
//     },
//     {
//         name: "Maxim",
//         age: 25
//     }
// ]
// users.sort((a, b) => a.age < b.age ? 1 : -1);
// console.log(users)

// let names = ["Оля", "Борис", "Анна"];
// names.sort((a, b) => {
//     console.log(a.localeCompare(b), names);
//     return a.localeCompare(b);
// });
// console.log(names);

// let uniqueArray = (arr) => {
//     const tempArr = [];
//     arr.forEach((el) => {
//         if(tempArr.includes(el)) {
//             tempArr.push(el);
//         }
//     })
//     return tempArr
// }

// let obj = {a: 1, b: 2 };

// for(let key in obj) {
//     console.log(key, obj[key]);
// }