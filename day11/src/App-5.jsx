import { useEffect, useState } from "react";

const App = () => {
    const [timeInSec, setTimeInSec] = useState(0); // if you want value to be stored + rendered on the screen properly
    const [isTimerRunning, setIsTimerRunning] = useState(true);

    useEffect(() => {
        console.log("--- empty ---");
    }, []); // empty dependency array
    //         ---> this effect will run only on first-render / initial render

    useEffect(() => {
        console.log("Timer running state changed", isTimerRunning);
    }, [isTimerRunning]); // dependency array
    //                       ---> this effect will run only on first-render / initial render
    //                       ---> whenever the value of any variable inside dependency changes

    const handlePause = () => {
        if (isTimerRunning) {
            setIsTimerRunning(false);
        }
    };

    const handlePlay = () => {
        if (!isTimerRunning) {
            setIsTimerRunning(true);
        }
    };

    return (
        <div>
            <h2>00:00:{timeInSec}</h2>
            {isTimerRunning ? <button onClick={handlePause}>PAUSE</button> : <button onClick={handlePlay}>PLAY</button>}
        </div>
    );
};

export default App;
