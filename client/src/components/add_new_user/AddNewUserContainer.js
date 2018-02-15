import React, { Component } from "react";
import { reduxForm } from "redux-form";
import Header from "../Header";
import { addNewUser } from "../../actions";

import AddNewUserForm from "./AddNewUserForm";

class AddNewUserContainer extends Component {
  submitForm = values => {
    addNewUser(values);
    this.props.history.push("/");
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Header title="Add New User" returnDashboard={false} />
        <AddNewUserForm
          onSubmit={this.submitForm}
          handleSubmit={handleSubmit}
        />
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.first_name) {
    errors.first_name = "Please enter a first name.";
  }
  if (!values.last_name) {
    errors.last_name = "Please enter a last name.";
  }
  if (!values.first_name) {
    errors.first_name = "Please enter a first name.";
  }
  if (!values.email) {
    errors.email = "Please enter an email.";
  }
  if (!values.picture_url) {
    errors.picture_url = "Please upload a picture.";
  }
  if (!values.type) {
    errors.type = "Please select a user type.";
  }
  return errors;
};

export default reduxForm({
  validate,
  form: "AddNewUserForm"
})(AddNewUserContainer);
