import React, { Component } from "react";
import Header from "../Header";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import * as actions from "../../actions";
import AddDiscoveryForm from "./AddDiscoveryForm";
import { renderLinksAndLineBreaks } from "../../helpers/formatTextInput";

class AddDiscoveryContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  submitForm = values => {
    values.content = renderLinksAndLineBreaks(values.content);
    values.user_id = this.props.userData.id;
    values.first_name = this.props.userData.first_name;
    values.last_name = this.props.userData.last_name;
    values.datetime = new Date(Date.now()).getTime();
    this.props.addDiscovery(values, () => {
      this.props.history.push("/discoveries");
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Header title="Add Discovery" returnDashboard={false} />
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
