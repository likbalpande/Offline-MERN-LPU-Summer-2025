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

    const handleIncrement = () => {
        remote((prev) => {
            const newValue = prev + 1;
            localStorage.setItem("counter-value", newValue);
            return newValue;
        });
    };

    const handleDecrement = () => {
        remote((prev) => {
            const newValue = prev - 1;
            localStorage.setItem("counter-value", newValue);
            return newValue;
        });
    };

    const handleReset = () => {
        // remote(() => {
        //     const newValue = 0;
        //     localStorage.setItem("counter-value", newValue);
        //     return newValue;
        // });
        remote(0);
        localStorage.setItem("counter-value", 0);
    };

    return (
        <div>
            <button onClick={handleIncrement}>++</button>
            <button onClick={handleDecrement}>--</button>
            <button onClick={handleReset}>00</button>
            <h2>{monitor}</h2>
        </div>
    );
};

export default App;
