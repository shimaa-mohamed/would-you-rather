import React, { Component } from 'react';
import LoginPage from './LoginPage';
import {handleInitialUsers}from"../actions/shared"
import { connect } from "react-redux";

class App extends Component {
  state={
    loaded:false
  }
  componentDidMount() {
    const AUTHED_ID = null;
    this.props.dispatch((handleInitialUsers(AUTHED_ID))).then(() => {
      console.log("loaded");
      this.setState({loaded:true})
    });
  }
  state = {  }
  
  render() { 
    if(!this.state.loaded){
      return <p>loading</p>
    }
    return (<div><LoginPage/></div>  );
  }
}
 
export default connect()(App) ;
