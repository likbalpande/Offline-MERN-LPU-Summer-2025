// re-rendering --> re-run the function

import { useState } from "react";

// component is re-rendered only when the state change OR props change

// state variables are given to use by react
// if the value the state variable change --> state of the component has changed
const SearchBox = () => {
    // let searchText = "Anuj";
    const [monitor, remote] = useState();

    const handleSearch = (e) => {
        // searchText = e.target.value;
        // console.log(searchText);
        remote(e.target.value); // Noted!
        console.log(monitor);
    };

    return (
        <div>
            <input type="text" onKeyUp={handleSearch} />
            {/* <h3>{searchText}</h3> */}
            <h3>{monitor}</h3>
        </div>
    );
};

export { SearchBox };
