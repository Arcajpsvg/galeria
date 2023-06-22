class ValidatorAuth {

    constructor(value) {
        //valor del campo
        this.value = value;
        //variable para guardar el resultado de la validacion
        this.result = [];
    }



    isNotEmpty(msg)
    //recibe el posible mensaje de error, comprueba si el valor es falsy.
    {
        if (!this.value) {
            this.result.push(msg);
        }
        return this;
    }
    //recibe longitud minima, maxima y el mensaje de error, comprueba lo apropiado respectivamente.
    isLength(minLen, maxLen, msg) {
        if (this.value.length < minLen || this.value.length > maxLen) {
            this.result.push(msg);
        }
        return this;
    }

    //comprueba si el campo queda vacío, recibe el mensaje de error.
    isRequired(msg) {
        if (this.value.length === 0) {
            this.result.push(msg);
        }
        return this;
    }

    //esto comprueba si el campo recibido es un email mediante regex, comprobando si hay dos campos separados por @ y 
    //terminado en punto algo.
    isEmail(msg) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value)) {
            this.result.push(msg);
        }
        return this;
    }

    //estos ultimos campos son utilizados para evaluar passwords. Este en concreto quiere que el password contenga al menos uno de 
    // - + _ o /.
    hasSymbol(msg) {
        if (!/(?=.*[-+_])/.test(this.value)) {
            this.result.push(msg);
        }
        return this;
    }

    //este otro busca que el password contenga al menos un número.
    hasNumber(msg) {
        if (!/(?=.*\d)/.test(this.value)) {
            this.result.push(msg);
        }
        return this;
    }

    //este otro quiere que el password tenga al menos una letra mayúscula.
    hasCapitalLetter(msg) {
        if (!/(?=.*[A-Z])/.test(this.value)) {
            this.result.push(msg);
        }
        return this;
    }

}
      



export default ValidatorAuth;
