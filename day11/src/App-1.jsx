import { useEffect, useState } from "react";

// state change --> re-render (re-run)
const App = () => {
    // async await is just a wrapper on then() catch()

    // const getData = () => {
    //     const response = fetch("https://dummyjson.com/users");

    //     response
    //         .then((resp) => {
    //             const pr2 = resp.json();
    //             return pr2;
    //         })
    //         .catch((err) => {
    //             console.log("error:", err.message);
    //         })
    //         .then((data) => {
    //             console.log("data", data);
    //         });
    // };

    const [usersList, setUsersList] = useState([]); // [ {}, {}, ... ]
    console.log("--- START ---", usersList);

    const getData = async () => {
        console.log("!!!!!!!!!!!!!!!!!! inside getData!!!!!!");
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        console.log("data --->", data);
        const { users } = data;

        setUsersList(users);
        // setUsersList(() => {
        //     return users;
        // }); // noted!!
    };

    console.log("--- before getData call ---");

    // getData(); // I want to call this getData only on "initial render"

    console.log("getData called");

    useEffect(() => {
        getData();
    }, []); // this is called after "return" happens
    // empty dependency array
    //    --> callback function will be called only once (on FIRST render / initial render)

    return (
        <div>
            <h1>Hello</h1>
            {usersList.map((elem) => {
                return (
                    <div key={elem.id}>
                        <h3>{elem.firstName}</h3>
                    </div>
                );
            })}
        </div>
    );
};

export default App;
