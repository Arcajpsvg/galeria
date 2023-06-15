import { Component } from "react";

class FormEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      titulo: "",
      descripcion: "",
      imagen: "",
      fecha: "",
      aforoInvitados: 0,
      precio: 0,
      eventoFormal: false,
      aptaMenores: false,
    };
  }
  events = [];

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const values = JSON.stringify(this.state);
    console.log(values);
    alert(this.state.titulo + " ha sido añadido a la lista de eventos");
    this.saveEvent(values);
  };

  saveEvent(event) {
    this.events.push(event);
    localStorage.setItem("userData", this.events.toString());
    this.setState({});
  }

  render() {
    const { titulo, descripcion, imagen, fecha, aforoInvitados, precio } =
      this.state;

    return (
      <>
        <section>
          <header>
            <h2>Formulario eventos</h2>
          </header>

          <form onSubmit={this.handleSubmit}>
            <p>
              <label>
                Titulo
                <input
                  type="text"
                  name="titulo"
                  value={titulo}
                  onChange={this.handleChange}
                ></input>
              </label>
            </p>
            <p>
              <label>
                Descripción
                <input
                  type="text"
                  name="descripcion"
                  value={descripcion}
                  onChange={this.handleChange}
                ></input>
              </label>
            </p>
            <p>
              <label>
                Imagen URL
                <input
                  type="text"
                  name="imagen"
                  value={imagen}
                  onChange={this.handleChange}
                ></input>
              </label>
            </p>
            <p>
              <label>
                Fecha
                <input
                  type="date"
                  name="fecha"
                  value={fecha}
                  onChange={this.handleChange}
                ></input>
              </label>
            </p>
            <p>
              <label>
                Aforo invitados
                <input
                  type="number"
                  name="aforoInvitados"
                  value={aforoInvitados}
                  onChange={this.handleChange}
                ></input>
              </label>
            </p>
            <p>
              <label>
                Precio
                <input
                  type="number"
                  name="precio"
                  value={precio}
                  onChange={this.handleChange}
                ></input>
              </label>
            </p>

            <br></br>
            <strong>¿Se trata de un evento formal?</strong>
            <p>
              <label>
                <input
                  type="radio"
                  name="eventoFormal"
                  value="Formal"
                  onChange={this.handleChange}
                ></input>
                Evento formal
              </label>
              <br></br>

              <label>
                <input
                  type="radio"
                  name="eventoFormal"
                  value="Informal"
                  onChange={this.handleChange}
                ></input>
                Evento informal
              </label>
            </p>

            <br></br>
            <strong>¿Es apta para menores?</strong>
            <p>
              <label>
                <input
                  type="radio"
                  name="aptaMenores"
                  value="Apta"
                  onChange={this.handleChange}
                ></input>
                Si
              </label>
              <br></br>

              <label>
                <input
                  type="radio"
                  name="aptaMenores"
                  value="No apta"
                  onChange={this.handleChange}
                ></input>
                No
              </label>
            </p>

            <p>
              <button type="submit">ENVIAR</button>
            </p>
          </form>
        </section>
      </>
    );
  }
}

export default FormEvents;
