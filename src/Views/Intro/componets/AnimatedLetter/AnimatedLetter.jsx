import {motion, useAnimationControls} from "framer-motion/dist/framer-motion";
import { useEffect, useState } from "react";
import style from "./AnimatedLetter.module.css"

const AnimatedLetter = ({letter, contador})=>{
    const controls = useAnimationControls();
    const [isPlaying, setIsPlaying] = useState(false);

    const rubberBand =()=>{
        controls.start({
            transform: [
              "scale3d(1, 1, 1)",
              "scale3d(1.3, " + (0.45 + 0.55 * Math.sin(Math.PI / 6)) + ", 1)",
              "scale3d(0.7, " + (1.6 - 0.6 * Math.sin(Math.PI / 3)) + ", 1)",
              "scale3d(1.2, " + (0.6 + 0.4 * Math.sin(Math.PI / 2)) + ", 1)",
              "scale3d(0.8, " + (1.2 - 0.2 * Math.sin(2 * Math.PI / 3)) + ", 1)",
              "scale3d(1, 1, 1)"
            ],
            transition:{
              times: [0, .35, .5, .65, .8, .9],
              duration: .9,
              ease: ["easeOut", "bounce", "easeOut", "bounce", "easeOut", "bounce"],
              damping: 5,
              stiffness: 500
            }
          });
        setIsPlaying(true)
    }

    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        if (contador) {
            const timeoutId = setTimeout(() => {
                setIsAnimated(true);
            }, Math.floor(90*contador));
            return () => clearTimeout(timeoutId);
        }

    }, []);
  

    return(
            <motion.span 
            animate={controls}
            onMouseOver={()=>{
                    if(!isPlaying)
                    rubberBand()
                }
            }
            onAnimationComplete={()=> setIsPlaying(false)}
            id={`${style.spans}`}
            className={`${isPlaying?style.active:undefined} ${isAnimated ? style.isAnimated : ''}`}>
              {letter}
            </motion.span>
    )
};


export default AnimatedLetter;