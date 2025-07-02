console.log("------ ! Loading app.js file ---------");

const textHelper = require("./text-formatter.js"); // import

const resp = textHelper.getCamelCaseText("hello world in node js");

console.log("--------->", resp);
