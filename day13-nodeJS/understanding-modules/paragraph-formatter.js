const textHelper = require("./text-formatter.js");

function formatParagraph(text) {
    const sentences = text.split(".");
    const capitalizedSentences = sentences.map((sentence) => {
        return textHelper.getCapitalizedText(sentence);
    });
    return capitalizedSentences.join(".\n");
}

module.exports = {
    formatParagraph,
};
