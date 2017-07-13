'use strict';

// use back tick to interprolate variables in strings

// let invoiceNum = '1350';
// console.log(`Invoice Number: ${invoiceNum}`); //"Invoice Number: 1350"
// console.log(`Invoice Number: \${invoiceNum}`); //"Invoice Number: ${invoiceNum}"

// in template literals white space is maintained

// let message = `A
// B
// C`;
// console.log(message);

// can use expressions inside curly braces

// let invoiceNum = '1350';
// console.log(`Invoice Number: ${"INV-" + invoiceNum}`); "Invoice Number: INV-1350"

// function processInvoice(segments, ...values) {
//   console.log(segments);
//   console.log(values);
// }
// let invoiceNum = '1350';
// let amount = '2000';
// processInvoice `Invoice: ${invoiceNum} for ${amount}`; // ["Invoice: ", " for ", ""], ["1350", "2000"] 

