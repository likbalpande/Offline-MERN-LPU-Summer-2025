import { useEffect, useState } from "react";

const App = () => {
    const [timeInSec, setTimeInSec] = useState(0);
    console.log("🟡 : timeInSec:", timeInSec);

    useEffect(() => {
        console.log("========= setting interval =====");

        setInterval(() => {
            setTimeInSec((prevTime) => {
                return prevTime + 1;
            });
        }, 1000);
    }, []);

    return (
        <div>
            <h2>00:00:{timeInSec}</h2>
        </div>
    );
};

export default App;
