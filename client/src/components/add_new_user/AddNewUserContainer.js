import React, { Component } from "react";
import { reduxForm } from "redux-form";
import Header from "../Header";
import { addNewUser } from "../../actions";

import AddNewUserForm from "./AddNewUserForm";

class AddNewUserContainer extends Component {
  submitForm = values => {
    console.log(values);
    addNewUser(values);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Header title="Add New User" />
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

  return errors;
};

export default reduxForm({
  validate,
  form: "AddNewUserForm"
})(AddNewUserContainer);
