// const arr1 = ["tata", "mahindra", "suzuki", "hyundai"];
// const arr2 = ["kia", "byd", "mitsubishi"];
// console.log(arr1);

// // READ
// // // 1.
// // const company = arr1[1];
// // console.log(company);

// // 2.
// const [a, b, c] = arr1;
// console.log(b, c);

// const [x, y, z] = arr2;
// console.log(x, z);

// --------------------------------------------------------
// // ADD
// const arr = ["tata", "mahindra", "suzuki", "hyundai"];

// arr[10] = "Honda";

// arr.push("Honda");
// arr.pop();

// arr.shift();
// arr.unshift("Kia");

// console.log(arr);

// --------------------------------------------------------
// const arr = ["tata", "mahindra", "suzuki", "hyundai"];

// arr.splice(1, 2, "kia", "byd", "honda"); --> removing & adding elements
// arr.splice(1, 1); --> removing new elements
// arr.splice(1, 0, "johndeer"); --> adding new elements

// console.log("🟡 : arr:", arr);

// -----------------------------------------------------------

// find the index of the element which is equal to "suzuki"
// const arr = ["tata", "mahindra", "suzuki", "hyundai"];

// console.log(arr.indexOf("suzuki"));
// console.log(arr.indexOf("honda"));

// -----------------------------------------------------------

// find the index of the element whose name is "Abhinav" & city is "Delhi"

// const arr = [
//     { name: "Likhilesh", city: "Delhi" },
//     { name: "Abhinav", city: "Kanpur" },
//     { name: "Sumedh", city: "Mumbai" },
// ];

// console.log(arr.indexOf({ name: "Abhinav", city: "Delhi" }));
// console.log(arr.indexOf({ name: "Abhinav", city: "Kanpur" }));

// -------------------------------------

// const arr = ["ab", "xy", "mn", "ab", "pq"];
// indexOf("ab") --> 0
// lastIndexOf("ab") -->  3
// indexOf("xy") --> 1

// includes("xy") --> true

// -------------------------------------------
// if (arr.indexOf("ab")) {
//     console.log("Present");
// } else {
//     console.log("Absent");
// }

// if (arr.indexOf("lik")) {
//     console.log("Present");
// } else {
//     console.log("Absent");
// }
// ---------------------------------------------
// if (arr.indexOf("ab") === -1) {
//     console.log("Present");
// } else {
//     console.log("Absent");
// }

// if (arr.indexOf("lik") === -1) {
//     console.log("Present");
// } else {
//     console.log("Absent");
// }

// -----------------------------
// if (arr.includes("ab")) {
//     console.log("Present");
// } else {
//     console.log("Absent");
// }

// if (arr.includes("lik")) {
//     console.log("Present");
// } else {
//     console.log("Absent");
// }

// // --------------------------------

// const myFunc = (a, b, c, d) => {
//     console.log("🟡 : a, b, c, d:", a, b, c, d);
//     if (a == "mn") return true;
//     else return false;
// };

// const arr = ["ab", "xy", "mn", "ab", "pq"];

// const elem = arr.find(myFunc);
// console.log("🟡 : elem:", elem);

// // --------------------------------

// const arr = [
//     { name: "Likhilesh", city: "Delhi" },
//     { name: "Abhinav", city: "Kanpur" },
//     { name: "Sumedh", city: "Mumbai" },
// ];

// const myFunc = (a) => {
//     if (a.name === "Abhinav") return true;
//     return false;
// };

// const ans = arr.find(myFunc);

// console.log(ans);

// ------------------------------------------

// const arr = [
//     { name: "Likhilesh", city: "Delhi" },
//     { name: "Abhinav", city: "Kanpur" },
//     { name: "Sumedh", city: "Mumbai" },
// ];

// const myFunc = (a) => {
//     if (a.name === "Sumedh") return true;
//     return false;
// };

// const ans = arr.findIndex(myFunc);

// console.log(ans);

// -----------------------------------

// const arr = [
//     { name: "Likhilesh", city: "Delhi" },
//     { name: "Abhinav", city: "Kanpur" },
//     { name: "Sumedh", city: "Mumbai" },
// ];

// const myFunc = (a) => {
//     if (a.name === "Sumedh") return true;
//     return false;
// };

// const ans = arr.findIndex(myFunc);

// console.log(ans);

// ------------------------------------

const arr = [
    { name: "Likhilesh", city: "Delhi", score: 33 },
    { name: "Abhinav", city: "Kanpur", score: 24 },
    { name: "Sumedh", city: "Mumbai", score: 42 },
];

const myFunc = (elem) => {
    if (elem.score < 25) {
        return { ...elem, remark: "fail" };
    } else {
        return { ...elem, remark: "pass" };
    }
};

const resArr = arr.map(myFunc);
console.log("🟡 : resArr:", resArr);
