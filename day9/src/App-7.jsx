import { useState } from "react";

const App = () => {
    const [searchText, setSearchText] = useState(() => {
        const val = localStorage.getItem("searchText");
        if (val) {
            return val;
        } else {
            return "arun";
        }
    });
    console.log(searchText);

    const handleSearch = (e) => {
        const val = e.target.value;
        localStorage.setItem("searchText", val);
        setSearchText(val);
    };

    return (
        <div>
            <input type="text" value={searchText} onChange={handleSearch} />
            <h2>{searchText}</h2>
        </div>
    );
};

export default App;
