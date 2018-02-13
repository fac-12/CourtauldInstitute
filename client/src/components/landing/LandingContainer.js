import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import SignInForm from "./SignInForm";
import * as actions from "../../actions";

class LandingContainer extends Component {
  submitForm = values => {
    this.props.loginUser(values);
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
  if (!values.email) {
    errors.email = "Please enter an email address";
  }
  if (!values.password) {
    errors.password = "Please enter a password";
  }
  return errors;
};

export default reduxForm({
  validate,
  form: "LogInForm"
})(connect(null, actions)(LandingContainer));
