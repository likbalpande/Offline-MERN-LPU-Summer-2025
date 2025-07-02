console.log("------ ! Loading app.js file ---------");

const username = "Likhilesh";

const textHelper = require("./text-formatter.js"); // import
const paraHelper = require("./paragraph-formatter.js"); // import

const resp = textHelper.getCamelCaseText("hello world in node js");

console.log("resp--------->", resp);
console.log("--------->username", username);

const resp2 = paraHelper.formatParagraph(
    `
        The promise APIs use the underlying Node.js threadpool to perform file system operations off the event loop thread. These operations are not synchronized or threadsafe. Care must be taken when performing multiple concurrent modifications on the same file or data corruption may occur.
    `
);

console.log("resp2--------->", resp2);
