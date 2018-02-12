import React, { Component } from "react";
import { Field } from "redux-form";

class AddDiscoveryForm extends Component {
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
        <textarea {...field.input} name={field.name} />
        <p>{touched ? error : ""}</p>
      </div>
    );
  }
  render() {
    const { onSubmit, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          label="image"
          name="image_url"
          component={this.renderFileInput}
        />

        <Field label="Caption" name="content" component={this.renderField} />
        <button type="submit">Add Discovery </button>
      </form>
    );
  }
}

export default AddDiscoveryForm;
