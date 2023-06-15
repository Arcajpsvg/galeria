import { Component } from "react";

class FormPaintings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      titulo: "",
      imagen: "",
      autor:"",
      fecha: "",
      precio: 0,
      estilo: "",
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
    alert(this.state.titulo + " pintura añadida");
    this.saveEvent(values);
  };

  saveEvent(event) {
    this.events.push(event);
    localStorage.setItem("userData", this.events.toString());
    this.setState({});
  }

  render() {
    const { titulo, imagen, autor, fecha, precio, estilo } =
      this.state;

    return (
        <section>
          <header>
            <h2>Formulario pinturas</h2>
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
                Autor
                <input
                  type="text"
                  name="autor"
                  value={autor}
                  onChange={this.handleChange}
                ></input>
              </label>
            </p>
            <p>
              <label>
             Imagen
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
                Estilo
                <input
                  type="text"
                  name="estilo"
                  value={estilo}
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
            <p>
              <button type="submit">ENVIAR</button>
            </p>
          </form>
        </section>
      
    );
  }
}

export default FormPaintings;
