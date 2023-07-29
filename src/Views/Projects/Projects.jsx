import style from "./Projects.module.css";
import PROJECT from "./project/ProjectComponent";
import LetterAnimated from "../Skills/Components/LetterAnimated/LetterAnimated";
import { useEffect, useState } from "react";
import arrow from "../../assets/general_icons/arrow.png"

////////////// TEX
// TIENDA
import tienda_tex_computer from "../../assets/devices_transparent/devices_tex/tienda/pc_tienda.png"
import tienda_tex_tablet from "../../assets/devices_transparent/devices_tex/tienda/tablet_tienda_tex.png"
import tienda_tex_phone from "../../assets/devices_transparent/devices_tex/tienda/tienda_mobile.png"
/// SHOPPING
import computer_SHOPPING_FORM from "../../assets/devices_transparent/devices_tex/shopping_form/pc_shoppingForm.png";
import tablet_SHOPPING_FORM from "../../assets/devices_transparent/devices_tex/shopping_form/tablet_shoppingForm_tex.png";
import celular_SHOPPING_FORM from "../../assets/devices_transparent/devices_tex/shopping_form/mobile_shoppingForm.png";
/// PROFILE 
import pc_PROFILE_VIEW from "../../assets/devices_transparent/devices_tex/profile/pc_PROFILE-USER.png";
import tablet_PROFILE_VIEW from "../../assets/devices_transparent/devices_tex/profile/tablet_PROFILE-USER.png";
import celular_PROFILE_VIEW from "../../assets/devices_transparent/devices_tex/profile/mobile_PROFILE_USER.png";


/////////////////////////////// SUPER REO Y
///pc
import pc_HOME_SUPER_REO from "../../assets/devices_transparent/superReoY/pc/home_pc_superreoY.png"
import pc_PERFIL_SUPER_REO from "../../assets/devices_transparent/superReoY/pc/perfil_pc.png"
import pc_ByCategory_SUPER_REO from "../../assets/devices_transparent/superReoY/pc/pc_category_SUPER_REO.png"
//// tablet
import tablet_home_superReo from "../../assets/devices_transparent/superReoY/tablet/home.png";
import tablet_perfil_superreo from "../../assets/devices_transparent/superReoY/tablet/perfil_addresses.png"
import tablet_shopping_SUPERREO from "../../assets/devices_transparent/superReoY/tablet/tablet_shopping.png"
//// mobile
import phone_home_superReo from "../../assets/devices_transparent/superReoY/mobile/home.png";
import phone_perfil_superReo from "../../assets/devices_transparent/superReoY/mobile/perfil.png";
import phone_shopping_superReo from "../../assets/devices_transparent/superReoY/mobile/shopping.png";



//////////////////////////////// IZI COOK
//PC
import pc_home_iziCook from "../../assets/devices_transparent/Izi_cook/pc/home.png";
import pc_home_dark_iziCook from "../../assets/devices_transparent/Izi_cook/pc/home_dark.png";
import pc_details_iziCook from "../../assets/devices_transparent/Izi_cook/pc/detalles_dark.png";
//mobile
import mobile_home_white_iziCook from "../../assets/devices_transparent/Izi_cook/mobile/home_white.png";
import mobile_home_dark_iziCook from "../../assets/devices_transparent/Izi_cook/mobile/home_dark.png";
import mobile_details_iziCook from "../../assets/devices_transparent/Izi_cook/mobile/home_white.png";




//////////////////////////// TECHS
import mongoDb_icon from "../../assets/technologies_icons/mongoDB_icon.svg";
import css_icon from "../../assets/technologies_icons/css_icon.png";
import node_icon from "../../assets/technologies_icons/nodeJS_icon.png";
import react_icon from "../../assets/technologies_icons/react_icon.png";
import redux_icon from "../../assets/technologies_icons/redux_icon.svg";
import expressJS from "../../assets/technologies_icons/express_JS.png"
import git_icon from "../../assets/technologies_icons/git_icon.png"




const MONGO_DB ={
    src : mongoDb_icon,
    tittle:"Mongo DB",
    link: "https://es.wikipedia.org/wiki/MongoDB"
}
const CSS ={
    src : css_icon,
    tittle:"CSS",
    link: "https://es.wikipedia.org/wiki/CSS"
}
const NODE_JS = {
    src: node_icon,
    tittle:"Node JS",
    link: "https://en.wikipedia.org/wiki/Node.js",
}
const REACT = {
    src: react_icon,
    tittle:"React JS",
    link: "https://es.wikipedia.org/wiki/React",
}
const REDUX = {
    src: redux_icon,
    tittle:"Redux",
    link: "https://es.wikipedia.org/wiki/Redux_(JavaScript)",
}
const EXPRESS = {
    src: expressJS,
    tittle:"Express JS",
    link: "https://es.wikipedia.org/wiki/Express.js",
}
const GIT = {
    src: git_icon,
    tittle:"Git",
    link: "https://es.wikipedia.org/wiki/Git",
}


const DATA_TEX = {
    pc: [
        { src: tienda_tex_computer, alt: 'View Home - PC TEX' },
        { src: computer_SHOPPING_FORM, alt: 'View Shopping - PC TEX' },
        { src: pc_PROFILE_VIEW, alt: 'View Profile - PC TEX' },
    ],
    phone: [
        { src: tienda_tex_phone, alt: 'View Home - Phone TEX' },
        { src: celular_SHOPPING_FORM, alt: 'View Shopping - Phone TEX' },
        { src: celular_PROFILE_VIEW, alt: 'View Profile - Phone TEX' },
    ],
    tablet: [
        { src: tienda_tex_tablet, alt: 'View Home - Tablet TEX' },
        { src: tablet_SHOPPING_FORM, alt: 'View Shopping - Tablet TEX' },
        { src: tablet_PROFILE_VIEW, alt: 'View Profile - Tablet TEX' },
    ],    
    techs: [
        REACT,
        EXPRESS,
        CSS,
        NODE_JS,
        REDUX,
        MONGO_DB,
        GIT,
    ],
    URL:"https://www.texstore.pe/tienda"
}

