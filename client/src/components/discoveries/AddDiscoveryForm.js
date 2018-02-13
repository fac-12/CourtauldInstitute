import React, { Component } from "react";
import { Field } from "redux-form";
import {
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledHideFileUpload,
  StyledErrorDiv,
  StyledP,
  StyledLabel,
  StyledTagsLabel
} from "../styledDefaults/FormStyles";
import {
  StyledSubmitBtn,
  StyledFileUploadBtn
} from "../styledDefaults/BtnStyles";
class AddDiscoveryForm extends Component {
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
        <label>{field.label}</label>
        <StyledTextArea {...field.input} name={field.name} />
        <StyledErrorDiv>{touched ? error : ""}</StyledErrorDiv>
      </div>
    );
  }
  render() {
    const { onSubmit, handleSubmit } = this.props;
    return (
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Field
          label="image"
          name="image_url"
          component={this.RenderFileInput}
        />

        <Field label="Caption" name="content" component={this.renderField} />
        <StyledSubmitBtn type="submit">Add Discovery </StyledSubmitBtn>
      </StyledForm>
    );
  }
}

export default AddDiscoveryForm;
