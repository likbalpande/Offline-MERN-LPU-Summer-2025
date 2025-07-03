const fs = require("node:fs");

console.log("\n-----Start----\n");

const response1 = fs.readFileSync("./temp.txt", "utf-8");

console.log(response1);

console.log("\n-------- MID ---------\n");

const response2 = fs.readFileSync("./student.txt", "utf-8");

console.log(response2);

console.log("\n------END----\n");
