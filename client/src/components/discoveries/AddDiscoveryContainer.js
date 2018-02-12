import React, { Component } from "react";
import Header from "../Header";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import * as actions from "../../actions";
import AddDiscoveryForm from "./AddDiscoveryForm";

class AddDiscoveryContainer extends Component {
  submitForm(values) {
    values.user_id = this.props.userData.id;
    values.datetime = new Date(Date.now()).getTime();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Header title="Add Discovery" />
        <AddDiscoveryForm
          onSubmit={this.submitForm}
          handleSubmit={handleSubmit}
        />
      </div>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.image_url) {
    errors.image_url = "Please upload a picture.";
  }
  if (!values.content) {
    errors.content = "Please write a short description.";
  }
  return errors;
};

const mapStateToProps = ({ auth }) => ({
  userData: auth
});

export default reduxForm({
  validate,
  form: "AddDiscovery"
})(connect(mapStateToProps, actions)(AddDiscoveryContainer));
