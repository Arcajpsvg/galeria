import { Component } from "react";

export default class PrivateListEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storageEvents: JSON.parse(localStorage.getItem("events"))
        ? Array.from(JSON.parse(localStorage.getItem("events")))
        : [],
    };
  }
  //   finalEventList = events.concat(storageEvents);

  render() {
    return (
      <></>
    );
  }
}
