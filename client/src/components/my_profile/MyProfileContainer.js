import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, initialize } from "redux-form";
import * as actions from "../../actions";
import Header from "../Header";
import MyProfileForm from "./MyProfileForm";

class MyProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(initialize("MyProfileForm", this.props.initialValues));
  }
  onSubmit = values => {
    console.log(values);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Header title="My Profile" returnDashboard />
        <MyProfileForm
          onSubmit={this.onSubmit}
          handleSubmit={handleSubmit}
          picture_url={this.props.initialValues.picture_url}
        />
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  return errors;
};

const mapStateToProps = ({ auth }) => ({
  initialValues: auth
});

export default reduxForm({
  validate,
  form: "MyProfileForm"
})(connect(mapStateToProps, actions)(MyProfileContainer));
