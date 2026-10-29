

// ЗАДАНИЕ 1

// function stringToArray(str) {
//   return str.split(' ');
// }

// function getFirstChars(str, length) {
//   return str.slice(0, length);
// }

// function cutString(str, n) {
//   return str.split(' ').slice(0, n).join(' ');
// }

// function limitStr(str, n, symb = '...') {
//   return str.length > n ? str.slice(0, n) + symb : str;
// }

// function getFileName(pathname) {
//   return pathname.slice(pathname.lastIndexOf('\\') + 1);
// }

// function getSubstr(str, char, pos) {
//   const index = str.indexOf(char);
//   if (index === -1) return '';
//   return pos === 'before' ? str.slice(0, index) : str.slice(index + 1);
// }

// function insert(str, substr, pos = 0) {
//   return str.slice(0, pos) + substr + str.slice(pos);
// }

// // ЗАДАНИЕ 2

// function ucFirst(str) {
//   return str ? str[0].toUpperCase() + str.slice(1) : '';
// }

// function capitalize(str) {
//   return str
//     .split(' ')
//     .map(word => ucFirst(word))
//     .join(' ');
// }

// function changeRegister(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     result += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
//   }
//   return result;
// }

// function insertDash(str) {
//   return str.split(' ').join('-').toUpperCase();
// }

// function initCap(str) {
//   return str
//     .split(' ')
//     .map(word => ucFirst(word))
//     .join('');
// }

// function initSnake(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (char >= 'A' && char <= 'Z' && i !== 0) {
//       result += '_' + char.toLowerCase();
//     } else {
//       result += char.toLowerCase();
//     }
//   }
//   return result;
// }

// // ЗАДАНИЕ 3

// function removeChar(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     const isLetter = (char >= 'a' && char <= 'z') ||
//                      (char >= 'A' && char <= 'Z') ||
//                      (char >= 'а' && char <= 'я') ||
//                      (char >= 'А' && char <= 'Я') ||
//                      char === 'ё' || char === 'Ё';
//     const isDigit = char >= '0' && char <= '9';
//     if (isLetter || isDigit) result += char;
//   }
//   return result;
// }

// function strip(str) {
//   return str.trim().replace(/\s+/g, ' ');
// }

// function repeatStr(str, n) {
//   return str.repeat(n);
// }

// function zeros(num, len) {
//   const sign = num < 0 ? '-' : '+';
//   const digits = String(Math.abs(num)).padStart(len, '0');
//   return sign + digits;
// }

// // ЗАДАНИЕ 4

// function isEqualIgnoreCase(str1, str2) {
//   return str1.toLowerCase() === str2.toLowerCase();
// }

// function insensitiveSearch(str1, str2) {
//   return str1.toLowerCase().indexOf(str2.toLowerCase());
// }

// function hasEnding(str, ending) {
//   return str.slice(str.length - ending.length) === ending;
// }

// function count(str, search) {
//   let result = 0;
//   let index = str.indexOf(search);
//   while (index !== -1) {
//     result++;
//     index = str.indexOf(search, index + search.length);
//   }
//   return result;
// }

// function hasWord(str, word) {
//   const words = str.toLowerCase().split(/\s+/);
//   return words.includes(word.toLowerCase());
// }
