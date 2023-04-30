import style from "./ContacMe.module.css";
// import emailjs from "emailjs-com";
import mapaPeru from "../../assets/pictures/peru_sudamerica.png"
import pin from "../../assets/general_icons/locationPin.svg"
import emailjs from 'emailjs-com';
import { useEffect, useRef, useState } from "react";
import LetterAnimated from "../Skills/Components/LetterAnimated/LetterAnimated";



const ContacMe = ({currentView})=>{

      
        const formU = useRef();

        const [form, setForm] = useState({
            name:"",
            email:"",
            subject:"",
            message:"",
        });

        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm('service_snsko7q', 'template_3y5xi4b',formU.current, '8EolTUdpPc19YuWvg')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
          };


          const handlerChange = (e)=>{
            const target = e.target.name;
            const value = e.target.value;
            setForm({...form,[target]:value})
          }
    
          useEffect(()=>{
            console.log(form);
          },[form])


          const sentence1 = "Escríbeme".split(" ")
          const [animationStatus, setAnimationStatus] = useState(false)
      
          useEffect(()=>{
              if (currentView === 3) setAnimationStatus(true)
          },[currentView])

    return(
        <div id={style.ContacMe}> 
            <div id={style.FormContainer}>
                <label>
                <div id={style.sentence}>
                        {
                            sentence1.map( word =>(
                                        <span>
                                            {word.split("").map((letter,index)=>(
                                                    (<LetterAnimated key={index} letter={letter} contador={index+1} currentView={currentView}   callerView={3}/>)
                                            ))}
                                        </span>
                                        )            
                                    )
                        }
                        </div>
                </label>
                <label>
                    <p>
                    Estoy interesado en oportunidades de trabajo independiente, especialmente en proyectos ambiciosos que me supongan un reto. Sin embargo, si tiene otra solicitud o pregunta, no dude en escribirme.
                    </p>
                </label>
                <div id={style.Form}>
                <form onSubmit={sendEmail} ref={formU}>
                        <div id={style.sender}>
                            <label>
                                 <input value={form.from_name} name ="from_name" placeholder="Nombre" type="text" onChange={(e)=>handlerChange(e)} spellCheck="false" autoComplete="off" className={animationStatus?style.aparecer:undefined} />
                            </label>

                            <label>
                                <input value={form.reply_to} name="reply_to" placeholder="Email" type="email" onChange={(e)=>handlerChange(e)} spellCheck="false"  autoComplete="off" className={animationStatus?style.aparecer:undefined} />
                            </label>
                        </div>

                        <div>
                            <label>
                                <input value={form.subject} name="subject" type="text" id="" placeholder="Asunto" onChange={(e)=>handlerChange(e)} spellCheck="false" autoComplete="off" className={animationStatus?style.aparecer:undefined} />
                            </label>
                        </div>

                        <div>
                            <label>
                                <textarea value={form.message} name="message" id=""  placeholder="Mensaje" onChange={(e)=>handlerChange(e)} spellCheck="false" autoComplete="off" className={animationStatus?style.aparecerTextarea:undefined} ></textarea>
                            </label>
                        </div>
                        <div id={style.sendButton}>
                            <label>
                                <button>Enviar mensaje!</button>
                            </label>
                        </div>
                        
                    </form>
                </div>
            </div>
            <div id={style.rigthContent} className={animationStatus?style.aparecerMapa:undefined} >
                <div id={style.mapaContainer}>
                    <label id={style.mapa}>
                        <img src={mapaPeru} alt="Perú mapa" />
                        <span id={style.pin} >
                            <img src={pin} alt="" />
                        </span>
                    </label>
                </div>
            </div>
        </div>
    )
};

export default ContacMe;