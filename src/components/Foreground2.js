import React, { useEffect } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";


const Foreground2 = ({pbRate}) => {
    const { ref, playState, getAnimation } = useWebAnimations({
        keyframes: {
            transform: ['translateX(100%)', 'translateX(-100%)']
        },
        timing: {
            duration: 12000,
            iterations: Infinity
        },
    })

    useEffect(()=>{
        getAnimation().updatePlaybackRate(pbRate)
    })
    return (
        <div ref={ref} className="scenery" id="foreground2">
            <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
            <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
        </div>
    )
}

export default Foreground2;