// commonjs modules
console.log("------ ! Loading text-formatter.js file ---------");

const getCapitalizedText = (txt) => {
    const words = txt.split(" ");
    const resArr = words.map((elem) => {
        const firstChar = elem[0].toUpperCase(); //g
        const remainingWord = elem.slice(1).toLowerCase(); //OOD
        return `${firstChar}${remainingWord}`; // `Good`
    });
    return resArr.join(" ");
};

const getCamelCaseText = (txt) => {
    const words = txt.split(" ");
    const resArr = words.map((elem, idx) => {
        if (idx !== 0) {
            const firstChar = elem[0].toUpperCase(); //g
            const remainingWord = elem.slice(1).toLowerCase(); //OOD
            return `${firstChar}${remainingWord}`; // `Good`
        } else {
            return elem.toLowerCase();
        }
    });
    return resArr.join("");
};

console.log("------ ! Exporting the exports from text-formatter.js file ---------");

module.exports = {
    getCapitalizedText: getCapitalizedText,
    getCamelCaseText: getCamelCaseText,
}; //export
