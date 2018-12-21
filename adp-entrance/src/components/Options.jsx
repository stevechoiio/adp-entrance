import React, { Component } from "react";
import Option from "./Option";
class Options extends Component {
  state = { questionPage: 0 };
  questionPageHandler = () => {
    //check to see if there are any questions left, if not, then shows result page
    if (this.state.questionPage == this.props.quiz["questions"].length - 1) {
      this.props.done();
    }
    this.setState({ questionPage: this.state.questionPage + 1 });
    console.log("clicked!!");
  };
  render() {
    return (
      <div>
        <h1>Your current score is:{this.props.currentScore}</h1>
        {console.log("your current score is:", this.props.currentScore)}
        {this.props.quiz["questions"][this.state.questionPage]["answers"].map(
          (option, index) => {
            return (
              <Option
                scoreHandler={this.props.scoreHandler}
                onClick={this.questionPageHandler}
                key={index}
                answer={option["value"]}
              >
                {option["content"]}
              </Option>
            );
          }
        )}
      </div>
    );
  }
}

export default Options;
