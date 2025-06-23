const searchQuery = window.location.search;
console.log("🟡 : searchQuery:", searchQuery);
const queryParts = searchQuery.split("=");
console.log("🟡 : queryParts:", queryParts);
const videoId = queryParts[1];
console.log("🟡 : videoId:", videoId);

const iframeElem = document.getElementsByTagName("iframe")[0];
iframeElem.setAttribute("src", `https://youtube.com/embed/${videoId}`);
