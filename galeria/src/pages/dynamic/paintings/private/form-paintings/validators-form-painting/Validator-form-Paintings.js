class ValidatorFormPaintings{
  
    constructor(value)
    {
        
        this.value = value;
        
        this.result = [];
    }
    isURL(msg) {

        if(!    /\.(jpeg|jpg|gif|png)$/.test(this.value)){
            this.result.push(msg);
        }

        return this;
    }
    isFormat(msg)
    {
        this.result.push(msg);
        return this;
    }
    

   isValidPrice(msg) {
       if(! /^(\$|)([1-9]\d{0,2}(\,\d{3})*|([1-9]\d*))(\.\d{2})?$/.test(this.value)){
        this.result.push(msg);
       }
    return this;
    }

     isValidDate(msg){
        if(! /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/){
            this.result.push(msg);
    }
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
   
    isLength(minLen,maxLen, msg)
    {
        if(this.value.length < minLen || this.value.length > maxLen)
        {
            this.result.push(msg);
        }
        return this;
    }

}

export default ValidatorFormPaintings;
