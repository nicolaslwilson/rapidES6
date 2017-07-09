'use strict';

// specifying a default parameter 

// let getProduct = function (productId = 1000) {
//   console.log(productId);
// }
// getProduct(); // 1000

// mixing defaults with other values

// let getProduct = function(productId = 1000, type = 'software') {
//   console.log(productId + ', ' + type);
// }
// getProduct(undefined, 'hardware'); // "1000, hardware"

// using expressions to declare default parameters

// let getTotal = function(price, tax = price * 0.07) {
//   console.log(price + tax);
// }
// getTotal(5); // 5.35

// accessing external variables in the function expression

// let baseTax = 0.07;
// let getTotal = function (price, tax = price * baseTax) {
//   console.log(price + tax);
// }
// getTotal(5); // 5.35

//using a function to set a default value

// let generateBaseTax = () => 0.07;
// let getTotal = function(price, tax = price * generateBaseTax() ) {
//   console.log(price + tax);
// }
// getTotal(5); / /5.35

// using the arguments object inside a function with default params

// let getTotal = function(price, tax = .07) {
//   console.log(arguments.length); // not a best practice to use 'arguments' inside a function
// }
// getTotal(5.00); // 1, arguments still refers to the number of args passed to the function, ignoring any defaults

// when setting defaults, parameters can only be used if they've already been declared

// let getTotal = function(price = adjustment, adjustment = 1) {
//   console.log(price + adjustment);
// }
// getTotal(); //SyntaxError: Use before declaration

// let getTotal = function(price = adjustment, adjustment = 1) {
//   console.log(price + adjustment);
// }
// getTotal(5); // 6

// let getTotal = new Function("price = 20.00", "return price;");
// console.log(getTotal()); // 20
