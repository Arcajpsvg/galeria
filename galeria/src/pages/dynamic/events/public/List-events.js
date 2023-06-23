import events from "../datagen/EventData";
import { Link } from "react-router-dom";
import "./List-events.css";

export default function ListEvents() {
  let storageEvents = localStorage.getItem("events")
    ? Array.from(JSON.parse(localStorage.getItem("events")))
    : [];
  let finalEventList = events.concat(storageEvents);

  return (
    <section>
      <header>
        <h1>Lista de eventos</h1>
      </header>
      <div id="btn-create-events">
        <button value="crear-evento">
          <Link id="link" to="/eventsform">
            CREAR EVENTO
          </Link>
        </button>
      </div>
      <div id="list-events-container">
        {finalEventList.map((event) => (
          <article key={event.id}>
            <header>
              <h2>{event.titulo}</h2>
            </header>
            <img width="400px" src={event.imagen}></img>
            <p>{event.descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
