import { Component } from "react";
import ValidatorFormEvents from "./validator/ValidatorFormEvents";

class FormEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        id: 0,
        titulo: "",
        descripcion: "",
        imagen: "",
        fecha: "",
        aforoInvitados: 0,
        precio: 0,
        eventoFormal: false,
        aptaMenores: false,
      },
      validations: {
        id: [],
        titulo: [],
        descripcion: [],
        imagen: [],
        fecha: [],
        aforoInvitados: [],
        precio: [],
        eventoFormal: [],
        aptaMenores: [],
      },
    };
  }
  events = [];

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
    const eventValues = JSON.stringify(this.state);
    console.log(eventValues);
    this.saveEvent(eventValues);
  };

  saveEvent(event) {
    window.localStorage("eventos", event);
    alert(this.state.titulo + " ha sido añadido a la lista de eventos");
  }

  validateTitle = (titulo) => {
    const validatorName = new ValidatorFormEvents(titulo);

    return validatorName
      .isRequired("Titulo requerido, ")
      .isLenght(3, 50, "Debe contener entre 3 y 50 caracteres").result;
  };

  validateDescription = (description) => {
    const validatorDescription = new ValidatorFormEvents(description);

    return validatorDescription
      .isRequired("Descripción requerida, ")
      .isLenght(10, 500, "Debe contener entre 10 y 500 caracteres").result;
  };

  validateRadioButton = (radioButton) => {
    const validatorRadioButton = new ValidatorFormEvents(radioButton);

    return validatorRadioButton.isNotEmpty("Debes marcar una opción").result;
  };

  validateNumberPicker = (numberPicker) => {
    const validatorNumberPicker = new ValidatorFormEvents(numberPicker);

    return validatorNumberPicker.isNotZero("Debes marcar un mínimo").result;
  };

  validateImage = (image) => {
    const validatorImage = new ValidatorFormEvents(image);

    return validatorImage
      .isRequired("Imagen requerida, ")
      .isURL("No es una url válida").result;
  };

  validateAll = () => {
    const {
      titulo,
      descripcion,
      imagen,
      fecha,
      aforoInvitados,
      precio,
      eventoFormal,
      aptaMenores,
    } = this.state.values;
    const validations = {
      titulo: "",
      descripcion: "",
      imagen: "",
      fecha: "",
      aforoInvitados: "",
      precio: "",
      eventoFormal: "",
      aptaMenores: "",
    };

    validations.titulo = this.validateTitle(titulo);
    validations.descripcion = this.validateDescription(descripcion);
    validations.eventoFormal = this.validateRadioButton(eventoFormal);
    validations.aptaMenores = this.validateRadioButton(aptaMenores);
    validations.aforoInvitados = this.validateNumberPicker(aforoInvitados);
    validations.precio = this.validateNumberPicker(precio);
    validations.imagen = this.validateImage(imagen);

    const validationmessages = Object.values(validations).filter(
      (message) => message.length > 0
    );

    const isValid = !validationmessages.length;

    if (!isValid) {
      this.setState({ validations });
    }
    return isValid;
  };

  render() {
    const { titulo, descripcion, imagen, fecha, aforoInvitados, precio } =
      this.state.values;

    const {
      titulo: titleVal,
      descripcion: descriptionVal,
      imagen: imageVal,
      fecha: dateVal,
      aforoInvitados: guestsVal,
      precio: priceVal,
      eventoFormal: formalEventVal,
      aptaMenores: suitableChildrenVal,
    } = this.state.validations;

    return (
      <>
        <section>
          <header>
            <h2>Formulario eventos</h2>
          </header>

          <form id="form" onSubmit={this.handleSubmit}>
            <p>
              <label>
                Titulo
                <input
                  className="text-input"
                  type="text"
                  name="titulo"
                  value={titulo}
                  onChange={this.handleChange}
                ></input>
              </label>
            </p>
            <span>{titleVal}</span>
            <p>
              <label>
                Descripción
                <input
                  className="text-input"
                  type="text"
                  name="descripcion"
                  value={descripcion}
                  onChange={this.handleChange}
                ></input>
              </label>
            </p>
            <span>{descriptionVal}</span>
            <p>
              <label>
                Imagen URL
                <input
                  className="url-input"
                  type="text"
                  name="imagen"
                  value={imagen}
                  onChange={this.handleChange}
                ></input>
              </label>
            </p>
            <span>{imageVal}</span>
            <p>
              <label>
                Fecha
                <input
                  id="date-input"
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
                  className="number-input"
                  type="number"
                  name="aforoInvitados"
                  value={aforoInvitados}
                  onChange={this.handleChange}
                ></input>
              </label>
            </p>
            <span>{guestsVal}</span>
            <p>
              <label>
                Precio
                <input
                  className="number-input"
                  type="number"
                  name="precio"
                  value={precio}
                  onChange={this.handleChange}
                ></input>
              </label>
            </p>
            <span>{priceVal}</span>
            <br></br>
            <strong>¿Se trata de un evento formal?</strong>
            <p>
              <label>
                <input
                  className="radio-input"
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
                  className="radio-input"
                  type="radio"
                  name="eventoFormal"
                  value="Informal"
                  onChange={this.handleChange}
                ></input>
                Evento informal
              </label>
            </p>
            <span>{formalEventVal}</span>

            <br></br>
            <strong>¿Es apta para menores?</strong>
            <p>
              <label>
                <input
                  className="radio-input"
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
                  className="radio-input"
                  type="radio"
                  name="aptaMenores"
                  value="No apta"
                  onChange={this.handleChange}
                ></input>
                No
              </label>
            </p>
            <span>{suitableChildrenVal}</span>

            <p>
              <button id="btn-submit" type="submit">
                ENVIAR
              </button>
            </p>
          </form>
          <pre>{JSON.stringify(this.state.values)}</pre>
        </section>
      </>
    );
  }
}

export default FormEvents;
