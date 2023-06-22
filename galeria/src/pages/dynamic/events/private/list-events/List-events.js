import { Component } from "react";
import events from "../../datagen/EventData";

export default function ListEvents() {
  return (
    <section>
      <header>
        <h1>Lista de eventos</h1>
      </header>
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
