import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, initialize } from "redux-form";
import * as actions from "../../actions";
import Header from "../Header";
import ResetPassword from "./ResetPassword";
import { withRouter } from "react-router-dom";
import {
  renderLinksAndLineBreaks,
  removeHTMLtags
} from "../../helpers/formatTextInput";

class MyProfileContainer extends Component {
  onSubmit = values => {
    this.props.resetPassword(
      {
        id: this.props.auth.id,
        password: values.new_password
      },
      this.props.history.push("/")
    );
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Header title="Reset Password" returnDashboard={false} />
        <ResetPassword
          showMessage={!this.props.auth.pw_reset}
          onSubmit={this.onSubmit}
          handleSubmit={handleSubmit}
        />
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.new_password) {
    errors.new_password = "Please enter a password";
  }
  if (values.new_password !== values.confirm_password) {
    errors.confirm_password = "Passwords do not match";
  }
  return errors;
};

const mapStateToProps = ({ auth }) => ({
  auth
});

export default withRouter(
  reduxForm({
    validate,
    form: "ResetPasswordForm"
  })(connect(mapStateToProps, actions)(MyProfileContainer))
);
