import FormEvents from "./private/form-events/Form-events";
import ListEvents from "./private/list-events/List-events";

function Events() {
  return (
    <section>
      <header>
        <h1>Eventos</h1>
      </header>

      <hr></hr>
      <article>
        {/* <FormEvents></FormEvents> */}
        <ListEvents></ListEvents>
      </article>
    </section>
  );
}

export default Events;