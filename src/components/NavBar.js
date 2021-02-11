import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authuser";

class NavBar extends Component {
  handleLogOut=()=>{
    this.props.dispatch(setAuthedUser(null))
      }
    render() {
    const { authedUser, users } = this.props;

    return (
      <nav>
        <ul className="ul">
          <li className="li">
            
              <Link className="link" to="/">
              <button className="nav-btn">
                Home</button>
              </Link>
            
          </li>

          <li className="li">
            
              <Link className="link" to="/leaderboard">
              <button className="nav-btn">
                Leaderboard</button>
              </Link>
            
          </li>

          <li className="li">
            
              <Link className="link" to="/add">
              <button className="nav-btn">
                Add Poll</button>
              </Link>
            
          </li>
          
          <li className="floatRight">
            <div>
              <Link className="link" to="/" exact>
              <button className="nav-btn "onClick={this.handleLogOut}>
                LogOut</button>
              </Link>
            </div>
            
          </li>
          <li className="floatRight">
            <div className="profile-div">
              <img
                src={users[authedUser].avatarURL}
                className="profile"
                alt="Avatar"
              />
              <div className="span">
                <span>{users[authedUser].name}</span>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}
export default connect(mapStateToProps)(NavBar);
