import { Component } from "react";
import ValidatorFormEvents from "./validator/ValidatorFormEvents";
import "../../../styles/formstyles/FormStyles.css";
import PrivateListEvents from "../private-list-events/Private-list-events";

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
      nowEditing: false,
      finishedEditing: false,
      finishedPosting: false,
      showForm: true,
    };
    this.events = [];
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
    console.log(this.state.values);
    this.saveEvent();
  };

  saveEvent() {
    let id;

    if (localStorage.getItem("events")) {
      // extraer la lista de localstorage
      this.events = Array.from(JSON.parse(localStorage.getItem("events")));
      console.log("EVENTS LENGTH: ", this.events.length);
      // this.events.push(this.state.values);
      console.log("EVENTS LENGTH after push: ", this.events.length);

      id = this.events.length;
      this.events.push({ ...this.state.values, id });
      console.log("EVENTS LIST: ", this.events);

      let storageList = JSON.stringify(this.events);
      localStorage.setItem("events", storageList);
    } else {
      // this.events.push(this.state.values);
      id = this.events.length;
      this.events.push({ ...this.state.values, id });
      let jsonList = JSON.stringify(this.events);
      localStorage.setItem("events", jsonList);
    }
    alert(this.state.values.titulo + " ha sido añadido a la lista de eventos");

    this.setState({
      values: {
        ...this.state.values,
      },
    });
  }

  editEvent = (id) => {
    this.setState(
      {
        validations: { ...this.state.validations },
        values: { ...this.state.values },
        showForm: true,
        finishedEditing: this.state.finishedEditing,
        finishedPosting: this.state.finishedPosting,
        nowEditing: true,
      },
      //el resto del código se pasa como una función callback aquí para evitar que los dos setStates se pisen.
      () => {
        let jsonList = Array.from(JSON.parse(localStorage.getItem("events")));
        let editThis = jsonList.filter((element) => element.id === id)[0];
        console.log("editando:", editThis);
        this.setState({
          values: {
            id: editThis.id,
            titulo: editThis.titulo,
            descripcion: editThis.descripcion,
            imagen: editThis.imagen,
            fecha: editThis.fecha,
            aforoInvitados: editThis.aforoInvitados,
            precio: editThis.precio,
            eventoFormal: editThis.eventoFormal,
            aptaMenores: editThis.aptaMenores,
          },
          ...this.state.validations,
          showForm: this.state.showForm,
          nowEditing: true,
          finishedPosting: false,
          finishedEditing: false,
        });
      }
    );
  };

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
        <section id="form-container-events">
          <header>
            <h2>Crea un evento</h2>
          </header>

          <form id="form" onSubmit={this.handleSubmit}>
            
            <div className="row-form-events">
            <div className="col-form-events">
              <p>
                <label>
                  <input
                    className="text-input"
                    type="text"
                    name="titulo"
                    value={titulo}
                    onChange={this.handleChange}
                    placeholder="Titulo"
                  ></input>
                </label>
              </p>
              <span>{titleVal}</span>
              <p>
                <label>
                  <textarea
                    className="text-input"
                    type="text"
                    name="descripcion"
                    value={descripcion}
                    onChange={this.handleChange}
                    placeholder="Descripción"
                  ></textarea>
                </label>
              </p>
              <span>{descriptionVal}</span>
              <p>
                <label>
                  <input
                    className="url-input"
                    type="text"
                    name="imagen"
                    value={imagen}
                    onChange={this.handleChange}
                    placeholder="Imagen URL"
                  ></input>
                </label>
              </p>
              <span>{imageVal}</span>
              <p>
                <label>
                  <input
                    id="date-input"
                    type="date"
                    name="fecha"
                    value={fecha}
                    onChange={this.handleChange}
                    placeholder="Fecha"
                  ></input>
                </label>
              </p>
            </div>

            <div className="col-form-events">
              <p>
                <label>
                  <input
                    className="number-input"
                    type="number"
                    name="aforoInvitados"
                    value={aforoInvitados}
                    onChange={this.handleChange}
                  ></input>
                  Aforo invitados
                </label>
              </p>
              <span>{guestsVal}</span>
              <p>
                <label>
                  <input
                    className="number-input"
                    type="number"
                    name="precio"
                    value={precio}
                    onChange={this.handleChange}
                  ></input>
                  Precio
                </label>
              </p>
              <span>{priceVal}</span>
              <br></br>
              <p>¿Se trata de un evento formal?</p>
              <p>
                <label>
                  <input
                    className="radio-input"
                    type="radio"
                    name="eventoFormal"
                    value="Formal"
                    onChange={this.handleChange}
                  ></input>
                  Sí
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
                  No
                </label>
              </p>
              <span>{formalEventVal}</span>

              <br></br>
              <p>¿Es apta para menores?</p>
              <p>
                <label>
                  <input
                    className="radio-input"
                    type="radio"
                    name="aptaMenores"
                    value="Apta"
                    onChange={this.handleChange}
                  ></input>
                  Sí
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
            </div>
            </div>

            <br></br>
            <p>
              <button id="btn-submit" type="submit">
                ENVIAR
              </button>
            </p>
          </form>
           <PrivateListEvents></PrivateListEvents>
        </section>
      </>
    );
  }
}

export default FormEvents;
