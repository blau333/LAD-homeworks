//1. Длины строк
// let arr = ["apple", "banana", "cherry", "watermelon"] // [5, 6, 6, 10]
// let arr = ["hi", "Guten Abend", "Salut", "Bonjour", "Konichia"] // [ 2, 11, 5, 7, 8 ]
// let arr = ["hi"] // [2]
// function getLenghts(arr) {
//   return arr.map(str => str.length);
// }
// console.log(getLenghts(arr));
// 2. Накопительные суммы
// let numbers = [2, 3, 5]; // [ 2, 5, 10]
// let numbers = [1, 2]; // [ 1, 3 ]
// let numbers = [2, 3, 5, 7, 11, 13, 17, 19]; // [ 2, 5, 10, 17, 28, 41, 58, 77 ]
// function currentSums(numbers) {
//   return numbers.reduce((accum, current) => {
//     accum.push((accum[accum.length - 1] || 0) + current);
//     return accum;
//   }, []);
// }
// console.log(currentSums(numbers));
//3. Пары с суммой 7
// let arr = [0, 1, 2, 3, 4, 5, 6, 7] // [ [ 0, 7 ], [ 1, 6 ], [ 2, 5 ], [ 3, 4 ] ]
// let arr = [0, 1, 2, 5, 10, -3, 100]; // [ [ 2, 5 ], [ 10, -3 ] ]
// function getPairsOfSeven(arr) {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 7) {
//         result.push([arr[i], arr[j]]);
//       }
//     }
//   }

//   return result;
// }
// console.log(getPairsOfSeven(arr));
// 4. сумма 2-мерных масивов
// let matrix = [[1, 2, 3], [4, 5], [6]]; // 21
// let matrix = [[22, 2, 3], [4, 5], [6]] // 42
// let matrix = [[22, 2, 3], [4, 5], [800]] // 836
//   function sumMatrix(matrix) {
//     return matrix.reduce((totalSum, row) => {
//       let rowSum = row.reduce((acc, num) => acc + num, 0);
//       return totalSum + rowSum;
//     }, 0);
// }
// console.log(sumMatrix(matrix))
// // 2.1. Первые буквы слов
// function getFirstLetters(str) {
//   return str
//     .split(" ")
//     .filter(Boolean)
//     .map((word) => word[0]);
// }

// let firstLetters1 = getFirstLetters("Каждый охотник желает знать"); // ["К", "о", "ж", "з"]
// let firstLetters2 = getFirstLetters("JavaScript это круто");        // ["J", "э", "к"]
// let firstLetters3 = getFirstLetters("Привет");                      // ["П"]
// let firstLetters4 = getFirstLetters("");                            // []


// // 2.2 Тройки символов
// // Вариант 1: через spread, slice, map и join
// function getTriples(str) {
//   const chars = [...str];
//   return chars.slice(1, -1).map((_, i) => chars.slice(i, i + 3).join(""));
// }

// // Вариант 2: через цикл
// function getTriplesLoop(str) {
//   const result = [];
//   for (let i = 1; i < str.length - 1; i++) {
//     result.push(str[i - 1] + str[i] + str[i + 1]);
//   }
//   return result;
// }

// let triples = getTriples("hello");     // ["hel", "ell", "llo"]
// let triples = getTriples("abcde");     // ["abc", "bcd", "cde"]
// let triples = getTriples("дом");       // ["дом"]
// let triples = getTriples("да");        // []
// let triples = getTriplesLoop("hello"); // ["hel", "ell", "llo"]


// // 2.3 Сортировка по убыванию
// function sortDesc(digits) {
//   return [...digits].sort((a, b) => b - a);
// }

// let originalDigits = [3, 1, 4, 1, 5, 9, 2, 6];
// let sorted = sortDesc(originalDigits); // [9, 6, 5, 4, 3, 2, 1, 1] (originalDigits остался [3, 1, 4, 1, 5, 9, 2, 6])
// let sorted = sortDesc([0, 7, 2, 7]);   // [7, 7, 2, 0]
// let sorted = sortDesc([]);             // []


