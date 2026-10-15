// let Username = 'Ivan';

// function sayGoodbye() {
//     let text = "Goodbye";
//     console.log(text);
// }
// function sayHi() {
//     let Username = 'Sergey'
//     let text = "Hi!";
//     console.log(Username + ' ' + text);
// }
//     return {
//         a + b //после return код не выполняется
//     }
// let result = getSum(2, 3);
// console.log(result);
// console.log(getSum(3, 7));

// if (true) {
//     var test = 'test';
//     console.log(test);
// }
// console.log(test);

// console.log(age);

// var age = 25;

// console.log(age);
//2 задача по практике
// let base = 1
// let exponent = 2
// function Number(base, exponent = 1) {
//     return base ** exponent
// }
// console.log(Number(2,3));
// 3 задача 
// let myNumbers = [1, 2, 3]
// function getAverage(numbers) {
//     let sum = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         sum = sum + numbers[i];
//     }
//     return sum / numbers.length;
// }
// let result = getAverage(myNumbers)
// console.log(result)
// (function () {
//     console.log("Hi!") //анонимная самовызывающаяся функция
// })();
// const sayAddress = function(cb) {
//     cb();
// }
// sayAddress(sayHi);
// sayAddress(sayGoodbye);

// setTimeOut(function() {
//     console.log('test message')
// }, 3000)                            
// const getSum = (a = 0, b = 0) => {
//     return a + b;
// }
// console.log(getSum(3, 7)); //полная запись стрелочной функции

// const getSum = (a, b) => a + b;
// const printText = text => console.log('Example: ', text);

// printText("loren ipsum"); //сокращенная запись

// const showObjectNTimes = (str, n) => {
//     for (let i = 0; i < n; i++) {
//         console.log(str);
//     }
// }
// showObjectNTimes("Привет", 3)

// const isLower = (char) => {
//     const vowels = ['а', "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
//     return vowels.includes(char.tolowercase());
// };
// console.log(isVowel("в"));
