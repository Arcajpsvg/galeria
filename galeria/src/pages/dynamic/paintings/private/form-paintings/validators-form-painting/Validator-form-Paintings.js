class ValidatorFormPaintings{
  
    constructor(value)
    {
        
        this.value = value;
        
        this.result = [];
    }
    isURL(msg) {

        if(!/\.(jpeg|jpg|gif|png)$/.test(this.value)){
            this.result.push(msg);
        }

        return this;
    }
    isFormat(msg)
    {
        this.result.push(msg);
        return this;
    }
    isEspecialChars(msg)
    {
        this.result.push(msg);
        return this;
    }
    isStringNumero(numero, msg)
    {
        this.result.push(msg);
        return this;
    }
    isStringMayusculas(numero, msg)
    {
        this.result.push(msg);
        return this;
    }

    isNotEmpty(msg)
    {
        if(!this.value)
        {
            this.result.push(msg);
        }
       
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
    //emails
    isEmail(msg)
    {
        if(!/\S+@\S+\.\S+/.test(this.value))
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

export default ValidatorFormPaintings;
