// 1. Квадрат числа. Функция возвращает квадрат числа. Число передается в функцию через аргумент.

// let number = 10; //Ответ: 100
// let number = 5; //Ответ: 25
// let number = 2; //Ответ: 4
// let number = 0; //Ответ: 0
// let number = 100000000; //Ответ: 10000000000000000

// function Square(number) {
//     let result = number * number;
//     return result;
// }
// console.log(Square(number));

// 2. Сумма 2 чисел. Функция возвращает сумму 2 чисел. Числа передаются в функцию через аргументы.

// let num1 = 10;
// let num2 = 30;
// Ответ: 40
// let num1 = -9;
// let num2 = -3;
//Ответ: -12

// function sum(num1, num2) {
//     return num1 + num2;
// }
// console.log(sum(num1, num2))


//3. Отнять и поделить. 

// let num1 = 5;
// let num2 = 6;
// let num3 = 7;
// Ответ: 4.142857142857143
// let num1 = 5;
// let num2 = 6;
// let num3 = 0;
// Ответ -infinity
// let num1 = 100;
// let num2 = 9;
// let num3 = 3;
// Ответ: 97

// function manyMathOperations() {
//     return num1 - num2 / num3;
// }
// console.log(manyMathOperations(num1, num2, num3))

// 4. День недели.
// let day = 10;
//  Ответ: Такого дня нет

// let day = 1; // Ответ: Понедельник
// let day = 2; // Ответ: Вторник
// let day = 3; // Ответ: Среда
// let day = 4; // Ответ: Четверг
// let day = 5; // Ответ: Пятница
// let day = 6; // Ответ: Суббота
// let day = 7; // Ответ: Воскресенье

// function weekDay(day) {
//     switch (day) {
//         case 1:
//             return "Понедельник";
//         case 2:
//             return "Вторник";
//         case 3:
//             return "Среда";
//         case 4:
//             return "Четверг";
//         case 5:
//             return "Пятница";
//         case 6:
//             return "Суббота";
//         case 7:
//             return "Воскресенье";
//         default:
//             return "Такого дня недели нет";
//     }
// }

// console.log(weekDay(day))


// 2.1 Числа равны?

// let num1 = 3;
// let num2 = 3;
// True

// let num1 = 3;
// let num2 = 5;
// False

// function trueOrFalse(num1, num2) {
//     if (num1 === num2) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(trueOrFalse(num1, num2));

// 2.2. Число > 10?

// let num = 11; //True
//let num = 10; //False
//let num = 9; //False

// function isNumberLessThenTen() {
//     if (num > 10) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isNumberLessThenTen(num))

//2.3 Число отрицательное?

// let num = 4; //False
// let num = -4 //True
// let num = 0 //False

// function isNumNegative() {
//     if (num < 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isNumNegative(num))

//2.4 Число в диапозоне (0 - 10)

// let num = 10; // True
// let num = 10.1; //False

// function isNumInRange(num) {
//     if (num >= 0 && num <= 10) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isNumInRange(num));

//2.5 Число четное?

// let num = 10;//true
//let num = 11;//false

// function isNumEven() {
//     if (num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isNumEven(num));

//3.1 Сумма цифр числа

// let num1 = 12345; // 15
// // let num1 = 49; // 13
// // let num1 = 7; // 7

// function getDigitsSum(num) {
//     let str = String(num);
//     let sum = 0;
//     for (let i = 0; i < str.length; i++) {
//         sum += Number(str[i]);
//     }
//     return sum;
// }
// console.log(getDigitsSum(num1));


//3.2 Года с суммой цифр 13

// let endYear = 2020; // [49, 58, 67, ..., 2019]

// function getYearsWithSum13(maxYear) {
//     let years = [];
//     for (let year = 1; year <= maxYear; year++) {
//         if (getDigitsSum(year) === 13) {
//             years.push(year);
//         }
//     }
//     return years;
// }
// console.log(getYearsWithSum13(endYear));


//3.3 Свернуть к однозначному числу

// let num3 = 99; // 9
// // let num3 = 12345; // 6
// // let num3 = 8; // 8

// function reduceToSingleDigit(num) {
//     while (num > 9) {
//         num = getDigitsSum(num);
//     }
//     return num;
// }
// console.log(reduceToSingleDigit(num3));


// //ЗАДАНИЕ 4
// //4.1 Палиндром

// let str4 = 'шалаш'; // true
// // let str4 = 'привет'; // false
// // let str4 = 'топот'; // true

// const isPalindrome = (str) => {
//     let reversed = str.split('').reverse().join('');
//     if (str === reversed) {
//         return true;
//     } else {
//         return false;
//     }
// };
// console.log(isPalindrome(str4));