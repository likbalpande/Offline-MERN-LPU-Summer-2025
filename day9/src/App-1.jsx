// function re-run ===> component re-rendering
// react re-render's component EITHER on "state" change OR on "props" change

import { useState } from "react";

// hook ==> function given to use by react

const App = () => {
    // let searchText = "Arun";
    const [monitor, remote] = useState();

    const handleSearch = (e) => {
        const value = e.target.value;
        // searchText = value;
        remote(value);
        console.log(monitor);
    };

    return (
        <div>
            <input type="text" onKeyUp={handleSearch} />
            <h2>{monitor}</h2>
        </div>
    );
};

export default App;
