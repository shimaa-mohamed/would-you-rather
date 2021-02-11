import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authuser";

class PageNotFound extends Component {
  handleError = () => {
    this.props.dispatch(setAuthedUser(null));
  };
  render() {
    return (
      <div className="center-error">
        <p className="error">Error 404</p>
        <Link to="/">
          <button onClick={this.handleError} className="error-btn">
            Back to Site
          </button>
        </Link>
      </div>
    );
  }
}

export default connect()(PageNotFound);
