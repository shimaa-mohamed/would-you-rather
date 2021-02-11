import React, { Component, Fragment } from "react";

class PollInfo extends Component {
  render() {
    const op1_num_votes = this.props.question.optionOne.votes.length;
    const op2_num_votes = this.props.question.optionTwo.votes.length;
    const percentage_op1 = (
      (op1_num_votes / (op1_num_votes + op2_num_votes)) *
      100
    ).toFixed(2);
    const percentage_op2 = (
      (op2_num_votes / (op1_num_votes + op2_num_votes)) *
      100
    ).toFixed(2);
    console.log("reached pollinfo");
    return (
      <div className="mainInfo center">
        <ul className="ul-card">
          <li className="li">
            <img
              className="image"
              src={this.props.user.avatarURL}
              alt="Avatar"
            ></img>
            <div className="username-div">
              <p className="username">{`${this.props.user.name} Asks`}</p>
            </div>
          </li>
          <li className="li">
            <div className="margin">
              <p className="title">Would you rather</p>
              <div>
                {" "}
                <div className="choice">
                  {`Your Choice is :  ${
                    this.props.question[this.props.answer].text
                  }`} </div>
                  <br></br>
                  {this.props.question.optionOne.text}
                  {` ---->  got ${op1_num_votes} vote`}
                  <br />
                  <progress id="file" value={`${percentage_op1}`} max="100">
                    {percentage_op1}
                  </progress>
               
                <br></br>
                <div>
                  {this.props.question.optionTwo.text}
                  {` ---->  got ${op2_num_votes} vote`}
                  <br />
                  <progress id="file" value={`${percentage_op2}`} max="100">
                    {percentage_op2}
                  </progress>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default PollInfo;
