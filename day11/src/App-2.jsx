import { useEffect, useState } from "react";

const App = () => {
    const [timeInSec, setTimeInSec] = useState(0); // 0 ---> 1 ---> 2
    console.log("🟡 : timeInSec:", timeInSec); // 0 ---> 1 ---> 2

    useEffect(() => {
        console.log("========= setting interval =====");

        setInterval(() => {
            setTimeInSec((prevTime) => {
                return prevTime + 1;
            });
        }, 5000); // --> browser (call this function after every 1 second)
        // --> OK --> id :: st1

        // cleanup function (react will call this function when the component is UN-MOUNTING)
        return () => {
            console.log("cleanup function running....");
        };
    }, []); // useEffect will only run on "initial render" ?? why ?? Because dependency array is empty "[ ]"

    return (
        <div>
            <h2>00:00:{timeInSec}</h2>
        </div>
    );
};

export default App;
