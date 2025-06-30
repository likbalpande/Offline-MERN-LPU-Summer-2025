// const student1 = {
//     name: 'Likhilesh',
//     subjects: ['CN', 'OS', "DBMS"],
// }

// const student2 = student1; //shallow copy
// student2.name = "Manoj"

// console.log(student1)
// console.log(student2)

// -----------------------------------------
// const student1 = {
//     name: 'Likhilesh',
//     city: 'Delhi',
//     age: '22',
//     subjects: ['CN', 'OS', "DBMS"],
// }

// const student2 = {...student1}; //different copy
// student2.name = "Manoj"
// student2.city = "Kanpur";
// student2.subjects[0] = 'CP';

// console.log(student1)
// console.log(student2)

// -----------------------------------------
const student1 = {
    name: "Likhilesh",
    city: "Delhi",
    age: "22",
    subjects: ["CN", "OS", "DBMS"],
};

const student2 = { ...student1, subjects: [...student1.subjects] }; // DEEP copy
student2.name = "Manoj";
student2.city = "Kanpur";
student2.subjects[0] = "CP";

console.log(student1);
console.log(student2);
