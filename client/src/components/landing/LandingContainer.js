import React, { Component } from "react";
import { reduxForm } from "redux-form";
import SignInForm from "./SignInForm";
import * as actions from "../../actions";
import { connect } from "react-redux";

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

  return errors;
};

export default reduxForm({
  validate,
  form: "LogInForm"
})(connect(null, actions)(LandingContainer));
