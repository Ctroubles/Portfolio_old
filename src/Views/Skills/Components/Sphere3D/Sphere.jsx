import React, { useEffect, } from "react";
import "./TextShpere.css";
import { useMediaQuery } from '@mui/material';
import TagCloud from "TagCloud";



const TextShpere = () => {

  const min1300 = useMediaQuery('(min-width: 1300px)')
  const min1000 = useMediaQuery('(min-width: 1100px)')
  const min450 = useMediaQuery('(min-width: 450px)')
  const min1 = useMediaQuery('(min-width: 10px)')



  useEffect(() => {
    
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "Express",
        "JavaScript",
        "Photoshop",
        "React",
        "Redux",
        "MongoDB",
        "NodeJS",
        "Babel",
        "Jquery",
        "ES6",
        "GIT",
        "GITHUB",
        "SQL",
        "Premier",
      ];

      const options = {
        radius: min1300?300: min1000?260:min450?180: min1?160: 200,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

    const tagCloudContainer = document.querySelector(container);
    tagCloudContainer.innerHTML = "";

    TagCloud(container, texts, options);

    
  }, [min1300, min1000,min1]);

  return (
    <div id="sphereSkillsContainer" >
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </div>
  );
};

export default TextShpere;