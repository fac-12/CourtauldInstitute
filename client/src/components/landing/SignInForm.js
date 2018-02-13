import React, { Component } from "react";
import { Field } from "redux-form";

class SignInForm extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    return (
      <div>
        <label>{field.label}</label>
        <input type={field.type} {...field.input} name={field.name} />
        <p>{touched ? error : ""}</p>
      </div>
    );
  }

  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="email"
          type="email"
          label="Email"
          component={this.renderField}
        />
        <Field
          name="password"
          type="password"
          label="Password"
          component={this.renderField}
        />
        <button type="submit">Log in</button>
      </form>
    );
  }
}

export default SignInForm;
