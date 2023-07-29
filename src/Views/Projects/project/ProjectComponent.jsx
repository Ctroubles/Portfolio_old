import style from "./Project_component.module.css";
import ImageTransition from "../ImgTransition/ImgTransition";
import { useEffect, useRef, useState } from "react";
import { getRandomNumber } from "../../../utils";
import LetterAnimated from "../../Skills/Components/LetterAnimated/LetterAnimated";




const Project = ({DATA={}, NUMBER, CURRENT_FOCUS}) =>{

    const onFocusRef = useRef(false)
    const selectedTechs = useRef([])


    const [activeTec, setActiveTec] = useState()
    const activeRef = useRef(null)
    const [descrDevices, setDescrDevices] = useState(null)
    const [introTechs, setIntroTechs] = useState(
        DATA.techs?.map(e=>null) || []
    )

    useEffect(()=>{
        if (NUMBER.includes(CURRENT_FOCUS)) {
            onFocusRef.current = true;
            setTimeout(() => {
                setDescrDevices(true)
            }, 1000);
        }else{
            onFocusRef.current = false;
            setTimeout(() => {
                setDescrDevices(null)
            }, 1000);
        }
      },[CURRENT_FOCUS])


    useEffect(() => {

        let interval;

        if (DATA.techs?.length && NUMBER.includes(CURRENT_FOCUS)) {
            const techLenght = DATA.techs.length;
            const maxNum = techLenght <= 1 ? 2 : techLenght

                interval = setInterval(() => {
                if (!onFocusRef.current)  clearInterval(interval)
                const random = getRandomNumber(1, maxNum, activeRef.current);
                setActiveTec(random)
            }, 3500);   
            
        }

        return () => clearInterval(interval);

      }, [DATA.techs,CURRENT_FOCUS]);


      useEffect(()=>{
        activeRef.current = activeTec
      },[activeTec])


      useEffect(() => {

        if (NUMBER.includes(CURRENT_FOCUS)) {
    
            const interval = setInterval(() => {
                if (!onFocusRef.current) {
                    clearInterval(interval);
                    return;
                }
    
                const newArray = introTechs.map((_, index)=> {
                    if (!selectedTechs.current.includes(index)) {
                        return false;
                    }else{
                        return true;
                    }
                })

                const availableIndices = introTechs.map((_, index) => index)
                    .filter((index) => !selectedTechs.current.includes(index));
    
                if (availableIndices.length === 0) {
                    clearInterval(interval);
                    return;
                }
    
                const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
                newArray[randomIndex] = true;
                selectedTechs.current.push(randomIndex);
                setIntroTechs(newArray);
            }, 350);
    
            return () => {
                clearInterval(interval);
            };
        } else {
            setIntroTechs(DATA.techs?.map(() => null) || []);
            selectedTechs.current = [];
        }
    
    }, [onFocusRef.current, CURRENT_FOCUS]);



    return(
        <div id={style.projectsCards} >
            <div>            
                <main>
                    <div className={style.container}>
                        <div className={NUMBER.includes(CURRENT_FOCUS)?style.active:undefined}>
                            <div className={style.litDevices}>
                                <ImageTransition SHOW={NUMBER.includes(CURRENT_FOCUS)} images={DATA.phone} PB={"125%"}/>
                            </div>
                            <div className={`${style.deviceDesctiption}`}>
                                {
                                    descrDevices ? (
                                        <div >
                                            {
                                                "MOBILE VIEW".split("").map( (letter, index) =>(
                                                        <LetterAnimated key={index} letter={letter} contador={index+1} currentView={3}   callerView={3}/>
                                                    )            
                                                )
                                            }
                                        </div>
                                    ) : <></>
                                }
                            </div>
                        </div>
                        <div className={NUMBER.includes(CURRENT_FOCUS)?style.active:undefined}>
                            <div className={style.imgComputerContainer}>
                                <ImageTransition SHOW={NUMBER.includes(CURRENT_FOCUS)} images={DATA.pc} PB={"100%"}/>
                            </div>
                            <div className={`${style.deviceDesctiption}`}>
                                {
                                    descrDevices ? (
                                        <div >
                                            {
                                                "PC VIEW".split("").map( (letter, index) =>(
                                                        <LetterAnimated key={index} letter={letter} contador={index+1} currentView={3}   callerView={3}/>
                                                    )            
                                                )
                                            }
                                        </div>
                                    ) : <></>
                                }                               
                            </div>
                        </div>
                        <div className={NUMBER.includes(CURRENT_FOCUS)?style.active:undefined}>
                            <div className={style.litDevices}>
                                <ImageTransition SHOW={NUMBER.includes(CURRENT_FOCUS)} images={DATA.tablet} PB={"125%"}/>
                            </div>
                            <div className={`${style.deviceDesctiption}`}>
                                <div>
                                {
                                    descrDevices ? (
                                        <div >
                                            {
                                                "TABLET VIEW".split("").map( (letter, index) =>(
                                                        <LetterAnimated key={index} letter={letter} contador={index+1} currentView={3}   callerView={3}/>
                                                    )            
                                                )
                                            }
                                        </div>
                                    ) : <></>
                                }
                                </div>
                            </div>
                        </div>
                    </div>                    
                </main>
                <div id={style.botSection}>
                    <div>
                        <div>
                            <div id={style.tec_logos_section}>

                                {
                                    
                                    DATA.techs && DATA.techs.map((e,i)=> (
                                        <a key={i} href={e.link} target="blank" title={e.tittle} id={style.tech} className={introTechs[i]?style.active:undefined}>
                                            <div className={activeTec=== i + 1? style.active:undefined}><img src={e.src} alt={e.tittle}/></div>
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div id={style.footer}>
                        <div className={NUMBER.includes(CURRENT_FOCUS)?style.active:undefined}>
                            <a href={DATA.URL} target="blank">Ir a ver</a>
                        </div>
                    </div>
                </div>              
            </div>
       </div>
    )
};

export default Project;