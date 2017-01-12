import React, { Component } from 'react';
import {Link} from 'react-router'
import turinglogo from '../imgs/turing-logo.png'

class Auth extends Component {

  render() {
    return (
      <div className="Auth-Options">
      <img className="landing-logo" src={turinglogo}/>
        <h2>Sign up for Dashboard</h2>
        <Link className="Auth-Link" to="/signup">Sign up</Link>
        <h2>Already have an account?</h2>
        <Link className="Auth-Link" to="/login">Log in</Link>
      </div>
    );
  }
}

export default Auth;
