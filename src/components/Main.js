import React, { useState, useEffect } from "react";
import RQueenAlice from './RQueen-Alice';
import Foreground1 from './Foreground1';
import Foreground2 from './Foreground2';
import Background1 from './Background1';
import Background2 from './Background2';

const Main = () => {
    const pbRate = useState(1);
   
    const updatePlaybackRate1 = () => {
        if (pbRate[0] <= 11) {
            pbRate[1](pbRate[0] * 1.1);
        }
    }
    console.log(pbRate[0])

    useEffect(()=>{setInterval(()=>{
        var currentRate = pbRate[0];
        pbRate[1](currentRate*0.9)
        console.log(pbRate[0])
        console.log(`current Rate ${currentRate}`)
    },10000)})
    

    return (
        <div onClick={updatePlaybackRate1}>
            <div className="sky"></div>
            <div className="earth">
                <RQueenAlice pbRate={pbRate[0]}/>
            </div>
            <Foreground1 pbRate={pbRate[0]}/>
            <Foreground2 pbRate={pbRate[0]}/>
            <Background1 pbRate={pbRate}/>
            <Background2 pbRate={pbRate[0]}/>
        </div>
    )
}


export default Main;