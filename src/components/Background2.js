import React, { useEffect } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";


const Background2 = ({pbRate}) => {
    const { ref, playState, getAnimation } = useWebAnimations({
        keyframes: {
            transform: ['translateX(100%)', 'translateX(-100%)']
        },
        timing: {
            duration: 36000,
            iterations: Infinity
        },
    })

    useEffect(()=>{
        getAnimation().updatePlaybackRate(pbRate)
    })
    
    return (
        <div ref={ref} className="scenery" id="background2">
            <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />
            <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
            <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
        </div>
    )
}

export default Background2;