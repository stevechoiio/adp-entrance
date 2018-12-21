import React, { Component } from "react";

class Start extends Component {
  render() {
    const data = this.props.quiz["quizzes"];

    return (
      <div>
        <h1>Choose a Quiz!</h1>
        {/* renders list of quizzes from quiz.json */}
        {data.map((title, key) => {
          return (
            <button key={key} onClick={() => this.props.quizHandler({ key })}>
              {title["title"]}
            </button>
          );
        })}
      </div>
    );
  }
}

export default Start;
