import events from "../datagen/EventData";
import { Link } from "react-router-dom";
import "./List-events.css";

export default function ListEvents() {
  let storageEvents = localStorage.getItem("events")
    ? Array.from(JSON.parse(localStorage.getItem("events")))
    : [];
  let finalEventList = events.concat(storageEvents);

  return (
    <section id="list-events-container">
      <header id="list-events-header">
        <h1>Lista de eventos</h1>
        <div id="btn-create-events">
        <button value="crear-evento">
          <Link id="link" to="/eventsform">
            CREAR EVENTO
          </Link>
        </button>
      </div>
      </header>
      
      <div id="list-events">
        {finalEventList.map((event) => (
          <article id="event-card" key={event.id}>
            <header>
              <h2>{event.titulo}</h2>
              <img width="400px" src={event.imagen}></img>
            </header>
            <p>{event.descripcion}</p>
            <br></br>
            <strong>Precio: {String(event.precio)}</strong>
            <br></br>
            <small>Aforo máximo: {event.aforoInvitados}</small>
            <br></br>
            <small>Evento: {event.eventoFormal}</small>
            <br></br>
            <small>Apta para menores: {event.aptaMenores}</small>
            <br></br>
             <small>Fecha: {String(event.fecha)}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
