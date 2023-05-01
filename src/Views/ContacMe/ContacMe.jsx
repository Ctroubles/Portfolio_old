import style from "./ContacMe.module.css";
// import emailjs from "emailjs-com";
import mapaPeru from "../../assets/pictures/peru_sudamerica.png"
import pin from "../../assets/general_icons/locationPin.svg"
import emailjs from 'emailjs-com';
import { useEffect, useRef, useState } from "react";
import LetterAnimated from "../Skills/Components/LetterAnimated/LetterAnimated";
import { validatorsLevel2 } from "../../validators/formulario_validators";
import Succes from "../../Components/alerts/succes/succes";



const ContacMe = ({currentView})=>{

      
        const formU = useRef();
        const [succesAlert, setSuccesAlert] = useState(false)
        const [loading, setLoading] = useState(false)

        const [form, setForm] = useState({
            from_name:"",
            reply_to:"",
            subject:"",
            message:"",
        });

        const [errors, setErrors] =useState({})

        const sendEmail = (e) => {
            e.preventDefault();
     
            const approved = validatorsLevel2(setErrors, form)
            if (approved) {
                setLoading(true)
                emailjs.sendForm('service_snsko7q', 'template_3y5xi4b',formU.current, '8EolTUdpPc19YuWvg')
                .then((result) => {
                    setSuccesAlert(true)
                    setForm({
                        from_name:"",
                        reply_to:"",
                        subject:"",
                        message:"",
                    })
                    setLoading(false)
                    setTimeout(()=>{
                        setSuccesAlert(false)
                    },6000)
                }, (error) => {
                    alert(error.text);
                });
            }
          };


          const handlerChange = (e)=>{
            const target = e.target.name;
            const value = e.target.value;
            setErrors({...errors, [target]:null})
            setForm({...form,[target]:value})
          }


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
                            <label className={style.labelsInputs} >
                            <span className={animationStatus? `${errors["from_name"]?style.error:""} ${style.aparecerTextarea}` :undefined} >
                                    <input value={form.from_name} name ="from_name" placeholder="Nombre" type="text" onChange={(e)=>handlerChange(e)} spellCheck="false" autoComplete="off"/>
                                </span>
                            </label>

                            <label className={style.labelsInputs} >
                            <span className={animationStatus? `${errors["reply_to"]?style.error:""} ${style.aparecerTextarea}` :undefined} >
                                    <input value={form.reply_to} name="reply_to" placeholder="Email" type="text" onChange={(e)=>handlerChange(e)} spellCheck="false"  autoComplete="off"  />
                                </span>
                            </label>
                        </div>

                        <div>
                            <label className={style.labelsInputs} >
                            <span className={animationStatus? `${errors["subject"]?style.error:""} ${style.aparecerTextarea}` :undefined} >
                                    <input value={form.subject} name="subject" type="text" id="" placeholder="Asunto" onChange={(e)=>handlerChange(e)} spellCheck="false" autoComplete="off" />
                                </span>
                            </label>
                        </div>

                        <div>
                            <label className={style.labelsInputs} >
                                <span className={animationStatus? `${errors["message"]?style.error:""} ${style.aparecerTextarea}` :undefined} >
                                    <textarea value={form.message} name="message" id=""  placeholder="Mensaje" onChange={(e)=>handlerChange(e)} spellCheck="false" autoComplete="off"  ></textarea>
                                </span>
                            </label>
                        </div>

                        <div id={style.sendButton} className={loading ? style.loading : ""}>
                                {loading ? <div className={style.loading}></div> : <button type="submit">Enviar mensaje!</button>}
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
            {succesAlert?(<Succes message={"Tu mensaje se ha enviado con exito"}></Succes>):undefined}
        </div>
    )
};

export default ContacMe;