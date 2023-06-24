import { Component } from "react";
import ValidatorFormPaintings from "../form-paintings/validators-form-painting/Validator-form-Paintings";
import "../../../styles/formstyles/FormStyles.css";
import PostP from './../../datagen/PostP';

class FormPaintings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        id: 0,
        titulo: "",
        imagen: "",
        autor: "",
        fecha: "",
        precio: 0,
        estilo: "",
      },

      validations: {
        id: 0,
        titulo: "",
        imagen: "",
        autor: "",
        fecha: "",
        precio: 0,
        estilo: "",
      },
    };
    this.paintingList = [];
  }

 

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validateAll();
    if (!isValid) {
      return false;
    }
   if(localStorage.getItem('paintingList')){
    let arrap = Array.from(JSON.parse(localStorage.getItem('paintingList')));
    let id= PostP.concat(arrap).length;
    arrap.push({...this.state.values, id});
    localStorage.setItem('paintingList', JSON.stringify(arrap));
   }else{
    let values = this.state.values;
    let id =  PostP.length;
    this.paintingList.push({...values, id});
    let jsonList = JSON.stringify(this.paintingList);
    localStorage.setItem('paintingList', jsonList);
    }
   
  };

  validateAll = () => {
    const { titulo, imagen, autor, fecha, precio, estilo } = this.state.values;
    const validations = {
      id: 0,
      titulo: "",
      imagen: "",
      autor: "",
      fecha: "",
      precio: 0,
      estilo: "",
    };
    validations.id = this.validateId(titulo);
    validations.titulo = this.validateTitulo(titulo);
    validations.imagen = this.validateImagen(imagen);
    validations.autor = this.validateAutor(autor);
    validations.fecha = this.validateFecha(fecha);
    validations.precio = this.validatePrecio(precio);
    validations.estilo = this.validateEstilo(estilo);

    const validationmessages = Object.values(validations).filter(
      (message) => message.length > 0
    );

    const isValid = !validationmessages.length;

    if (!isValid) {
      this.setState({
        validations,
      });
    }
    return isValid;
  };
  validateId = (id) => {
    const validatorId = new ValidatorFormPaintings(id);
    return validatorId
      .isNotEmpty("Obligatorio")
      .isLength(0, 50, "Error en la longitud").result;
  };

  validateTitulo = (titulo) => {
    const validatorTitulo = new ValidatorFormPaintings(titulo);
    return validatorTitulo
      .isNotEmpty("Obligatorio")
      .isLength(0, 50, "Error en la longitud").result;
  };
  validateImagen = (imagen) => {
    const validatorImagen = new ValidatorFormPaintings(imagen);
    return validatorImagen.isURL("Formato erroneo").result;
  };

  validateAutor = (autor) => {
    const validatorAutor = new ValidatorFormPaintings(autor);
    return validatorAutor
      .isNotEmpty("Obligatorio")
      .isLength(0, 50, "Error en la longitud").result;
  };

  validateFecha = (fecha) => {
    const validatorFecha = new ValidatorFormPaintings(fecha);
    return validatorFecha.isValidDate("Formato erroneo").result;
  };

  validatePrecio = (precio) => {
    const validatorPrecio = new ValidatorFormPaintings(precio);
    return validatorPrecio.isValidPrice("Debe tener un valor válido").result;

  };
  validateEstilo = (estilo) => {
    const validatorEstilo = new ValidatorFormPaintings(estilo);
    return validatorEstilo.isLength(2, 10, "Longitud ente 2 y 10 caracteres")
      .result;
  };

  render() {
    const { titulo, imagen, autor, fecha, precio, estilo } = this.state.values;
    const {
      titulo: tituloVal,
      imagen: imagenVal,
      autor: autorVal,
      fecha: fechaVal,
      estilo: estiloVal,
      precio: precioVal,
    } = this.state.validations;
    return (
      <>
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
            <p>{tituloVal}</p>
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
            <p>{autorVal}</p>

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
            <p>{imagenVal}</p>
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
            <p>{fechaVal}</p>

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
            <p>{estiloVal}</p>
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
            <p>{precioVal}</p>

            <p>
              <input type="submit" value="Enviar" />
            </p>
          </form>
          <pre>
                    {JSON.stringify(this.state.values)}
                </pre>
        </section>
      </>
    );
  }
}

export default FormPaintings;
