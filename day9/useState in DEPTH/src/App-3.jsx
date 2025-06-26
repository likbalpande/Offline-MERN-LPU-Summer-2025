import { useState } from "react";

const App = () => {
    const [monitor, remote] = useState(0);
    console.log(monitor);

    // const handleClick = () => {
    //     remote(monitor + 1);
    //     remote(monitor + 1);
    //     console.log(monitor);
    // };

    // const handleClick = () => {
    //     remote(monitor + 1);
    //     remote(monitor + 2);
    //     console.log(monitor);
    // };

    const handleClick = () => {
        remote(monitor + 1);
        remote(monitor + 2);
        remote(monitor + 1);
        console.log(monitor);
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            <h2>{monitor}</h2>
        </div>
    );
};

export default App;
