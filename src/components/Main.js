import React, { useState, useEffect, useRef } from "react";
import RQueenAlice from './RQueen-Alice';
import Foreground1 from './Foreground1';
import Foreground2 from './Foreground2';
import Background1 from './Background1';
import Background2 from './Background2';

const Main = ({ pbRate }) => {


    console.log(`pbRate from Main: ${pbRate[0]}`)
    
    function updatePlaybackRate() {
        pbRate[1](pbRate[0]*1.1)
    }

    function useInterval(callback, delay) {
        const savedCallback = useRef();

        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    useInterval(() => {
        pbRate[1](pbRate[0] * 0.9)
    }, 5000)

    return (
        <div onClick={updatePlaybackRate}>
            <div className="sky"></div>
            <div className="earth">
                <RQueenAlice pbRate={pbRate[0]} />
            </div>
            <Foreground1 pbRate={pbRate[0]} />
            <Foreground2 pbRate={pbRate[0]} />
            <Background1 pbRate={pbRate[0]} />
            <Background2 pbRate={pbRate[0]} />
        </div>
    )
}


export default Main;