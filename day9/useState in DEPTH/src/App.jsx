import { useState } from "react";

const App = () => {
    const [arr, setArr] = useState(["kiwi", "banana"]);
    console.log("new array ---->", arr);

    const handleAddFruit = () => {
        // const temp = [...arr];
        // temp.push("Mango");
        // console.log("🟡🟡 : arr:", temp);
        // setArr(temp);
        setArr((prev) => {
            const temp = [...prev];
            temp.push("Mango");
            console.log("🟡🟡 : temp:", temp);
            return temp;
        });
    };

    return (
        <div>
            <ul>
                {arr.map((elem) => {
                    return <li>{elem}</li>;
                })}
            </ul>
            <button onClick={handleAddFruit}>Add Mango</button>
        </div>
    );
};

export default App;
