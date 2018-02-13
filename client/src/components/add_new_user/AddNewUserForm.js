import React, { Component } from "react";
import { Field } from "redux-form";

class AddNewUserForm extends Component {
  adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

  renderFileInput = ({
    input: { value: omitValue, onChange, onBlur, ...inputProps },
    meta: { touched, error },
    ...props
  }) => {
    return (
      <div>
        <label htmlFor="image_url">
          Upload image
          <input
            onChange={this.adaptFileEventToValue(onChange)}
            onBlur={this.adaptFileEventToValue(onBlur)}
            type="file"
            id="image_url"
            accept="image/*"
            {...props.input}
            {...props}
          />
        </label>
        <p>{touched ? error : ""}</p>
      </div>
    );
  };

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
    const { onSubmit, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="first_name"
          label="First name"
          type="text"
          component={this.renderField}
        />
        <Field
          name="last_name"
          label="Last name"
          type="text"
          component={this.renderField}
        />
        <Field
          name="email"
          label="Email"
          type="email"
          component={this.renderField}
        />
        <Field
          name="picture_url"
          label="Upload picture"
          component={this.renderFileInput}
        />
        <label>User type: </label>
        <Field
          name="type"
          label="Volunteer"
          type="radio"
          value="Volunteer"
          component={this.renderField}
        />
        <Field
          name="type"
          label="Staff"
          type="radio"
          value="Staff"
          component={this.renderField}
        />
        <button type="submit">Add new user</button>
      </form>
    );
  }
}

export default AddNewUserForm;
