import React, { Component } from "react";
import Buttons from "./Buttons";
import { Jumbotron } from "react-bootstrap";
import Quizzes from "./Quizzes";

class Container extends Component {
  state = {
    currentscore: 0
  };
  render() {
    return (
      <div>
        <h1>Current Score: {this.state.currentscore}</h1>
        <Jumbotron>
          <h1>List of Quizzes</h1>
          <Buttons Quiz={this.props.Quiz} />
        </Jumbotron>
      </div>
    );
  }
}

export default Container;
