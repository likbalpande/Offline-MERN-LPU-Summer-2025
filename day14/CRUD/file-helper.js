// medium (**)
const saveObjectToArrayInFile = async (obj, filePath) => {
    // read the file
    // try to convert it into JS object using JSON.parse()
    // if there is any error --> file is empty
    //                       --> put the object in new empty array
    // else push the object in the parsed array
    // ...
    // then convert the array to JSON and store the file
};

// easy (*)
const getAllDataFromArrayFromFile = async (filePath) => {
    // read the file
    // try to convert it into JS object using JSON.parse()
    // if there is any error --> file is empty
    //                       --> return empty array
    // if it is able to parse --> return the parsed array
};

// difficult (****)
const editObjectFromArrayFromFile = async (newObj, idx, filePath) => {
    // read the file
    // try to convert it into JS object using JSON.parse()
    // if there is any error --> file is empty
    //                       --> show the error in the console ---> object does not exists
    // if it is able to parse --> get the particular from array using index
    //                        --> change the object as you want
    //                        --> ::save to the file::
};

// difficult (***)
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
