import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialQues } from "../actions/shared";
import NavBar from "../components/NavBar";
import Question from "./Question";

class DashBoard extends Component {
  state = {
    selectedTab: "unAnswered",
  };

  componentDidMount() {
    this.props.dispatch(handleInitialQues());
    // this.props.dispatch(handleInitialQues()).then(() => console.log("done"));
  }

  handleBut = (e) => {
    this.setState({ selectedTab: e.target.value });
    if (e.target.value === "Answered") {
      this.setState({ sortedKeys: this.fetchAnswered() });
    }
  };

  render() {
    const {
      answeredQues,
      authedUser,
      user,
      unAnsweredQues,
      users,
      questions,
    } = this.props;
    const unAnswerdList = (
      <div>
        <ul>
          {unAnsweredQues.map((e) => {
            return (
              <li className="list" key={e}>
                <Question
                  user={users[questions[e].author]}
                  question={questions[e]}
                  submit_or_result="Answer"
                />
              </li>
            );
          })}
        </ul>
      </div>
    );

    const answerdList = (
      <div>
        <ul>
          {answeredQues.map((e) => {
            return (
              <li className="list" key={e}>
                <Question
                  user={users[questions[e].author]}
                  question={questions[e]}
                  submit_or_result="Result"
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
    let listToShow;
    if (this.state.selectedTab === "unAnswered") {
      listToShow = unAnswerdList;
    } else {
      listToShow = answerdList;
    }
    return (
      <div>
        <NavBar />
        <div className="toggle">
          <button
            value="unAnswered"
            className="toogle-but"
            onClick={this.handleBut}
          >
            UnAnswerd
          </button>
          <button
            value="answerd"
            className="toogle-but"
            onClick={this.handleBut}
          >
            Answered
          </button>
        </div>
        {listToShow}
        {/* {unAnswerdList} */}
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  const user = users[authedUser];
  const ans_keys = Object.keys(user.answers);
  console.log(ans_keys);


  const answeredQues=questions?ans_keys.sort((a, b) => {
    return questions[b].timestamp-questions[a].timestamp;
  }):[]
  console.log(answeredQues);

  
  const unAnsweredQues = Object.keys(questions)
    .filter((quesID) => !answeredQues.includes(quesID))
    .sort((a, b) => {
      return questions[b].timestamp - questions[a].timestamp;
    });
  return {
    answeredQues,
    unAnsweredQues,
    users,
    questions,
    authedUser,
    user,
  };
}

export default connect(mapStateToProps)(DashBoard);
