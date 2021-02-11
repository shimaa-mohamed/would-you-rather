import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleSaveQuesAnswer } from "../actions/shared";
import PollInfo from "./Poll_Info";
import NavBar from "./NavBar";

class AnswerCard extends Component {
  state = { answer: "", submitted: false };
  componentDidMount(){
    const { question_id, authedUser,users } = this.props;
    const answers = Object.keys(users[authedUser].answers);
    if (answers.includes(question_id)) {
        this.setState({ submitted: true });
      }
  }
  handleRadio = (e) => {
    this.setState({ answer: e.target.value });
  };
  handleSubmit = () => {
    const { question_id } = this.props;

    this.props
      .dispatch(handleSaveQuesAnswer(question_id, this.state.answer))
      .then(() => this.setState({ submitted: true }));
  };
  render() {
    const { question_id, question, authedUser, author, users } = this.props;

    let card_submit_res;
    if (this.state.submitted === false) {
      card_submit_res = (
        <div className="addPoll">
          <ul className="ul-card">
            <li className="li">
              <img
                className="image"
                src={this.props.users[this.props.author].avatarURL}
                alt="Avatar"
              ></img>
              <div className="username-div">
                <p className="username">{`${
                  this.props.users[this.props.author].name
                } Asks`}</p>
              </div>
            </li>
            <li className="li">
              <div className="margin">
                <p className="title">Would you rather</p>
                <div>
                  <input
                    type="radio"
                    id="OptionOne"
                    name="ques"
                    value={"optionOne"}
                    onClick={this.handleRadio}
                  />
                  <label className="card-text label-radio">
                    {this.props.question.optionOne.text}
                  </label>
                  <br></br>
                  <p className="or">or</p>
                  <div>
                    <input
                      type="radio"
                      id="OptionTwo"
                      name="ques"
                      value={"optionTwo"}
                      onClick={this.handleRadio}
                    />
                    <label className="card-text label-radio">
                      {this.props.question.optionTwo.text}
                    </label>
                  </div>

                  <button onClick={this.handleSubmit} className="card-btn">
                    Submit
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      );
    } else {
        card_submit_res=
      <PollInfo
        question={this.props.question}
        user={this.props.users[this.props.question.author]}
        answer={users[authedUser].answers[question_id]}
      />;
    }
    return (
      <div>
        <NavBar />
        {card_submit_res}
      </div>
    );
  }
}
function mapStateToProps({ authedUser, users, questions },props) {
  const { question_id } = props.match.params;
  const question = questions[question_id];
  const author = question.author;


  return {
    question_id,
    question,
    authedUser,
    author,
    users,
    
  };
}

export default connect(mapStateToProps)(AnswerCard);
