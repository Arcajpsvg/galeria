import './Auth.css';
import { Component } from "react";
import ValidatorAuth from "./validators/ValidatorAuth";


export default class Auth extends Component{

    constructor(){
        //crea un estado para los valores que se manejaran respecto a autorizacion de usuarios, una lista de usuarios para el localStorage
        //y un contador para asignar una id sencilla a cada usuario.
        super();
        this.state = {email: '', password: '', users: [],  validations: {email: '', password: ''}};
        this.counter = localStorage.getItem('userCounter') || 0;
       

    }
    //es una función de double binding rudimentaria, toma el nombre de un campo cuando es modificado y le asigna el valor fruto de
    //dicha modificación.
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});

    }


  handleSubmit = (e) => {
    //función manejadora de submit. Evita el submit natural de html, comprueba validaciones y en caso de todo ok crea un id nuevo con el
    //contador, se lo asigna a un objeto usuario y le asigna los valores del formulario. Acto seguido, guarda el usuario en localStorage
    //y actualiza la lista de usuarios, también guardándola en localStorage.
    e.preventDefault(); 
    const isValid = this.validateAll();
    if(!isValid){
        return false;
    }
    ++this.counter;
    let nombreUsuario = `usuario${this.counter}`;
    const {users, ...values} = this.state;
    let user = {nombre: nombreUsuario, values: {values}};
    console.log('el user es:', user);
    let jsonUser = JSON.stringify(user);

    localStorage.setItem('usuarioLogin', jsonUser);
    this.setState((prevState) => {
        const updatedUsers = [prevState.users, jsonUser];
        localStorage.setItem('userList', JSON.stringify(updatedUsers));
        console.log('el state es', this.state);
        return { users: updatedUsers };
      });
      

  }

  //función que valida todos los campos. Llama a validaciones individuales por cada uno, según las situadas en la clase ValidatorAuth.
  //Si todo va bien, devuelve true. Si no, false, y pone mensajes de error en el state.
validateAll(){
const {email, password} = this.state;
const validations = {email: '', password: ''};
validations.email = this.validateEmail(email);
validations.password = this.validatePassword(password);
const mensajesValidacion = Object.values(validations).filter(mensaje => mensaje.length > 0);
let isValid = !mensajesValidacion.length;
if(!isValid){
    this.setState({...this.state.email, ...this.state.password, validations});
}
return isValid; 


  }
  
//Utiliza el regex situado en la función isEmail de la clase ValidatorAuth.
validateEmail(email){
    const validatorEmail = new ValidatorAuth(email);
    return validatorEmail.isNotEmpty('Please fill the e-mail field.').isEmail('Please enter a correct e-mail').result;

}
//Utiliza las diversas funciones de comprobación de password de la clase ValidatorAuth.
validatePassword(password){
    const validatorPassword = new ValidatorAuth(password);
    return validatorPassword.isNotEmpty('Please insert a password').isLength(4, 10, 'Please enter a password between 4 and 10 characters.')
    .hasSymbol('The password must have one of - _ + /').hasNumber('The password must contain a number')
    .hasCapitalLetter('The password must contain a capital letter.').result;

}

  //función de renderizar el html que crea un formulario sencillo con lo básico para el json-server-auth.
    render(){
        const {email, password} = this.state;
        const {email: emailVal, password: passVal} = this.state.validations;
        return (
            <section id="section-auth">
                <header>
                    <h1>
                        Formulario de Registro
                    </h1>
                </header>
                <main>
                    <form onSubmit={this.handleSubmit}>
                        <p>
                            <label>Email
                                <input type="email" name="email" value={email} onChange={this.handleChange} placeholder='F.e. asf@asdf.com'/>
                            </label>
                            <span class='error-control'>{emailVal}</span>
                        </p>
                        <p>
                            <label>Password
                                <input type="password" name="password" value={password} onChange={this.handleChange} placeholder='F.e. +A1dsfz'/>
                            </label>
                            <span class='error-control'>{passVal}</span>
                        </p>
                        <button type="submit">Enviar</button>
                    </form>
                </main>
            </section>
        )
    }


}