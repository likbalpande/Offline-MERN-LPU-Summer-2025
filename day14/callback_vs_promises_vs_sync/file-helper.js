// const fs = require("fs");

// const saveDataToFile = (data, pathOfFile) => {
//     // string --> binary (UTF-8 / ascii),  binary, buffer
//     const text = JSON.stringify(
//         {
//             data1: data,
//             data2: data,
//             data3: data,
//             data4: data,
//             data5: data,
//             data6: data,
//             data8: data,
//             data7: data,
//             data9: data,
//         },
//         null,
//         4
//     );
//     fs.writeFileSync(pathOfFile, text, "UTF-8");
// };

const fsPromises = require("fs/promises");

const saveDataToFile = async (data, pathOfFile) => {
    // string --> binary (UTF-8 / ascii),  binary, buffer
    const text = JSON.stringify(data, null, 4);
    await fsPromises.writeFile(pathOfFile, text, "UTF-8");
};

module.exports = {
    saveDataToFile,
};
