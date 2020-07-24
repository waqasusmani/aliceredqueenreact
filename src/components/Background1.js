import React, { useEffect } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";


const Background1 = ({pbRate}) => {
    const { ref, playState, getAnimation } = useWebAnimations({
        keyframes: {
            transform: ['translateX(100%)', 'translateX(-100%)']
        },
        timing: {
            duration: 36000,
            iterations: Infinity
        },
        // onReady: ({ playState, animate, animation }) => {
        //     setInterval(()=>{
        //         if(pbRate[0]>=0.40){
        //             animation.updatePlaybackRate(pbRate[0]/1.05);
        //             pbRate[1](pbRate[0]/1.05)
        //             console.log(pbRate[0])
        //         }

        //     },5000)
        //   },

    })

    useEffect(()=>{
        getAnimation().updatePlaybackRate(pbRate[0])
    })

    // setInterval(() => {
    //     if (pbRate[0] >= 0) {
    //         pbRate[1](pbRate[0] / 1.05)
    //         console.log(pbRate[0])
    // }
    // }, 5000)

    return (
        <div ref={ref} className="scenery" id="background1">
            <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
            <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
            <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
        </div>
    )
}

export default Background1;