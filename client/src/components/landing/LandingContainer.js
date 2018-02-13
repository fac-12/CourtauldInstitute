import React, { Component } from "react";
import { reduxForm } from "redux-form";
import SignInForm from "./SignInForm";
import { loginUser } from "../../actions";

class LandingContainer extends Component {
  submitForm = values => {
    console.log(values);
    console.log("login in ", loginUser);
    loginUser(values);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <SignInForm onSubmit={this.submitForm} handleSubmit={handleSubmit} />
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  return errors;
};

export default reduxForm({
  validate,
  form: "LogInForm"
})(LandingContainer);
