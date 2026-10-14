//1.
// let a = -3;

// if (a === 0) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }
//Все значения, отличающиеся от 0, выводят "Неверно". 

// 2.
// let a = 5;

// if (a > 0) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }


// 3.
// let a = -90;

// if (a < 0) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// 4.
// let a = -19;

// if (a >= 0) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }


// 5.
// let a = 19;

// if (a <= 0) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// 6.
// let a = 0;

// if (a !== 0) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// 7.
// let a = 'тест';

// if (a === 'test') {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// 8.
// let a = '100';

// if (a === '1') {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }
// 2.1
// let test = false;

// if (test === true) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// 2.2
// let test = true;

// if (test !== true) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

//3.1
// let a = 5;

// if (a > 0 && a < 5) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// 3.2

// let a = 1;

// if (a === 0 || a === 2) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// let test = false;

// 3.3

// let a = 1;
// let b = 2;

// if (a <= 1 && b >= 3) {
//     console.log(a + b);
// } else {
//     console.log(a - b);
// }

// let a = 1;
// let b = 2;

// if (a <= 1 && b >= 3) {
//     console.log(a + b);
// } else {
//     console.log(a - b);
// }


// 3.4
// let a = 3;
// let b = 1;

// if (a > 2 && a < 11 || b >= 6 && b < 14) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// 4.1
// let num = 1;
// let result;

// switch (num) {
//     case 1:
//         result = 'зима';
//         break;
//     case 2:
//         result = 'весна';
//         break;
//     case 3:
//         result = 'лето';
//         break;
//     case 4:
//         result = 'осень';
//         break;
// }

// console.log(result);

//5.1
// let day = 15;

// if (day >= 1 && day <= 10) {
//     console.log('Первая декада');
// } else if (day >= 11 && day <= 20) {
//     console.log('Вторая декада');
// } else if (day >= 21 && day <= 31) {
//     console.log('Третья декада');
// }

//5.2

// let month = 5;

// if (month === 12 || month === 1 || month === 2) {
//     console.log('Зима');
// } else if (month >= 3 && month <= 5) {
//     console.log('Весна');
// } else if (month >= 6 && month <= 8) {
//     console.log('Лето');
// } else if (month >= 9 && month <= 11) {
//     console.log('Осень');
// }

// 5.3

// let str = 'gbcde';

// if (str[0] === 'a') {
//     console.log('да');
// } else {
//     console.log('нет');
// }
// 6.1 (while)
// let i = 1;

// while (i <= 100) {
//     console.log(i);
//     i++;
// }


// 6.1 (for)
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }


// 6.2 (while)
// let i = 11;

// while (i <= 33) {
//     console.log(i);
//     i++;
// }


// 6.2 (for)
// for (let i = 11; i <= 33; i++) {
//     console.log(i);
// }


// 6.3 (while)
// let i = 0;

// while (i <= 100) {
//     console.log(i);
//     i += 2;
// }


// 6.3 (for)
// for (let i = 0; i <= 100; i += 2) {
//     console.log(i);
// }


// 6.4 (while)
// let i = 1;
// let sum = 0;

// while (i <= 100) {
//     sum += i;
//     i++;
// }

// console.log(sum);


// 6.4 (for)
// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }

// console.log(sum);


// 7.1
// let n = 1000;
// let num = 0;

// while (n >= 50) {
//     n = n / 2;
//     num++;
// }

// console.log('Результат:', n);
// console.log('Количество итераций:', num);
