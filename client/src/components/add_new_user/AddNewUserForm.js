import React, { Component } from "react";
import { Field } from "redux-form";
import {
  StyledForm,
  StyledInput,
  StyledHideFileUpload,
  StyledErrorDiv,
  StyledLabel,
  StyledRadioLabel
} from "../styledDefaults/FormStyles";
import {
  StyledSubmitBtn,
  StyledFileUploadBtn
} from "../styledDefaults/BtnStyles";

class AddNewUserForm extends Component {
  adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

  RenderFileInput = ({
    input: { value: omitValue, onChange, onBlur, ...inputProps },
    meta: omitMeta,
    ...props
  }) => {
    const { touched, error } = omitMeta;
    return (
      <div>
        <StyledFileUploadBtn
          style={
            omitValue ? { background: "#c9cccc" } : { background: "#ffffff" }
          }
          htmlFor="image_url"
        >
          {omitValue
            ? `File Selected: ${omitValue.name}`
            : `Select a photo to upload`}
          <StyledHideFileUpload
            onChange={this.adaptFileEventToValue(onChange)}
            onBlur={this.adaptFileEventToValue(onBlur)}
            type="file"
            id="image_url"
            accept="image/*"
            {...props.input}
            {...props}
          />
        </StyledFileUploadBtn>
        <StyledErrorDiv>{touched ? error : ""}</StyledErrorDiv>
      </div>
    );
  };

  renderField(field) {
    const { meta: { touched, error } } = field;
    return (
      <div>
        <StyledLabel>{field.label}</StyledLabel>
        <StyledInput type={field.type} {...field.input} name={field.name} />
        <StyledErrorDiv>{touched ? error : ""}</StyledErrorDiv>
      </div>
    );
  }

  renderRadioGroup(field) {
    const { input, meta, options } = field;
    const hasError = meta.touched && meta.error;

    return (
      <div>
        <label>User type</label>
        {options.map(o => (
          <StyledRadioLabel key={o.value}>
            <input
              type="radio"
              {...input}
              value={o.value}
              checked={o.value === input.value}
            />
            {o.title}
          </StyledRadioLabel>
        ))}
        {hasError && (
          <StyledErrorDiv className="error">{meta.error}</StyledErrorDiv>
        )}
      </div>
    );
  }

  render() {
    const { onSubmit, handleSubmit } = this.props;
    return (
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
          component={this.RenderFileInput}
        />
        <Field
          component={this.renderRadioGroup}
          name="type"
          required={true}
          options={[
            { title: "Volunteer", value: "volunteer" },
            { title: "Staff", value: "staff" }
          ]}
        />
        <StyledSubmitBtn type="submit">Add new user</StyledSubmitBtn>
      </StyledForm>
    );
  }
}

export default AddNewUserForm;
