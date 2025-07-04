const fsPromises = require("fs/promises");
const { v4: uuidv4 } = require("uuid");

const saveArrayToFile = async (arr, filePath) => {
    try {
        const stringifiedArr = JSON.stringify(arr, null, 4);
        await fsPromises.writeFile(filePath, stringifiedArr, "utf-8");
    } catch (err) {
        // worst and unprepared case
        console.error("🔴 Error saving the file ::", err.message);
        return null;
    }
};

const saveObjectToArrayInFile = async (obj, filePath) => {
    const arr = await getAllDataFromArrayFromFile(filePath);
    obj.id = uuidv4();
    arr.push(obj);
    await saveArrayToFile(arr, filePath);
};

const getAllDataFromArrayFromFile = async (filePath) => {
    // read the file
    // try to convert it into JS object using JSON.parse()
    // if there is any error --> file is empty
    //                       --> return empty array
    // if it is able to parse --> return the parsed array
    try {
        const txt = await fsPromises.readFile(filePath, "utf-8");
        try {
            const data = JSON.parse(txt);
            return data;
        } catch {
            console.warn("🟡 The file is corrupted or not a valid JSON format. Resetting it!");
            await fsPromises.writeFile(filePath, "[]", "utf-8");
            return [];
        }
    } catch (err) {
        if (err.code === "ENOENT") {
            console.warn("🟡 Creating file...");
            await fsPromises.writeFile(filePath, "[]", "utf-8");
            return [];
        }
        // worst and unprepared case
        console.error("🔴 Error reading the file ::", err.message);
        return null;
    }
};

const editObjectFromArrayFromFile = async (newObj, idx, filePath) => {
    // read the file
    // try to convert it into JS object using JSON.parse()
    // if there is any error --> file is empty
    //                       --> show the error in the console ---> object does not exists
    // if it is able to parse --> get the particular from array using index
    //                        --> change the object as you want
    //                        --> ::save to the file::
};
const deleteObjectFromArrayFromFile = async (idx, filePath) => {
    // read the file
    // try to convert it into JS object using JSON.parse()
    // if there is any error --> file is empty
    //                       --> show the error in the console ---> object does not exists
    // if it is able to parse --> delete the object from the array
    //                        --> ::save the new array to the file::
};

module.exports = {
    saveObjectToArrayInFile,
    getAllDataFromArrayFromFile,
    editObjectFromArrayFromFile,
    deleteObjectFromArrayFromFile,
};
