import { Component } from "react";
import ValidatorArchitecture from "./validators/ValidatorFormArchitecture";
import './ArchiForm.css';
import '../../../styles/formstyles/FormStyles.css';
import places from './../../datagen/ArchiData';

export default class ArchiForm extends Component{

constructor(props){
    //recibe props por temas que explicara mas adelante
    //el super es obligatorio por extender a componente, state coge los valores para el formulario y posibles validaciones.
    super(props);
    this.state = {values: {name: '', description: '', constructionYear: '', author: '', location: ''}, 
    validations: {name: '', description: '', constructionYear: '', author: '', location: ''}};
    this.listItems = [];

}

handleChange = (e) => {
    //funcion sencilla para hacer double binding palero. Recibe el nombre y valor de aquello que se va a cambiar y lo pasa
    //al state.
    const {name, value} = e.target;
    this.setState(
        {
            values:{
                ...this.state.values,                   
                [name]:value
            }
        }
    );
}

handleSubmit = (e) => {
    e.preventDefault(); 
    //llama a la función de validar todo mediante los objetos Validator. En caso de devolver falso, bloquea la 
    //siguiente funcionalidad del submit.
    //si no existe 'listArchi' en el localStorage, guarda los valores en la lista del constructor, lo pasa a
    //json stringify y lo guarda en localStorage creando 'listArchi'.
    //en caso de existir, utiliza array from y json parse para extraer el array de objetos de localStorage,
    //mete dentro de dicho array los valores del formulario y lo vuelve a pasar a string y guardarlo en localStorage.
    //el id es igual a la siguiente posición a las ya cubiertas de la combinación entre el array sacado del faker y el sacado de
    //localStorage
    const isValid = this.validateAll();
    if(!isValid){
        return false;
    }
    if(localStorage.getItem('listArchi')){
        let arreglo = Array.from(JSON.parse(localStorage.getItem('listArchi')));
        let id =  places.concat(arreglo).length;
        arreglo.push({...this.state.values, id});
        localStorage.setItem('listArchi', JSON.stringify(arreglo));
    }else{
    const values = this.state.values;
    let id =  places.length;
    this.listItems.push({...values, id});
    let jsonList = JSON.stringify(this.listItems);
    localStorage.setItem('listArchi', jsonList);
    }
    

    
}

//validara todo el formulario, devolvera true o false.
validateAll = () =>{
    const {name, description, constructionYear, author, location } = this.state.values;
    const validations = {name: '', description: '', constructionYear: '', author: '', location: ''};
    //invocamos validadores
    validations.name = this.validateName(name);
    validations.description = this.validateDesc(description);
    validations.constructionYear = this.validateYear(constructionYear);
    validations.author = this.validateAuthor(author);
    validations.location = this.validateLocation(location);
     //recuperamos mensajes, filtramos por aquellos que su mensaje no esté vacío
     const mensajesValidacion = Object.values(validations).filter(mensaje => mensaje.length > 0);
     //invalidez es cuando hay algún mensaje, ya que los validadores solo ponen mensajes cuando sus condiciones se aplican
     let isValid = !mensajesValidacion.length;
     if(!isValid){
         this.setState({validations});
     }
    return isValid;
 }

 validateName = (name) =>{
    //función para validar el nombre. Crea un validador, le pasa de valor el 'name' que recibe del state y le pasa las condiciones requeridas.
//devuelve el 'result' de ValidatorArchitecture despues de llamar a las dos funciones de validacion elegidas, que pueden modificar dicho
//result.
    const validatorName = new ValidatorArchitecture(name);
    return validatorName
                        .isNotEmpty("Must have a name")
                        .isLength(4, 30, '4 to 30 characters length required')
                        .result;
}

//similar al anterior, en vez del nombre le pasa la descripcion.
validateDesc = (description) => {
    const validatorDesc = new ValidatorArchitecture(description);
    return validatorDesc
                                .isNotEmpty("Must have a description")
                                .isLength(10, 50, '10 to 50 characters length required')
                                .result;
}
//comprueba que no esté el campo vacío, tenga de 1 a 4 caracteres, no sea NaN y el año no sea superior al actual.
validateYear = (constructionYear) => {
    const validatorYear = new ValidatorArchitecture(constructionYear);
    return validatorYear
                                .isNotEmpty("Must have a construction year")
                                .isLength(1, 4, '1 to 4 characters length required')
                                .isNumber('Years must be numbers.')
                                .isNotFuture('You are not a time traveller')
                                .result;
}
validateAuthor = (author) =>{
 //practicamente igual que la de name
    const validatorAuthor = new ValidatorArchitecture(author);
    return validatorAuthor
                        .isNotEmpty("Must have an author name")
                        .isLength(4, 20, '4 to 20 characters length required')
                        .result;
}
validateLocation = (location) =>{
    //practicamente igual que la de name
       const validatorLocation = new ValidatorArchitecture(location);
       return validatorLocation
                           .isNotEmpty("Must have a location name")
                           .isLength(5, 20, '5 to 20 characters length required')
                           .result;
   }


render(){
    //esto crea el formulario, lo une al state y prepara spans para mostrar mensajes de error.
   let {name, description, constructionYear, author, location} = this.state;
   const { name: nameVal,
    description: descVal,
    constructionYear: yearVal,
    author: authorVal,
    location: locationVal
} = this.state.validations;
   return(
    <article id="form-article">
        <header>
            <h1>Architecture form</h1>
        </header>
        <main>
            <form onSubmit={this.handleSubmit} id='form'>
                <p>
                    <label>Name
                        <input type="text" name="name" value={name} onChange={this.handleChange}/>
                    </label>
                </p>
                <span className='error-control'>{nameVal}</span>
                <p>
                    <label>Description
                        <textarea name="description" value={description} onChange={this.handleChange}/>
                    </label>
                </p>
                <span className='error-control'>{descVal}</span>
                <p>
                    <label>Year of construction
                        <input type="number" name="constructionYear" value={constructionYear} onChange={this.handleChange}/>
                    </label>
                </p>
                <span className='error-control'>{yearVal}</span>

                <p>
                    <label>Author
                        <input type="text" name="author" value={author} onChange={this.handleChange}/>
                    </label>
                </p>
                <span className='error-control'>{authorVal}</span>

                <p>
                    <label>Location
                        <input type="text" name="location" value={location} onChange={this.handleChange}/>
                    </label>
                </p>
                <span className='error-control'>{locationVal}</span>

                <button type="submit">Enviar</button>
            </form>
    
        </main>

    </article>
   )
}

}