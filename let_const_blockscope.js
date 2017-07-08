'use strict';

// let is a new keyword used to declare variables, it does away with hoisting

//ES5
// console.log(productId); // will log undefined
// var productId = 12;

// //ES6 using let
// console.log(productIdES6); // Reference Error: productId is not defined
// let productIdES6 = 12;

// const is used for constants, immutable variables

// const MARKUP_PCT = 100;
// console.log(MARKUP_PCT); 100

// const MARKUP_PCT; //Syntax Error: unexpected token ;
// console.log(MARKUP_PCT); 

// const MARKUP_PCT = 100;
// MARKUP_PCT = 10; //Type Error: assignment to constant variable
// console.log(MARKUP_PCT);

// const MARKUP_PCT = 100;
// if (MARKUP_PCT > 0){
//    const MARKUP_PCT = 10;
// } 
// console.log(MARKUP_PCT); //100


// Block Scoping: in ES6 variable that are declared inside a pair of curly braces are limited to that scope

// let productId = 12;
// {
//   let productId = 2000;
// }
// console.log(productId); // 12

/////////

// function updateProductId() {
//   productId = 12;
// }
// let productId = null;
// updateProductId();
// console.log(productId); // 12

/////////

// let productId = 42;
// for (let productId = 0; productId < 10; productId++) {
// }
// console.log(productId); // 42

//// var /////

// let updateFunctions = [];
// for (var i = 0; i < 2; i++) {
//      updateFunctions.push(function () { return i;});
// }
// console.log(updateFunctions[0]()); // 2

//// vs /////

//// let /////

// let updateFunctions = [];
// for (let i = 0; i < 2; i++) {
//      updateFunctions.push(function () { return i;});
// }
// console.log(updateFunctions[0]()); // 2

/////////



