const fsPromises = require("node:fs/promises");

console.log("\n-----FILE START----\n");

const main = async () => {
    console.log("\n-----Start----\n");

    try {
        const response1 = await fsPromises.readFile("./temp1.txt", "utf-8");
        console.log(response1);
    } catch (err) {
        console.log("cannot open file temp.txt -->", err.message);
    }

    console.log("\n-------- MID ---------\n");

    try {
        const response2 = await fsPromises.readFile("./student.txt", "utf-8");
        console.log(response2);
    } catch (err) {
        console.log("cannot open file student.txt -->", err.message);
    }

    console.log("\n------END----\n");
};

main();

console.log("\n-----FILE END----\n");
