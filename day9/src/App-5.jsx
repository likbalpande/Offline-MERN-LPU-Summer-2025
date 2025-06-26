import { useState } from "react";

const App = () => {
    const [monitor, remote] = useState(() => {
        const val = localStorage.getItem("counter-value");
        if (val) {
            return parseInt(val);
        } else {
            return 0;
        }
    });
    console.log(monitor);

    const handleClick = () => {
        remote((prev) => {
            const newValue = prev + 1;
            localStorage.setItem("counter-value", newValue);
            return newValue;
        });
    };

    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
            <h2>{monitor}</h2>
        </div>
    );
};

export default App;
