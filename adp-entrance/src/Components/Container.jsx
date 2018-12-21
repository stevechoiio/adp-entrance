import React, { Component } from "react";
import Buttons from "./Buttons";
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Title</h1>
        <Buttons />
      </div>
    );
  }
}

export default Container;
