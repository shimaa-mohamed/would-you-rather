import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";


class Question extends Component {
  state = {navToPage:""};
  render() {
    const submit_or_result =this.props.submit_or_result;

    
    return (
      <div className="mainInfo">
        <ul className="ul-card">
          <li className="li"><img
            className="image"
            src={this.props.user.avatarURL}
            alt="Avatar"
          ></img>
          <div className="username-div"><p className="username">{`${this.props.user.name} Asks`}</p></div></li>
          <li className="li">
          <div className="margin">
            <p className="title">Would you rather</p>
            <p className="pcard">{this.props.question.optionOne.text}</p>
            <p className="or">or</p>
            <p className="pcard">{this.props.question.optionTwo.text}</p>
            <Link to={`/questions/${this.props.question.id}`}><button className="card-btn">{submit_or_result}</button></Link>
          </div>
          </li>
          
        </ul>
      </div>
    );
  }
}
function mapStateToProps({ authedUser }, { user, question,submit_or_result }) {
  return {
    authedUser,
    user,
    question,
    submit_or_result
  };
}

export default connect(mapStateToProps)(Question);
