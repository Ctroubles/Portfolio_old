const validators = (target,value) =>{
    let result = false;

    switch (target) {
        case "from_name":
            value.length<45?result=true:result=false;
            var regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/;
            if(regex.test(value))result = true
            else result = false
            if(value.length===0)result = true
            break;        
        case "reply_to":
            if(value.length <= 45)result=true
            else result= false
            break;                     
        case "subject":
            if(value.length <= 30)result=true
            else result= false
            break;              
        case "message":
            if(value.length <= 300)result=true
            else result= false
            break;                  
             

        default:
            break;
    }

    return result;
};



const validatorsLevel2 = (setErrorsForm, currentForm) =>{
    const errors= {};
    let approved = true;
    for(let prop in currentForm){
        const value = currentForm[prop]

        switch (prop) {
            case "from_name":
                if(value.length>45 || value.length < 1){
                    errors[prop]=true;
                    approved = false
                }
                const regexName = /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ]+$/              
                if (!regexName.test(value)) {
                    errors[prop]=true;
                    approved = false
                }
                break;    
            case "reply_to":
                const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;                ;
                if (!regexEmail.test(value)) {
                    errors[prop]=true;
                    approved = false
                }
                break;          
            case "subject":
                if(value.length>30 || value.length < 1){
                    errors[prop]=true;
                    approved = false
                }
                break;            
                         
            case "message":
                    if(value.length > 300 || value.length < 1){
                        errors[prop]=true;
                        approved = false
                    };
                break;
    
            default:
                break;
         }
    }

    setErrorsForm(errors)
    return approved;
};



export{
    validators,
    validatorsLevel2
}