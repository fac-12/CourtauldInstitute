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
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  onSubmit = values => {
    const sendValues = {
      ...values,
      about_me: renderLinksAndLineBreaks(values.about_me),
      why_volunteer: renderLinksAndLineBreaks(values.why_volunteer)
    };
    this.props.updateProfile(sendValues);
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
  if (!values.first_name) {
    errors.first_name = "Please enter a name";
  }
  if (!values.last_name) {
    errors.last_name = "Please enter a name or initial";
  }
  if (!values.email) {
    errors.email =
      "Please enter an email. It will not be shown to other users.";
  }
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
