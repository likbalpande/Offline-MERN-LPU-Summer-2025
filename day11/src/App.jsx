import { useEffect, useState } from "react";

const App = () => {
    const [timeInSec, setTimeInSec] = useState(0);
    const [laps, setLaps] = useState([]);
    const [isTimerRunning, setIsTimerRunning] = useState(true);

    useEffect(() => {
        console.log("Timer running state changed", isTimerRunning);

        let intervalId = null;
        if (isTimerRunning) {
            intervalId = setInterval(() => {
                // setTimeInSec((prev) => prev + 1);
                setTimeInSec((prev) => {
                    return prev + 1;
                });
            }, 5); //st1
        }

        return () => {
            console.log("Cleaning up interval...");
            clearInterval(intervalId);
        };
    }, [isTimerRunning]);

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

    const handleLap = () => {
        console.log("Lap time", timeInSec);
        setLaps((prev) => {
            const temp = [...prev];
            temp.push(timeInSec);
            return temp;
        });
    };

    const handleReset = () => {
        setTimeInSec(0);
        setIsTimerRunning(false);
    };

    const hours = Math.floor(timeInSec / 3600) // derived state variable
        .toString()
        .padStart(2, "0");

    const minutes = Math.floor((timeInSec % 3600) / 60)
        .toString()
        .padStart(2, "0");

    const seconds = (timeInSec % 60).toString().padStart(2, "0");

    return (
        <div>
            <h2>
                {hours}:{minutes}:{seconds}
            </h2>
            {isTimerRunning ? <button onClick={handlePause}>PAUSE</button> : <button onClick={handlePlay}>PLAY</button>}
            <button onClick={handleLap}>LAP</button>
            <button onClick={handleReset}>RESET</button>
            <div>
                {laps.map((elem, idx) => {
                    return <p key={idx}>{elem}</p>;
                })}
            </div>
        </div>
    );
};

export default App;
