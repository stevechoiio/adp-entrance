import React, { Component } from "react";
import { Button } from "react-bootstrap";


class Quizzes extends Component {
  
  render() {
    return (
      <div>
        <Button>{this.props["Quiz"][0]["answers"][0]["content"]}</Button>
        <Button>{this.props["Quiz"][0]["answers"][1]["content"]}</Button>
        <Button>{this.props["Quiz"][0]["answers"][2]["content"]}</Button>
        <Button onClick={}>{this.props["Quiz"][0]["answers"][3]["content"]}</Button>
      </div>
    );
  }
}

export default Quizzes;
