import React, { Component } from "react";

import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

// json data
const quiz = require("./quiz.json");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { quizNumber: false, viewResult: false, currentScore: 0 };
    this.quizHandler = this.quizHandler.bind(this);
  }

  quizHandler(key) {
    this.setState({ quizNumber: key });
    console.log("quiznumber has changed to key #", key);
  }
  viewHandler = () => {
    this.setState({ viewResult: true });
  };

  scoreHandler = () => {
    this.setState({ currentScore: this.state.currentScore + 1 });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        {/* render selection then when the user selects a quiz, it renders the quiz */}

        {!this.state.quizNumber ? (
          <Start
            quiz={quiz}
            quizNumber={this.state.quizNumber}
            quizHandler={this.quizHandler}
          />
        ) : this.state.viewResult ? (
          <Result currentScore={this.state.currentScore} />
        ) : (
          <Quiz
            done={this.viewHandler}
            quizNumber={this.state.quizNumber.key}
            scoreHandler={this.scoreHandler}
            currentScore={this.state.currentScore}
          />
        )}
      </div>
    );
  }
}

export default App;
