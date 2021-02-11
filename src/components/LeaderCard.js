import React, { Component } from "react";

class LeaderCard extends Component {
  render() {
    const num_Questions = this.props.user.questions.length;
    const ans_arr = Object.keys(this.props.user.answers);
    const num_Anserws = ans_arr.length;
    return (
      <div className="card">
        <div className="mainInfo">
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
                <div className="score-div"><p className="pcard">Number of Asked questions : {num_Questions} </p>
                <br></br>
                <p className="pcard">Number of Answered questions : {num_Anserws}</p>
                <hr></hr>
                <p className="score">{`score :   ${
                  num_Questions + num_Anserws
                }`}</p></div>
                
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LeaderCard;
