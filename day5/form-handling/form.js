const title = document.getElementById("greetings");

const handleUserName = (e) => {
    // console.log("typed");
    // console.log("----");
    console.log(e);

    const elem = e.target;
    console.log(elem.value);
    title.innerText = `Hello ${elem.value}!`;
};

const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    // const username = e.target[0].value;
    // const email = e.target[1].value;
    // const password = e.target[2].value;

    const username2 = e.target.usernameTemp.value;
    const email2 = e.target.baseEmail.value;
    const password2 = e.target.abcdPassword.value;

    if (!email2.endsWith("@lpu.in")) {
        alert("Please use your LPU email id");
    } else {
        // call the API
        // send the data --> register the student
    }
};
