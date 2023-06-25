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

  render() {
    return (
      <table id="private-archi-table">
        <tbody>
          <tr>
            <th>Id</th>
            <th>Título</th>
            <th>Actions</th>
          </tr>
          {events.map((building) => (
            <tr key={building.id}>
              <td>{building.id}</td>
              <td>{building.titulo}</td>
              <td>
                <div className="action-control">
                  <button onClick={() => this.props.editBuilding(building.id)}>
                    Edit
                  </button>
                  <button onClick={() => this.deleteBuilding(building.id)}>
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
