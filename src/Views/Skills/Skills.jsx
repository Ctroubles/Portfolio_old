import style from "./Skills.module.css"
import Sphere from "./Components/Sphere3D/Sphere"
import LetterAnimated from "./Components/LetterAnimated/LetterAnimated";
import { useEffect, useState } from "react";




const Skills =  ({currentView})=>{

    const sentence1 = "Mis tecnologías:";
    const [animationStatus, setAnimationStatus] = useState(false)

    useEffect(()=>{
        if (currentView === 1) setAnimationStatus(true)
    },[currentView])

    return(
        <div id={style.Skills}>
            <div id={style.content}>
                <div>
                     <div id={style.sentence}>
                        {
                            sentence1.split("").map((letter,index)=>(
                                                    (<LetterAnimated key={index} letter={letter} contador={index+1} currentView={currentView} callerView={1} />)
                                            ))
                                                 
                                    
                        }
                        </div>
                        <p id={animationStatus?style.timeToAnimate:undefined}> 
                            Tengo experiencia y manejo una variedad de habilidades y herramientas que me permiten crear productos de software. Además, me estoy familiarizando con React Native y Angular. Debido a mi interés en inteligencia artificial, a futuro me gustaría profundizar en Python y sus frameworks, como TensorFlow, PyTorch, Keras, entre otros.
                        </p>
                </div>

            </div>
            <div id={style.sphereContainer} className={animationStatus?style.animationActive:undefined}>
                <Sphere/>
            </div>

        </div>
    )
}; 

export default Skills;