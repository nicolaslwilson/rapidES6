'use strict';

// object literal shorthand

// let price = 5.99, quantity = 30;
// let productView = {
//   price,
//   quantity
// }
// console.log(productView);

// object literal function shorthand

// let price = 5.99, quantity = 10;
// let productView = {
//   price,
//   quantity,
//   calculateValue() {
//     return this.price * this.quantity;
//   }
// }
// console.log(productView.calculateValue()); // 59.9...

// let price = 5.99, quantity = 10;
// let productView = {
//   price: 7.99,
//   quantity: 1,
//   calculateValue() {
//     return this.price * this.quantity;
//   }
// }
// console.log(productView.calculateValue()); // 59.9... this.price refers to the context, as in an arrow function

// dynamic field names

// let field = 'dynamicField';
// let price = 5.99;
// let productView = {
//   [field]: price // can use an expression inside the brackets here
// };
// console.log(productView) // {dynamicField: 5.99}
