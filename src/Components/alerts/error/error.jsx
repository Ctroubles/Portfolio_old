import style from "./succes.module.css"

const Error = ({message})=>{
    return(
        <label id={style.Succes}>
            <span id={style.icon }>!</span>
            <label>{message}</label>
            <span id={style.close}>X</span>
        </label>
    )
}; 

export default Error;