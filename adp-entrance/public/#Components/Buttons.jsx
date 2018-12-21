import React, { Component } from "react";
import { Button } from "react-bootstrap";
class Buttons extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.Quiz["quizzes"][0]["title"]}</h1>
        {/* <Button>{this.props.Quiz["quizzes"][0]["title"]}</Button>
        <Button>{this.props.Quiz["quizzes"][1]["title"]}</Button> */}
      </div>
    );
  }
}

export default Buttons;
