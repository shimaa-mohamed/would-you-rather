import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleAddQues } from "../actions/shared";
import NavBar from "./NavBar";


class AddPoll extends Component {
  state = { op1: "", op2: "",done:false };
  handleInput = (e) => {
    if (e.target.id === "OptionOne") {
      this.setState({ op1: e.target.value });
    } else {
      this.setState({ op2: e.target.value });
    }
  };
  handleAdd = () => {
    const optionOneText = this.state.op1;
    const optionTwoText = this.state.op2;
    if (this.state.op1 !== "" && this.state.op2 !== "") {
      this.props.dispatch(handleAddQues(optionOneText, optionTwoText)).then(()=>{console.log("done")});
    } else {
      alert("Add both options!");
    }
  };
  render() {
    return (
      <div>
        <NavBar/>
        <div className="login">
          <div>
            <p className="title">Would You Rather App</p>
          </div>
          <div>
            {/* <form onSubmit={this.handleLogin}> */}
            <div>
              <input
                className="input"
                placeholder="Enter your first Option"
                type="text"
                id="OptionOne"
                value={this.state.op1}
                onChange={this.handleInput}
              ></input>
              <p className="or">or</p>
              <input
                className="input"
                placeholder="Enter your second Option"
                type="text"
                id="OptionTwo"
                value={this.state.op2}
                onChange={this.handleInput}
              ></input>
            </div>

            <Link to="/">
              <button onClick={this.handleAdd}className="card-btn">Add Poll</button>
            </Link>
            {/* </form> */}
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(AddPoll);
