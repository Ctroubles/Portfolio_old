import style from "./succes.module.css"
import green_check from "../../../assets/general_icons/green_checkmark.svg"
import { useEffect } from "react";

const Succes = ({message})=>{

    useEffect(()=>{
        setTimeout(()=>{
            console.log(document.getElementById(style.Succes));
            const alerta = document.getElementById(style.Succes);
            alerta.classList.add(style.hide)
        },5000)
    },[])


    const throwAlert = ()=>{
        const alerta = document.getElementById(style.Succes);
        alerta.classList.add(style.hide)
    };

    return(
        <label id={style.Succes} >
            <span id={style.icon }> <img src={green_check} alt="" /> </span>
            <label>{message}</label>
            <span id={style.close} onClick={()=>throwAlert()}>X</span>
        </label>
    )
}; 

export default Succes;