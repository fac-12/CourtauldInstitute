import React, { Component } from "react";
import Header from "../Header";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import * as actions from "../../actions";
import AddUpdateForm from "./AddUpdateForm";
import { renderLinksAndLineBreaks } from "../../helpers/formatTextInput";

class AddUpdateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { button: "Submit" };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  submitForm = formValues => {
    this.setState({ button: "Saving..." });
    let tags = [];
    if (formValues.project) {
      tags.push("project");
    }
    if (formValues["events/exhibitions"]) {
      tags.push("events/exhibitions");
    }
    if (formValues.opportunities) {
      tags.push("opportunities");
    }
    const sendValues = {
      ...formValues,
      content: renderLinksAndLineBreaks(formValues.content),
      user_id: this.props.userData.id,
      first_name: this.props.userData.first_name,
      last_name: this.props.userData.last_name,
      datetime: new Date(Date.now()).getTime(),
      tags: tags
    };
    this.props.addUpdate(sendValues, () => {
      this.props.history.push("/updates");
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Header title="Add Update" returnDashboard={false} />
        <AddUpdateForm
          button={this.state.button}
          onSubmit={this.submitForm}
          handleSubmit={handleSubmit}
        />
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
