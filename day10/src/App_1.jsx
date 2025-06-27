import { useState } from "react";

const arr = ["kiwi", "banana", "pineapple"];

const App = () => {
    const [editIndex, setEditIndex] = useState(-1);
    console.log("🟡 : editIndex:", editIndex);

    return (
        <div>
            {arr.map((elem, idx) => {
                return (
                    <div style={{ backgroundColor: idx === editIndex ? "red" : "green" }}>
                        <button
                            onClick={() => {
                                setEditIndex(idx);
                            }}
                        >
                            Edit
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default App;

// {idx === editIndex ? <input type="text" /> : <h1>{elem}</h1>}
