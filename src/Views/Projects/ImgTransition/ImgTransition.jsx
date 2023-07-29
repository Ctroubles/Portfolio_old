import React, { useState } from 'react';
import {motion,} from "framer-motion/dist/framer-motion";
import style from "./ImgTransiotion.module.css"

const ImageTransition = ({SHOW, images =[], PB="100%"}) => {
  const [index, setIndex] = useState(0);


  const goToNextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };


  React.useEffect(() => {
    
    let interval;
    if (SHOW)   interval = setInterval(goToNextImage, 4000);
  
    return () => clearInterval(interval);
  
  }, [SHOW]);



  const handleContextMenu = (e) => {
    e.preventDefault();
  };


  return (
    <div id={style.imgCont} style={{ position: 'relative', width: '100%', height: '0', paddingBottom:PB, overflow: 'hidden' }}>
      {images.map((image, idx) => (
        <motion.img
          key={idx}
          src={image.src}
          alt={image.alt}
          title={image.alt}
          onContextMenu={handleContextMenu}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === idx ? 1 : 0, 
            transition: 'opacity 1s ease',
            zIndex: index === idx ? 1 : 0
          }}
        />
      ))}
    </div>
  );
};

export default ImageTransition;
