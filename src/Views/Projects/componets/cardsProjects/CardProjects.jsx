import { useEffect, useState } from "react";
import style from "./CardsProjects.module.css";


const CardProjects = ({link, img, name, details, contador,currentView}) =>{

    const [statusDetail, setStatusDetails] = useState(false)

    const [isAnimated, setIsAnimated] = useState(false);


    const handleCardClick = (event) => {
        event.stopPropagation();
        event.preventDefault();
        setStatusDetails(!statusDetail);
    };

    const handleLinkClick = (event) => {
        event.stopPropagation();
    };



    useEffect(() => {
        if (currentView===2) {
            const timeoutId = setTimeout(() => {
                setIsAnimated(true);
            }, Math.floor(500*contador));
            return () => clearTimeout(timeoutId);
        }

    }, [currentView]);

    return(
        <div id={style.projectsCards} className={isAnimated?style.enEcena:undefined}>
        <div id={style.contentCards} className="noSrcoll" >
           <span  className="noSrcoll" >
               <div id={style.imgContainer} data-text={details} className="noSrcoll" >
                    <label onClick={handleCardClick} id={style.label} style={statusDetail?{display:"flex"}:undefined} className="noSrcoll">
                        <div className="noSrcoll" >
                            <a href={link} rel="noreferrer" target="blank" onClick={handleLinkClick} className="noSrcoll" >
                                    Ir a ver
                            </a>
                        </div>
                        <p className="noSrcoll" >{details}</p>
                        
                    </label>
                   <img onClick={handleCardClick} src={img} alt={name}  className="noSrcoll" />
               </div>
           </span>
        </div>
       <p>{name}</p>
   </div>
    )
};

export default CardProjects;