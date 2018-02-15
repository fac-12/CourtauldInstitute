import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, initialize } from "redux-form";
import * as actions from "../../actions";
import Header from "../Header";
import MyProfileForm from "./MyProfileForm";
import {
  renderLinksAndLineBreaks,
  removeHTMLtags
} from "../../helpers/formatTextInput";

class MyProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(initialize("MyProfileForm", this.props.initialValues));
  }
  onSubmit = values => {
    values.about_me = renderLinksAndLineBreaks(values.about_me);
    values.why_volunteer = renderLinksAndLineBreaks(values.why_volunteer);
    this.props.updateProfile(values);
    this.props.history.push("/");
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
  initialValues: {
    ...auth,
    about_me: removeHTMLtags(auth.about_me),
    why_volunteer: removeHTMLtags(auth.why_volunteer)
  }
});

export default reduxForm({
  validate,
  form: "MyProfileForm"
})(connect(mapStateToProps, actions)(MyProfileContainer));
