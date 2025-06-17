// // const cse018Name = "Subhodeep";
// // const cse018Address = "Kolkata, WB";
// // const cse018BloodGroup = "O-";
// const cse018 = {
//     name: "Subhodeep",
//     address: "Kolkata, WB",
//     bloodGroup: "O-",
// };

// console.log(cse018);

// // const cse75Name = "Shrinivas";
// // const cse75Address = "Hyderabad, TS";
// // const cse75BloodGroup = "O+";
// const cse75 = {
//     name: "Shrinivas",
//     address: "Hyderabad, TS",
//     bloodGroup: "O+",
// };

// console.log(cse75);

// ---------------------------------------------------

// const cse018 = {
//     name: "Subhodeep",
//     address: "Kolkata, WB",
//     bloodGroup: "O-",
//     getInfo: () => {
//         console.log(`Hel`);
//     },
// };

// console.log("🟡 : cse018:", cse018);

// // READ the value of property
// const studentName = cse018.name;
// console.log("studentName:", studentName);

// // Update the value of property
// cse018.bloodGroup = "A+";

// // Add a key-value pair
// cse018.college = "LPU";

// // delete a key-value pair
// console.log("cse018:", cse018);

// delete cse018.address;

// console.log("cse018:", cse018);

// --------------------------------------------

// const person = {
//     name: "Likhilesh",
//     height: 2, //meters
//     weight: 100, //kg
//     college: "LPU",
//     rollNumber: "1234",
//     getBMI: function () {
//         const bmi = this.weight / this.height ** 2;
//         console.log(`BMI for ${this.name} is ${bmi}`);
//         if (bmi < 20) {
//             console.log("It seems he is underweight");
//         } else if (bmi < 25) {
//             console.log("It seems he is fit");
//         } else if (bmi < 30) {
//             console.log("It seems he is overweight");
//         } else {
//             console.log("It seems he is obese");
//         }
//     },
// };

// person.getBMI();

// person.weight = 90;

// person.getBMI();

// const allKeys = Object.keys(person);
// console.log("allKeys:", allKeys);
// const allValues = Object.values(person);
// console.log("allValues:", allValues);
// const allEntries = Object.entries(person);
// console.log("allEntries:", allEntries);

// ----------------- Dynamic value access-------------------------------

// const person = {
//     name: "Likhilesh",
//     height: 2, //meters
//     weight: 100, //kg
//     college: "LPU",
//     rollNumber: "1234",
// };

// // READ
// // const clg = person.college;
// // console.log(clg);

// const whichKey = prompt("What value do you want?");
// console.log("🟡 : whichKey:", whichKey);
// // const clg = person.college;
// // const clg = person["college"];
// const clg = person[whichKey];
// console.log("🟡 : clg:", clg);

// ---------------------------------------

// const person1 = {
//     name: "Likhilesh",
//     height: 2, //meters
//     weight: 100, //kg
//     college: "LPU",
//     rollNumber: "1234",
// };

// const person2 = person1;

// person1.name = "Mohan";
// person2.name = "Raj";

// console.log("person1", person1);
// console.log("person2", person2);

// -------------------------

// const person1 = {
//     name: "Likhilesh",
//     height: 2, //meters
//     weight: 100, //kg
//     college: "LPU",
//     rollNumber: "1234",
// };

// // ---------- De-structuring
// const { weight, college } = person1;
// console.log("🟡 : --> :", weight, college);

// -------------------------------------

const person1 = {
    name: "Likhilesh",
    height: 2, //meters
    weight: 100, //kg
    college: "LPU",
    rollNumber: "1234",
    marks: {
        EVS: 42,
        maths: 25,
    },
};

const person2 = { ...person1 };

person2.name = "Rajesh";

person2.marks.maths = 49;

console.log("person1", person1);
console.log("person2", person2);
