const { cFetch } = require("./network-helper");
const { saveDataToFile } = require("./file-helper.js");

const getRecipes1 = async () => {
    try {
        console.time("getRecipes1");
        const response = await cFetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log("total recipes -->", data.total);
        saveDataToFile(data, "./recipes.json");
        console.timeEnd("getRecipes1");
    } catch (err) {
        console.log("----------------------");
        console.log("Error occurred while getting recipes -->", err.message);
        console.log("----------------------");
    }
};

// const getRecipes2 = async () => {
//     try {
//         console.time("getRecipes2");
//         const response = await cFetch("https://dummyjson.com/products");
//         const data = await response.json();
//         console.log("total recipes -->", data.total);
//         saveDataToFile(data, "./recipes.json");
//         console.timeEnd("getRecipes2");
//     } catch (err) {
//         console.log("----------------------");
//         console.log("Error occurred while getting recipes -->", err.message);
//         console.log("----------------------");
//     }
// };

// const getRecipes3 = async () => {
//     try {
//         console.time("getRecipes3");
//         const response = await cFetch("https://dummyjson.com/products");
//         const data = await response.json();
//         console.log("total recipes -->", data.total);
//         saveDataToFile(data, "./recipes.json");
//         console.timeEnd("getRecipes3");
//     } catch (err) {
//         console.log("----------------------");
//         console.log("Error occurred while getting recipes -->", err.message);
//         console.log("----------------------");
//     }
// };

// const getRecipes4 = async () => {
//     try {
//         console.time("getRecipes4");
//         const response = await cFetch("https://dummyjson.com/products");
//         const data = await response.json();
//         console.log("total recipes -->", data.total);
//         saveDataToFile(data, "./recipes.json");
//         console.timeEnd("getRecipes4");
//     } catch (err) {
//         console.log("----------------------");
//         console.log("Error occurred while getting recipes -->", err.message);
//         console.log("----------------------");
//     }
// };

// const getRecipes5 = async () => {
//     try {
//         console.time("getRecipes5");
//         const response = await cFetch("https://dummyjson.com/products");
//         const data = await response.json();
//         console.log("total recipes -->", data.total);
//         saveDataToFile(data, "./recipes.json");
//         console.timeEnd("getRecipes5");
//     } catch (err) {
//         console.log("----------------------");
//         console.log("Error occurred while getting recipes -->", err.message);
//         console.log("----------------------");
//     }
// };
// const getRecipes6 = async () => {
//     try {
//         console.time("getRecipes6");
//         const response = await cFetch("https://dummyjson.com/products");
//         const data = await response.json();
//         console.log("total recipes -->", data.total);
//         saveDataToFile(data, "./recipes.json");
//         console.timeEnd("getRecipes6");
//     } catch (err) {
//         console.log("----------------------");
//         console.log("Error occurred while getting recipes -->", err.message);
//         console.log("----------------------");
//     }
// };

// const getRecipes7 = async () => {
//     try {
//         console.time("getRecipes7");
//         const response = await cFetch("https://dummyjson.com/products");
//         const data = await response.json();
//         console.log("total recipes -->", data.total);
//         saveDataToFile(data, "./recipes.json");
//         console.timeEnd("getRecipes7");
//     } catch (err) {
//         console.log("----------------------");
//         console.log("Error occurred while getting recipes -->", err.message);
//         console.log("----------------------");
//     }
// };

// const getRecipes8 = async () => {
//     try {
//         console.time("getRecipes8");
//         const response = await cFetch("https://dummyjson.com/products");
//         const data = await response.json();
//         console.log("total recipes -->", data.total);
//         saveDataToFile(data, "./recipes.json");
//         console.timeEnd("getRecipes8");
//     } catch (err) {
//         console.log("----------------------");
//         console.log("Error occurred while getting recipes -->", err.message);
//         console.log("----------------------");
//     }
// };

// const getRecipes9 = async () => {
//     try {
//         console.time("getRecipes9");
//         const response = await cFetch("https://dummyjson.com/products");
//         const data = await response.json();
//         console.log("total recipes -->", data.total);
//         saveDataToFile(data, "./recipes.json");
//         console.timeEnd("getRecipes9");
//     } catch (err) {
//         console.log("----------------------");
//         console.log("Error occurred while getting recipes -->", err.message);
//         console.log("----------------------");
//     }
// };
// const getRecipes10 = async () => {
//     try {
//         console.time("getRecipes10");
//         const response = await cFetch("https://dummyjson.com/products");
//         const data = await response.json();
//         console.log("total recipes -->", data.total);
//         saveDataToFile(data, "./recipes.json");
//         console.timeEnd("getRecipes10");
//     } catch (err) {
//         console.log("----------------------");
//         console.log("Error occurred while getting recipes -->", err.message);
//         console.log("----------------------");
//     }
// };

console.time("GEC");

getRecipes1();
// getRecipes2();
// getRecipes3();
// getRecipes4();
// getRecipes5();
// getRecipes6();
// getRecipes7();
// getRecipes8();
// getRecipes9();
// getRecipes10();

console.timeEnd("GEC");
