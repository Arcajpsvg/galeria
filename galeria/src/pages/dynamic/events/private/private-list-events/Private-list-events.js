import { Component } from "react";
import events from "../../datagen/EventData";

export default class PrivateListEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storageEvents: localStorage.getItem("events")
        ? events.concat(Array.from(JSON.parse(localStorage.getItem("events")))) 
        : events.concat([]),
    };
  }

  componentDidUpdate() {
    if (
      this.props.finishedEditing !== this.state.finishedEditing ||
      this.props.finishedPosting !== this.state.finishedPosting
    ) {
      this.setState({
        storageEvents: JSON.parse(localStorage.getItem("events"))
          ? Array.from(JSON.parse(localStorage.getItem("events")))
          : [],
        finishedEditing: this.props.finishedEditing,
        finishedPosting: this.props.finishedPosting,
      });
    }
  }

  deleteEvent(id) {
    let jsonList = [];
    this.setState(
      {
        storageEvents: this.state.storageEvents
          .filter((element) => element.id !== id)
          .map((element, index) => {
            element.id = index;
            return element;
          }),
        finishedEditing: this.state.finishedEditing,
        finishedPosting: this.state.finishedPosting,
      },
      () => {
        jsonList = JSON.stringify(this.state.storageEvents);
        localStorage.setItem("events", jsonList);
      }
    );
  }

  render() {
    return (
      <table id="private-archi-table">
        <tbody>
          <tr>
            <th>Id</th>
            <th>Título</th>
            <th>Actions</th>
          </tr>
          {this.state.storageEvents.map((event) => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.titulo}</td>
              <td>
                <div className="action-control">
                  {/* <button onClick={() => this.props.editEvent(event.id)}>
                    Edit
                  </button> */}
                  <button onClick={() => this.deleteEvent(event.id)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
