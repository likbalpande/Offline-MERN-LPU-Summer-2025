const waitForSomeTime = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 4000);
    });
};

const cFetch = async (url) => {
    await waitForSomeTime();
    return await fetch(url);
};

module.exports = {
    cFetch,
};
