// let juice = 50;
// let gstOnJuice = 0.1;
// let fries = 70;
// let gstOnFood = 0.05;

// let juiceBillAmount = juice + juice * gstOnJuice;
// let friesBillAmount = fries + fries * gstOnJuice;

// const finalBill = juiceBillAmount + friesBillAmount;
// console.log("🟡 : finalBill:", finalBill);

// -------------------------------------------------

// let age = 22;
// console.log("START", age);

// // 1. function declaration
// function calculateJuiceBillAmount() {
//     let juice = 50;
//     let gstOnJuice = 0.1;
//     let juiceBillAmount = juice + juice * gstOnJuice;
//     console.log(juiceBillAmount);
// }

// console.log("MID");

// calculateJuiceBillAmount();

// console.log("END");

// ---------------------------------------------------

// // 1. function declaration
// function calculateBillAmount(price, gst) {
//     // parameter
//     let billAmount = price + price * gst;
//     console.log(billAmount);
// }

// calculateBillAmount(60, 0.1); // argument
// calculateBillAmount(50, 0.1); // argument
// calculateBillAmount(110, 0.05); // argument

// ---------------------------------------------------

// function printBill(name, amount) {
//     console.log("-----------------");
//     console.log("Your bill for", name);
//     console.log("👉🏼👉🏼 Rs.", amount);
//     console.log("-----------------");
// }

// // 1. function declaration
// function calculateBillAmount(price, gst) {
//     // parameter
//     console.log("...calculating...");
//     let billAmount = price + price * gst;
//     return billAmount;
// }

// let res1 = calculateBillAmount(60, 0.1); // argument
// printBill("Mango Juice", res1);
// const res2 = calculateBillAmount(50, 0.1); // argument
// printBill("Orange Juice", res2);
// const res3 = calculateBillAmount(110, 0.05); // argument
// printBill("Fries", res3);

// ---------------------------------- -------------------

// let res1 = calculateBillAmount(60, 0.1); // argument
// printBill("Mango Juice", res1);

// // 1. function declaration
// function printBill(name, amount) {
//     console.log("-----------------");
//     console.log("Your bill for", name);
//     console.log("👉🏼👉🏼 Rs.", amount);
//     console.log("-----------------");
// }

// // 1. function declaration
// function calculateBillAmount(price, gst) {
//     // parameter
//     console.log("...calculating...");
//     let billAmount = price + price * gst;
//     return billAmount;
// }
// const res2 = calculateBillAmount(50, 0.1); // argument
// printBill("Orange Juice", res2);
// const res3 = calculateBillAmount(110, 0.05); // argument
// printBill("Fries", res3);

// // 1. function declaration (redeclaring with same name)
// function printBill(name, amount) {
//     console.log("-----------------");
//     console.log("Your bill for", name);
//     console.log("👉🏼👉🏼 $.", amount);
//     console.log("-----------------");
// }

// ------------------------------------------------------

// // This now gives error
// // printBill();

// // 2. function assignment (named function)
// const printBill = function printBillXYZ(name, amount) {
//     console.log("-----------------");
//     console.log("Your bill for", name);
//     console.log("👉🏼👉🏼 Rs.", amount);
//     console.log("-----------------");
// };

// // 2. function assignment (named function)
// const calculateBillAmount = function calculateBillAmountXYZ(price, gst) {
//     // parameter
//     console.log("...calculating...");
//     let billAmount = price + price * gst;
//     return billAmount;
// };

// let res1 = calculateBillAmount(60, 0.1); // argument
// printBill("Mango Juice", res1);
// const res2 = calculateBillAmount(50, 0.1); // argument
// printBill("Orange Juice", res2);
// const res3 = calculateBillAmount(110, 0.05); // argument
// printBill("Fries", res3);

// // This now gives error
// // const printBill = function printBillXYZ(name, amount) {
// //     console.log("-----------------");
// //     console.log("Your bill for", name);
// //     console.log("👉🏼👉🏼 Rs.", amount);
// //     console.log("-----------------");
// // };

// ------------------------------------------------------

// 3. function assignment (anonymous function)
const printBill = function (name, amount) {
    console.log("-----------------");
    console.log("Your bill for", name);
    console.log("👉🏼👉🏼 Rs.", amount);
    console.log("-----------------");
};

// 3. function assignment (anonymous function)
const calculateBillAmount = function (price, gst) {
    // parameter
    console.log("...calculating...");
    let billAmount = price + price * gst;
    return billAmount;
};

let res1 = calculateBillAmount(60, 0.1); // argument
printBill("Mango Juice", res1);
const res2 = calculateBillAmount(50, 0.1); // argument
printBill("Orange Juice", res2);
const res3 = calculateBillAmount(110, 0.05); // argument
printBill("Fries", res3);
