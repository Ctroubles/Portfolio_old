import style from "./Landing.module.css"
import AnimatedLetter from "./componets/AnimatedLetter/AnimatedLetter";



const Landing = ({setCurrentView})=>{

    const sentence1 = "Hola,".split(" ")
    const sentence2 = "Soy César,".split(" ")
    const sentence3 = "Software developer.".split(" ")



    let contador = 0;

    return(
        <div id={style.LadingContainer}>
            <div id={style.meContainer}>
                <div>
                    <div id={style.sentence}>
                        {
                            sentence1.map((word, index) =>(
                                        <span key={index}>
                                            {word.split("").map((letter,index)=>{
                                                contador ++;
                                                
                                                   return (<AnimatedLetter key={index} letter={letter} contador={contador}/>)
                                                
                                            })}
                                            &nbsp;
                                        </span>
                                        )            
                                    )
                        }
                    </div>
                 
                    <div id={style.sentence}>
                            {
                                sentence2.map( (word, index) =>(
                                    <span key={index}>
                                        {word.split("").map((letter,index)=>{
                                                contador ++;
                                                
                                                   return (<AnimatedLetter key={index} letter={letter} contador={contador}/>)
                                                }
                                            )}
                                        &nbsp;
                                    </span>
                                    )            
                                )
                            }
                    </div>

                   <div id={style.sentence}>
                        {
                            sentence3.map( (word, index) =>(
                                <span key={index}>
                                    {word.split("").map((letter,index)=>{
                                                contador ++;
                                                
                                                   return (<AnimatedLetter key={index} letter={letter} contador={contador}/>)
                                                })}
                                    &nbsp;
                                </span>
                                )            
                            )
                        }
                    </div>
                       
                    
                </div>
                <div>

               
                    <p id={style.statementP}>Full stack &gt; Front-end / Back-end</p>
                    <div id={style.sendButton} className={style.aparecer} >
                                  <button onClick={()=>setCurrentView(3)}>Escríbeme!</button>
                        </div>
                </div>
            </div>
          

        </div>
    )
};

export default Landing;