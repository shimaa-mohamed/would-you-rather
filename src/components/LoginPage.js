import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authuser";
import { Link } from "react-router-dom";

class LoginPage extends Component {
  state = {
    selectedUser: "",
  };

  handleLogin = (e) => {
    const { selectedUser } = this.state;
    if (selectedUser) {
      this.props.dispatch(setAuthedUser(selectedUser));
    } else alert("Select a user!");
  };

  onSelectUser = (selectedUser) => this.setState({ selectedUser });

  render() {
    const { users } = this.props;
    const { selectedUser } = this.state;

    return (
        <div className="login">
          <div>
            <p className="title">Would You Rather App</p>
          </div>
          <div>
            {/* <form onSubmit={this.handleLogin}> */}
              <label>Select a user: </label>
              <div>
                <select className="select"
                  onChange={(e) => this.onSelectUser(e.target.value)}
                >
                  <option  className="option"value=""> Select User</option>
                  {Object.keys(users).map((user) => (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  ))}
                </select>
              </div>

              <button onClick={this.handleLogin}className="login-but"> Login In</button>
            {/* </form> */}
          </div>
        </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}
export default connect(mapStateToProps)(LoginPage);
