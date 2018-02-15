import React, { Component } from "react";
import Header from "../Header";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import * as actions from "../../actions";
import AddUpdateForm from "./AddUpdateForm";
import { renderLinksAndLineBreaks } from "../../helpers/formatTextInput";

class AddUpdateContainer extends Component {
  submitForm = formValues => {
    formValues.content = renderLinksAndLineBreaks(formValues.content);
    formValues.user_id = this.props.userData.id;
    formValues.first_name = this.props.userData.first_name;
    formValues.last_name = this.props.userData.last_name;
    formValues.datetime = new Date(Date.now()).getTime();
    formValues.tags = [];
    if (formValues.project) {
      formValues.tags.push("project");
    }
    if (formValues["events/exhibitions"]) {
      formValues.tags.push("events/exhibitions");
    }
    if (formValues.opportunities) {
      formValues.tags.push("opportunities");
    }
    this.props.addUpdate(formValues, () => {
      this.props.history.push("/updates");
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Header title="Add Update" returnDashboard={false} />
        <AddUpdateForm onSubmit={this.submitForm} handleSubmit={handleSubmit} />
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = "Please enter a title";
  }
  if (!values.content) {
    errors.content = "Please enter an update";
  }
  if (
    !(values.project || values.opportunities || values["events/exhibitions"])
  ) {
    errors.opportunities = "Please select at least one tag";
  }
  return errors;
}

const mapStateToProps = ({ auth }) => ({ userData: auth });

export default reduxForm({
  validate,
  form: "AddUpdateForm"
})(connect(mapStateToProps, actions)(AddUpdateContainer));
