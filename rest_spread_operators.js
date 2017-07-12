'use strict';

// rest parameters

// let showCategories = function (productId, ...categories) {
//   console.log(categories instanceof Array);
// };
// showCategories(123, 'search', 'advertising'); // true

// let showCategories = function (productId, ...categories) {
//   console.log(categories);
// };
// showCategories(123, 'search', 'advertising'); // ['search', 'advertising']
// showCategories(123); // [] 
// console.log(showCategories.length) // 1, ignores rest parameter

// let showCategories = function (productId, ...categories) {
//   console.log(arguments.length);
// };
// showCategories(123, 'search', 'advertising'); //3

// let showCategories = 
//     new Function ('...categories', 'return categories');

// console.log(showCategories('search', 'advertising')); // ["search", "advertising"]

// spread operator

// spread operator in a function

// let prices = [12, 20, 18];
// let maxPrice = Math.max(...prices);
// console.log(maxPrice); // 20

// spread operator in an array

// let prices = [12, 20, 18];
// var newPriceArray = [...prices];
// console.log(newPriceArray); // [12,20,18]

// spread operator on an array with no values

// let newPriceArray = Array(...[,,]);
// or
// let newPriceArray = [...[,,]];
// console.log(newPriceArray); // [undefined, undefined] ignores trailing comma

// spread operator used on a string

// let maxCode = Math.max(...'43210');
// console.log(maxCode); // 4, breaks a string into it's individual characters

// let codeArray = ['A', ...'BCD', 'E'];
// console.log(codeArray); // ["A", "B", "C", "D", "E"]


