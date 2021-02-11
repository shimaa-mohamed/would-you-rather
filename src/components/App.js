import React, { Component, Fragment } from "react";
import LoginPage from "./LoginPage";
import { handleInitialUsers } from "../actions/shared";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import DashBoard from "./DashBoard";
import { handleInitialQues } from "../actions/shared";
import PageNotFound from "./PageNotFound"
import AddPoll from "./AddPoll";
import LeaderBoard from "./LeaderBoard";
import AnswerCard from "./AnswerCard";

class App extends Component {
  state = {
    loaded: false,
  };
  componentDidMount() {
    const AUTHED_ID = null;
    this.props.dispatch(handleInitialUsers(AUTHED_ID)).then(() => {
      console.log("loaded");
      this.setState({ loaded: true });
      this.props.dispatch(handleInitialQues()).then(() => console.log("done"));
      // this.props.dispatch(handleInitialQues()).then(() => console.log("done"));
    });
  }
  state = {};

  render() {
    if (!this.state.loaded) {
      return <p>loading</p>;
    }
    return (
      <Router>
        {this.props.authedUser === null ? (
          <Route path="*" exact component={LoginPage} />
        ) : (
          <Fragment>
            <div>
              <Switch>
                <Route exact path="/" component={DashBoard} />
                <Route path="/add" exact component={AddPoll} />
                <Route path="/questions/:question_id" component={AnswerCard} />
                <Route path="/leaderboard" exact component={LeaderBoard} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </Fragment>
        )}
      </Router>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(App);
