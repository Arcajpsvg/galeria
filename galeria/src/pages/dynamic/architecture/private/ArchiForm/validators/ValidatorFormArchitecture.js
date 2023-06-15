class ValidatorArchitecture{

    constructor(value)
    {
        //valor del campo
        this.value = value;
        //variable para guardar el resultado de la validacion
        this.result = [];
    }
  
    

    //el msg es el mensaje que queremos mostrar si no cumple
    //metodos para validaciones
    isNotEmpty(msg)
    {
        if(!this.value)
        {
            this.result.push(msg);
        }
        //Devolvemos el objeto validador
        return this;
    }
    //Longitudes
    isLength(minLen,maxLen, msg)
    {
        if(this.value.length < minLen || this.value.length > maxLen)
        {
            this.result.push(msg);
        }
        return this;
    }
    
    //requerido
    isRequired(msg)
    {
        if(this.value.length == 0){
            this.result.push(msg);
        }
        return this;
    }
}

export default ValidatorArchitecture;
