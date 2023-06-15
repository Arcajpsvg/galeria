import { Component } from "react";
import ValidatorArchitecture from "./validators/ValidatorFormArchitecture";
import './ArchiForm.css';
export default class ArchiForm extends Component{

constructor(props){
    //recibe props por temas que explicara mas adelante
    //el super es obligatorio por extender a componente, state coge los valores para el formulario y posibles validaciones.
    super(props);
    this.state = {values: {name: '', description: '', constructionYear: '', author: '', location: ''}, 
    validations: {name: '', description: '', constructionYear: '', author: '', location: ''}};
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
    e.preventDefault(); //para el submit
    //llama a la función de validar todo mediante los objetos Validator. En caso de devolver falso, bloquea la 
    //siguiente funcionalidad del submit.
    const isValid = this.validateAll();
    if(!isValid){
        return false;
    }
    const values = JSON.stringify(this.state);
    console.log(values);
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
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label>Name
                        <input type="text" name="name" value={name} onChange={this.handleChange}/>
                    </label>
                </p>
                <span>{nameVal}</span>
                <p>
                    <label>Description
                        <textarea name="description" value={description} onChange={this.handleChange}/>
                    </label>
                </p>
                <span>{descVal}</span>
                <p>
                    <label>Year of construction
                        <input type="number" name="constructionYear" value={constructionYear} onChange={this.handleChange}/>
                    </label>
                </p>
                <span>{yearVal}</span>

                <p>
                    <label>Author
                        <input type="text" name="author" value={author} onChange={this.handleChange}/>
                    </label>
                </p>
                <span>{authorVal}</span>

                <p>
                    <label>Location
                        <input type="text" name="location" value={location} onChange={this.handleChange}/>
                    </label>
                </p>
                <span>{locationVal}</span>

                <button type="submit">Enviar</button>
            </form>
            <pre>
                    {JSON.stringify(this.state.values)}
                </pre>
        </main>

    </article>
   )
}

}