const DATA_SUPERREOY = {
    pc: [
        { src: pc_HOME_SUPER_REO, alt: 'View Home - PC SuperReoY+' },
        { src: pc_ByCategory_SUPER_REO, alt: 'View By category - PC SuperReoY+' },
        { src: pc_PERFIL_SUPER_REO, alt: 'View Profile - PC SuperReoY+' },
    ],
    phone: [
        { src: phone_home_superReo, alt: 'View Home - Phone SuperReoY+' },
        { src: phone_shopping_superReo, alt: 'View Shopping - Phone SuperReoY+' },
        { src: phone_perfil_superReo, alt: 'View Profile - Phone SuperReoY+' },
    ],
    tablet: [
        { src: tablet_home_superReo, alt: 'View Home - Tablet SuperReoY+' },
        { src: tablet_shopping_SUPERREO, alt: 'View Shopping - Tablet SuperReoY+' },
        { src: tablet_perfil_superreo, alt: 'View Profile - Tablet SuperReoY+' },
    ],    
    techs: [
        GIT,
        REACT,
        NODE_JS,
        CSS,
        EXPRESS,
        REDUX,
    ],
    URL:"https://www.superreoy.com/home"
}



const DATA_IZI_COOK = {
    pc: [
        { src: pc_home_dark_iziCook, alt: 'View Profile - Izi cook' },
        { src: pc_home_iziCook, alt: 'View Home - Izi cook' },
        { src: pc_details_iziCook, alt: 'View By category - Izi cook' },
    ],
    phone: [
        { src: mobile_home_dark_iziCook, alt: 'View Home - Phone Izi cook' },
        { src: mobile_home_white_iziCook, alt: 'View Shopping - Phone Izi cook' },
        { src: mobile_details_iziCook, alt: 'View Profile - Phone Izi cook' },
    ],
    tablet: [
        { src: tablet_home_superReo, alt: 'View Home - Tablet Izi cook' },
        { src: tablet_shopping_SUPERREO, alt: 'View Shopping - Tablet Izi cook' },
        { src: tablet_perfil_superreo, alt: 'View Profile - Tablet Izi cook' },
    ],    
    techs: [
        GIT,
        REACT,
        NODE_JS,
        CSS,
        EXPRESS,
        REDUX,
    ],
    URL:"https://easy-cook.vercel.app"
}




const TRASITION_DURATION = 1050;

const Projects = ({currentView})=>{


    const [projectFocus, setProjectFocus] = useState(0);
    const [focus, setFocus] = useState(null)
    const [animationStatus, setAnimationStatus] = useState(false)


    const previousHandler = () =>{
        if (projectFocus <= 0)  return
        setProjectFocus(projectFocus - 1)  
    }
    const nextHandler = () =>{
        if (projectFocus >= 2)  return
        setProjectFocus(projectFocus + 1)
       
    } 
    

    
    useEffect(()=>{
        if (currentView === 2) {
            setAnimationStatus(true)
            console.log(projectFocus);
            console.log(projectFocus);
            if (focus === null) {
                console.log("con retraso");
                setTimeout(() => {
                    setFocus(projectFocus)
                }, 260);    
            } else {
                console.log("sin retraso");
                setFocus(projectFocus)
            }
           
        }
    },[currentView,projectFocus])

    return(
        <div id={style.Projects} className={animationStatus?style.active:undefined}>
            <div>
                <header id={style.header} className={animationStatus?style.active:undefined}>
                    <div>
                        <div>
                            <div id={style.arrowsSection}>
                                <div onClick={()=>previousHandler()} className={projectFocus <= 0 ? `${style.deactivated} ${style.plus}` : undefined}>
                                    <img src={arrow} alt="" />
                                    <label>
                                        Anterior 
                                    </label>
                                </div>
                                <div onClick={()=>nextHandler()} className={projectFocus >= 2 ? style.deactivated : undefined}>
                                    <label>
                                        Siguiente 
                                    </label>
                                    <img src={arrow} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>  
            {
                animationStatus? (
                    <div id={style.CardsProjectContainer}>
                        <div style={{height:"100%"}}>
                            <div id={style.carousel} style={{transform:`translateX(calc((-100% / 5) * ${projectFocus}))`, transition: `transform ${TRASITION_DURATION}ms ease-out`}}>
                                <div>
                                    <PROJECT NUMBER={[0]} CURRENT_FOCUS={focus} DATA={DATA_TEX}/>
                                </div>                                
                                <div> 
                                    <PROJECT NUMBER={[1]} CURRENT_FOCUS={focus} DATA={DATA_SUPERREOY}/>
                                </div>
                                <div>
                                    <PROJECT NUMBER={[2]} CURRENT_FOCUS={focus} DATA={DATA_IZI_COOK}/>
                                </div>      
                                <div>
                                    <PROJECT NUMBER={[3]} CURRENT_FOCUS={focus} DATA={DATA_TEX}/>
                                </div> 
                                
                                <div>
                                    <PROJECT NUMBER={[4]} CURRENT_FOCUS={focus} DATA={{}}/>
                                </div>
                            </div>
                        </div>               
                    </div>
                ) : null
            }         
            
        </div>
    )
};

export default Projects;