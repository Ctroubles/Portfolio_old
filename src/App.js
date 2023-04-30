import React, { useEffect, useRef, useState } from 'react';
import NotFound from './Components/NotFound/NotFound.jsx';
import style from "./App.module.css";
import plane from "./assets/navBar_icons/white_plane.svg"
import yellowPlane from "./assets/navBar_icons/yellow_plane.svg"
import {Intro, Projects, Skills, ContacMe} from './Views/index.js'
import CanvaToDraw from "./Components/canvaToDraw/CanvaToDraw.jsx";
import { BrowserRouter, Route,} from "react-router-dom";
import { debounce } from 'lodash';
import arrow from "./assets/general_icons/black_arrow.svg"
import { useMediaQuery } from '@material-ui/core';





const inactiveStyle ={
  "opacity": 0,
  "pointerEvents": "none",
  "useSelect": "none",
}


function App() {
 
    const [currentView, setCurrentView] = useState(0);
    const [navBarStatus, setNavBarStatus] = useState(false);


    const widthMobile = useMediaQuery('(max-width: 680px)')


    const handleWheel = debounce((event) => {
      if (!event.target.classList.contains("noSrcoll")) {
          const delta = Math.sign(event.deltaY);
    
          const numViews = 3; 
    
          if (delta > 0 && currentView < numViews) {
            setCurrentView(currentView + 1);
          } else if (delta < 0 && currentView > 0) {
            setCurrentView(currentView - 1);
          }
      }
    }, 100);


    const takeDown = ()=>{
      const numViews = 3; 
      if ( currentView < numViews) {
        setCurrentView(currentView + 1);
      }
    }

    useEffect(()=>{
      if (widthMobile) {
        const navBar = document.getElementById(style.navBar);
        if (navBarStatus) {
          navBar.style.display = "flex"
        }else{
          navBar.style.display = "none"
        }
      }
   

    },[navBarStatus])

  return (
    <BrowserRouter>
      <div id={style.AbsoluteContainer}>
        <Route exact path="/" render={()=><div id={style.Main}>
          <label id={style.linesMenu} onClick={()=>setNavBarStatus(!navBarStatus)}>
              <div id={style.linesMenu}>
                      <span id={ navBarStatus?style.fistSpan:undefined }></span>
                      <span id={ navBarStatus? style.secondSpan :undefined }></span>
                      <span id={ navBarStatus? style.thirdDiv :undefined } ></span>
              </div>
          </label>
  
          <div id={style.navBar}>
              <ul id={style.navBarOptions}>
                  <li id={currentView === 0 ?style.viewActive:undefined} onClick={()=>setCurrentView(0)} >Inicio</li>
                  <li id={currentView === 1 ?style.viewActive:undefined} onClick={()=>setCurrentView(1)} >Skills</li>
                  <li id={currentView === 2 ?style.viewActive:undefined} onClick={()=>setCurrentView(2)} >Proyectos</li>
                  {/* <li id={currentView === 3 ?style.viewActive:undefined} onClick={()=>setCurrentView(3)} >Yo</li> */}
                  <li> <img src={currentView === 3 ?yellowPlane:plane} alt="plane" onClick={()=>setCurrentView(3)} /></li>
              </ul>
          </div>
          <div id={style.mainContent}  onWheel={(evento)=>handleWheel(evento)}>
              <div  style={{transform:`translateY(calc(-100vh * ${currentView}))`,transition:"all 1s ease-out"}}>
                <div id={style.CanvasContaier}><CanvaToDraw/></div>
                <div>
                  <Intro/> 
                </div>
                <div>
                    <Skills currentView={currentView}/>
                </div>
                <div>
                  <Projects currentView={currentView} />
                </div>
                <div>
                  <ContacMe currentView={currentView}/>
                </div>
              </div>
              <label id={style.leftArrow} className={style.arrowDown} style={currentView>=3?inactiveStyle:undefined} onClick={()=>takeDown()} >
                <span>Abajo</span>
                <img src={arrow} alt="" />
            </label>
            <label id={style.rightArrow} className={style.arrowDown} style={currentView>=3?inactiveStyle:undefined} onClick={()=>takeDown()} >
                <span>Abajo</span>
                <img src={arrow} alt="" />
            </label>  
           </div>
        </div>} />
        {/* <Route exact path="*" render={()=><NotFound/>} /> */}
      </div>
    </BrowserRouter>
  );
}
export default App;
