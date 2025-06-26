import { useState } from "react";

const App = () => {
    const [editIndex, setEditIndex] = useState(-1);
    console.log("🟡 : editIndex:", editIndex);

    const [fruits, setFruits] = useState([
        {
            name: "Kiwi",
            color: "green",
            price: 600,
        },
        {
            name: "Banana",
            color: "yellow",
            price: 40,
        },
        {
            name: "Apple",
            color: "red",
            price: 200,
        },
        {
            name: "Mango",
            color: "yellow",
            price: 150,
        },
    ]);

    return (
        <div>
            {fruits.map((elem, idx) => {
                if (editIndex === idx) {
                    return (
                        <div>
                            <h1>Hello!</h1>
                        </div>
                    );
                } else {
                    return (
                        <div key={idx} style={{ backgroundColor: elem.color }}>
                            <h3>{elem.name}</h3>
                            <h4>{elem.color}</h4>
                            <h3>Rs. {elem.price}</h3>
                            <button
                                onClick={() => {
                                    setEditIndex(idx);
                                }}
                            >
                                EDIT
                            </button>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default App;