// // 2.4 Объединить три массива
// function mergeDesc(arr1, arr2, arr3) {
//   return [...arr1, ...arr2, ...arr3].sort((a, b) => b - a).join(" ");
// }

// let merged = mergeDesc([3, 1], [4, 1, 5], [9, 2]); // "9 5 4 3 2 1 1"
// let merged = mergeDesc([0], [], [8, 5]);           // "8 5 0"
// let merged = mergeDesc([1, 2], [3, 4], [5, 6]);    // "6 5 4 3 2 1"
// 3.1 Перевернуть массив
// function reverseArray(arr) {
//   const result = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     result.push(arr[i]);
//   }
//   return result;
// }

// let reversed = reverseArray([1, 2, 3, 4]);    // [4, 3, 2, 1]
// let reversed = reverseArray(["a", "b", "c"]); // ["c", "b", "a"]
// let reversed = reverseArray([42]);            // [42]
// let reversed = reverseArray([]);              // []


// // 3.2 Сколько сложить, чтобы больше 10
// function countToExceed(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (sum > 10) {
//       return i + 1;
//     }
//   }

//   return -1;
// }

// let count = countToExceed([2, 3, 4, 5, 6]); // 4
// let count = countToExceed([1, 2, 3]);       // -1
// let count = countToExceed([5, 5]);          // -1
// let count = countToExceed([15, 1, 2]);      // 1


// // 3.3 Заполнить массив
// function arrayFill(value, length) {
//   const result = [];
//   for (let i = 0; i < length; i++) {
//     result.push(value);
//   }
//   return result;
// }

// let filled = arrayFill("x", 5);  // ["x", "x", "x", "x", "x"]
// let filled = arrayFill(0, 3);    // [0, 0, 0]
// let filled = arrayFill(true, 2); // [true, true]
// let filled = arrayFill("a", 0);  // []
// // 4.1 Одинаковые массивы?
// function isEqualArrays(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }

//   return true;
// }

// let isEqual = isEqualArrays([1, 2, 3], [1, 2, 3]); // true
// let isEqual = isEqualArrays([1, 2, 3], [3, 2, 1]); // false
// let isEqual = isEqualArrays([1, 2], [1, 2, 3]);    // false
// let isEqual = isEqualArrays([1, "2"], [1, 2]);     // false
// let isEqual = isEqualArrays([], []);               // true


// // 4.2 Сумма чётных аргументов
// function sumEven(...numbers) {
//   let sum = 0;

//   for (const num of numbers) {
//     if (num % 2 === 0) {
//       sum += num;
//     }
//   }

//   return sum;
// }

// let evenSum = sumEven(1, 2, 3, 4, 5, 6); // 12
// let evenSum = sumEven(1, 3, 5, 7);       // 0
// let evenSum = sumEven(-4, 2, 10);        // 8
// let evenSum = sumEven();                 // 0


// // 4.3 Общие элементы
// // Вариант 1: через цикл for...of и метод includes
// function getIntersection(arr1, arr2) {
//   const result = [];

//   for (const item of arr1) {
//     if (arr2.includes(item) && !result.includes(item)) {
//       result.push(item);
//     }
//   }

//   return result;
// }

// // Вариант 2: через Set
// function getIntersectionFast(arr1, arr2) {
//   const set2 = new Set(arr2);
//   return [...new Set(arr1)].filter((item) => set2.has(item));
// }

// let inter = getIntersection([1, 2, 2, 3], [2, 3, 4]);     // [2, 3]
// let inter = getIntersection([5, 1, 5, 8], [8, 5, 5, 9]);  // [5, 8]
// let inter = getIntersection([1, 2], [3, 4]);              // []
// let inter = getIntersectionFast([1, 2, 2, 3], [2, 3, 4]); // [2, 3]
