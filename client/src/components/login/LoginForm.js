import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <label htmlFor="">
          Email
          <input type="email" aria-label="Email" ariarequired="true" />
        </label>
        <label htmlFor="">
          Password
          <input type="password" aria-label="Password" ariarequired="true" />
        </label>
      </div>
    );
  }
}

export default LoginForm;
