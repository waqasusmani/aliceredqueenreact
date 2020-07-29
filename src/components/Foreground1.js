import React, { useEffect } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";


const Foreground1 = ({pbRate}) => {
    const { ref, playState, getAnimation } = useWebAnimations({
        keyframes: {
            transform: ['translateX(100%)', 'translateX(-100%)']
        },
        timing: {
            duration: 12000,
            iterations: Infinity,
            
        },
    })
    useEffect(()=>{
        getAnimation().updatePlaybackRate(pbRate)
    })
    return (
        <div ref={ref} className="scenery" id="foreground1">
            <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
        </div>
    )
}

export default Foreground1;