import { Component } from "react";
import events from "../../datagen/EventData";
import { Link } from "react-router-dom";
import "./List-events.css";

export default function ListEvents() {
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
        {events.map((event) => (
          <article key={event.id}>
            <header>
              <h2>{event.titulo}</h2>
            </header>
            <p>{event.descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
