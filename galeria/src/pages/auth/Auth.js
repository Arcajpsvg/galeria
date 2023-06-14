import './Auth.css';
import { Component } from "react";

export default class Auth extends Component{

    constructor(){
        super();
        this.state = {email: '', password: '', users: []};
        this.counter = localStorage.getItem('userCounter') || 0;
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});

    }


  handleSubmit = (e) => {
    
    e.preventDefault(); 
    ++this.counter;
    let nombreUsuario = `usuario${this.counter}`;
    const {users, ...values} = this.state;
    // let jsonValues = JSON.stringify(values);
    let user = {nombre: nombreUsuario, values: {...values}};
    let jsonUser = JSON.stringify(user);

    localStorage.setItem('usuarioLogin', jsonUser);
    this.setState((prevState)=> ({users:[...prevState.users, jsonUser]}));
    localStorage.setItem('userList', this.state.users);


  }

    render(){
        const {email, password} = this.state;

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
                                <input type="email" name="email" value={email} onChange={this.handleChange}/>
                            </label>
                        </p>
                        <p>
                            <label>Password
                                <input type="password" name="password" value={password} onChange={this.handleChange}/>
                            </label>
                        </p>
                        <button type="submit">Enviar</button>
                    </form>
                </main>
            </section>
        )
    }


}