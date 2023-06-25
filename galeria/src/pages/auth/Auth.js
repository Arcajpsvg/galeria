import './Auth.css';
import { Component } from "react";
import ValidatorAuth from "./validators/ValidatorAuth";
import UserDTO from './DTO/User';
import axios from 'axios';
import { Navigate } from "react-router-dom";

export default class Auth extends Component {

    constructor() {
        //crea un estado para los valores que se manejaran respecto a autorizacion de usuarios, una lista de usuarios para el localStorage
        //y un contador para asignar una id sencilla a cada usuario.
        super();
        this.state = { email: '', password: '', validations: { email: '', password: '' }, login: true, redirect: false };


    }
    //es una función de double binding rudimentaria, toma el nombre de un campo cuando es modificado y le asigna el valor fruto de
    //dicha modificación.
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });

    }

    toggleLogin = () => {
        this.setState({ email: this.state.email, password: this.state.password, validations: { ...this.state.validations }, login: !this.state.login, redirect: false });
    }


    handleSubmit = async (e) => {
        //función manejadora de submit. Evita el submit natural de html, comprueba validaciones y cambia de utilidad según sea login o register.
        //para register, crea un usuario con la clase DTO según los valores del state y lo registra en el servidor mediante axios.
        //para login hace lo mismo, sólo cambia el endpoint.
        //en ambos casos guarda el token resultante en session storage y utiliza try/catch para manejo de errores. 
        // En peticiones correctas redirije a home.
        //Con finally resetea el state.
        e.preventDefault();
        let response;
        const isValid = this.validateAll();
        if (!isValid) {
            return false;
        }

        const { email, password } = this.state;
        let user = new UserDTO({ email, password });
        if (!this.state.login) {
            try {
                response = await axios.post('http://localhost:3000/register', user);
                console.log(response);
                sessionStorage.setItem('token', response.data.accessToken);
                if (response.status === 200 || response.status === 201) {
                    this.setState({ email: '', password: '', users: [], validations: { email: '', password: '' }, login: this.state.login, redirect: true });

                }
            } catch (err) {
                console.log('error es:', err);
            }
        } else {
            try {
                response = await axios.post('http://localhost:3000/login', user);
                sessionStorage.setItem('token', response.data.accessToken);
                if (response.status === 200 || response.status === 201) {
                    this.setState({ email: '', password: '', users: [], validations: { email: '', password: '' }, login: this.state.login, redirect: true });


                }
            } catch (err) {
                console.log('error es:', err.message);
            } finally {

                this.setState({ email: '', password: '', users: [], validations: { email: '', password: '' }, login: this.state.login });
            }
        }

    }

    //función que valida todos los campos. Llama a validaciones individuales por cada uno, según las situadas en la clase ValidatorAuth.
    //Si todo va bien, devuelve true. Si no, false, y pone mensajes de error en el state.
    validateAll() {
        const { email, password } = this.state;
        const validations = { email: '', password: '' };
        validations.email = this.validateEmail(email);
        validations.password = this.validatePassword(password);
        const mensajesValidacion = Object.values(validations).filter(mensaje => mensaje.length > 0);
        let isValid = !mensajesValidacion.length;
        if (!isValid) {
            this.setState({ ...this.state.email, ...this.state.password, validations, login: this.state.login, redirect: false });
        }
        return isValid;


    }

    //Utiliza el regex situado en la función isEmail de la clase ValidatorAuth.
    validateEmail(email) {
        const validatorEmail = new ValidatorAuth(email);
        return validatorEmail.isNotEmpty('Please fill the e-mail field.').isEmail('Please enter a correct e-mail').result;

    }
    //Utiliza las diversas funciones de comprobación de password de la clase ValidatorAuth.
    validatePassword(password) {
        const validatorPassword = new ValidatorAuth(password);
        return validatorPassword.isNotEmpty('Please insert a password').isLength(4, 10, 'Please enter a password between 4 and 10 characters.')
            .hasSymbol('The password must have one of - _ + /').hasNumber('The password must contain a number')
            .hasCapitalLetter('The password must contain a capital letter.').result;

    }

    //función de renderizar el html que crea un formulario sencillo con lo básico para el json-server-auth.
    render() {
        const { email, password, redirect } = this.state;
        const { email: emailVal, password: passVal } = this.state.validations;
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
                                <input type="email" name="email" value={email} onChange={this.handleChange} placeholder='F.e. asf@asdf.com' />
                            </label>
                            <span className='error-control'>{emailVal}</span>
                        </p>
                        <p>
                            <label>Password
                                <input type="password" name="password" value={password} onChange={this.handleChange} placeholder='F.e. +A1dsfz' />
                            </label>
                            <span className='error-control'>{passVal}</span>
                        </p>
                        <button type="submit">{this.state.login ? 'Log in' : 'Register'}</button>
                        <button type="button" onClick={this.toggleLogin}>Toggle register/login</button>
                    </form>
                    {/* esta parte maneja la redirección cuando hay un login o register correctos. Cuando 'redirect' es true, se renderiza el navigate. */}
                    {this.state.redirect && <Navigate to='/' replace={true} />}
                </main>
            </section>
        )
    }


}