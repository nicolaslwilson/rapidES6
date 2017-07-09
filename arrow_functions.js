'use strict';

// let getPrice = () => 5.99;
// console.log(typeof getPrice); // function
// console.log(getPrice()); // 5.99

// let getPrice = count => count * 4;
// console.log(getPrice(2)); //8

// let getPrice = (count, tax) => count * 4.00 * (1 + tax);
// console.log(getPrice(2, 0.07)); // 8.56

// let getPrice = (count, tax) => {
//   let price = count * 4.00;
//   price *= (1+tax);
//   return price;
// }
// console.log(getPrice(2, 0.07)); // 8.56

//The real purpose of arrow functions is to handle the this keyword within function

// document.addEventListener('click', function () {
//   console.log(this); // #document
// });

// document.addEventListener('click', () => console.log(this));

// let invoice = {
//   number: 123,
//   process: function () {
//     console.log(this);
//   }
// };
// invoice.process(); // Object {...}

// let invoice = {
//   number: 123,
//   process: () => console.log(this)
// };
// invoice.process(); // window

// let invoice = {
//   number: 123,
//   process: function () {
//     return () => console.log(this.number);
//   }
// };
// let newInvoice = {
//   number: 456
// };
// invoice.process()(); // 123
// invoice.process().bind(newInvoice)(); // 123, arrow functions ignore bind, call and apply



