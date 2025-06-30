import { useEffect, useRef, useState } from "react";

const App = () => {
    const [timeInSec, setTimeInSec] = useState(0); // if you want value to be stored + rendered on the screen properly
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const intervalRef = useRef(null); // if you want value to be stored + but do not care about value on screen

    useEffect(() => {
        console.log("========= setting interval =====");

        intervalRef.current = setInterval(() => {
            setTimeInSec((prevTime) => {
                return prevTime + 1;
            });
        }, 1000);
    }, []);

    const handlePause = () => {
        const intervalId = intervalRef.current;
        clearInterval(intervalId);

        setIsTimerRunning(false);
    };

    const handlePlay = () => {
        if (!isTimerRunning) {
            intervalRef.current = setInterval(() => {
                setTimeInSec((prevTime) => {
                    return prevTime + 1;
                });
            }, 1000);

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
