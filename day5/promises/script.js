const request = window.fetch("https://dummyjson.com/products");
console.log("🟡 : request:", request);
console.log("🟡 : request:", request);

const successCb = (response) => {
    console.log("Response", response);
    const pr2 = response.json();

    pr2.then((data) => {
        renderUI(data);
    });
};

const errorCb = (err) => {
    alert("Unable to get products -->", err.message);
};

request.then(successCb).catch(errorCb);

const parentElem = document.getElementById("root");

const renderUI = (data) => {
    const { products } = data;

    products.forEach((element) => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
            <p>${element.title}</p>
            <img src="${element.thumbnail}" width='175'>
            <button onclick="handleShowItem(${element.id})">View</button>
        `;

        parentElem.appendChild(newDiv);
    });
};

const handleShowItem = (id) => {
    window.open(`./view.html?id=${id}`, "_self");
};
