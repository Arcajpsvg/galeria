class ValidatorArchitecture{

    constructor(value)
    {
        //valor del campo
        this.value = value;
        //variable para guardar el resultado de la validacion
        this.result = [];
    }
  
    

    isNotEmpty(msg)
    //recibe el posible mensaje de error, comprueba si el valor es falsy.
    {
        if(!this.value)
        {
            this.result.push(msg);
        }
        return this;
    }
    //recibe longitud minima, maxima y el mensaje de error, comprueba lo apropiado respectivamente.
    isLength(minLen,maxLen, msg)
    {
        if(this.value.length < minLen || this.value.length > maxLen)
        {
            this.result.push(msg);
        }
        return this;
    }
    
//comprueba si el campo queda vacío, recibe el mensaje de error.
    isRequired(msg)
    {
        if(this.value.length === 0){
            this.result.push(msg);
        }
        return this;
    }
//Comprueba a ver si al convertir el valor pasado al validador a numero sale NaN, en cuyo caso da error.
    isNumber(msg){
        if(isNaN(+this.value)){
            this.result.push(msg);
        }
        return this;
    }
//comprueba si el año introducido es futuro
    isNotFuture(msg){
        if(this.value > new Date().getFullYear() ){
            this.result.push(msg);
        }
        return this;
    }


}

export default ValidatorArchitecture;
