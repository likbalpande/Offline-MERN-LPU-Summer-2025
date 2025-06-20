console.log("START");

const timeDelayInMS = 10000;

const callbackFunc = () => {
    console.log("Hello");
};

// window.setTimeout(callbackFunc, timeDelayInMS);
window.setInterval(callbackFunc, timeDelayInMS);

console.log("END");
