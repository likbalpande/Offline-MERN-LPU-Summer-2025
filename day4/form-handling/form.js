const title = document.getElementById("greetings");

const handleUserName = (e) => {
    // console.log("typed");
    // console.log("----");
    // console.log(e);
    const elem = e.target;
    console.log(elem.value);
    title.innerText = `Hello ${elem.value}!`;
};
