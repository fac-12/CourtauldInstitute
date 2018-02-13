import React, { Component } from "react";
import { Field } from "redux-form";

class MyProfileContainer extends Component {
  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={this.props.picture_url} />
        <Field name="first_name" component="input" />
        <Field name="last_name" component="input" />
        <Field name="email" component="input" />
        <Field name="why_volunteer" component="textarea" />
        <Field name="about_me" component="textarea" />
        <button type="submit">Update profile</button>
      </form>
    );
  }
}

export default MyProfileContainer;
