// const request = fetch();
// request.then().catch();

fetch()
    .then((resp) => {
        resp.json()
            .then((data) => {
                console.log(data);
            })
            .catch();
    })
    .catch();

fetch()
    .then((resp) => {
        return resp.json();
    })
    .catch()
    .then((data) => {
        console.log(data);
    })
    .catch();
