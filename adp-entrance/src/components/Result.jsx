import React, { Component } from "react";
class Result extends Component {
  state = {};
  render() {
    return <h1>Result page, your score is: {this.props.currentScore}</h1>;
  }
}

export default Result;
