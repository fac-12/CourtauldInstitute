import React, { Component } from "react";
import { Field } from "redux-form";
import styled from "styled-components";
import {
  StyledForm,
  StyledInput,
  StyledCheckbox,
  StyledTextArea,
  StyledFileUpload,
  StyledSubmit,
  StyledErrorDiv,
  StyledFileUploadBtn,
  StyledP,
  StyledLabel,
  StyledTagsLabel
} from "../styledDefaults/FormStyles";

class AddUpdateForm extends Component {
  adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

  RenderFileInput = ({
    input: { value: omitValue, onChange, onBlur, ...inputProps },
    meta: omitMeta,
    ...props
  }) => {
    return (
      <StyledFileUploadBtn
        style={
          omitValue ? { background: "#c9cccc" } : { background: "#ffffff" }
        }
        htmlFor="image_url"
      >
        {omitValue
          ? `File Selected: ${omitValue.name}`
          : `Select a photo to upload (optional)`}
        <StyledFileUpload
          onChange={this.adaptFileEventToValue(onChange)}
          onBlur={this.adaptFileEventToValue(onBlur)}
          type="file"
          id="image_url"
          accept="image/*"
          {...props.input}
          {...props}
        />
      </StyledFileUploadBtn>
    );
  };

  RenderInputWithError(field) {
    const { meta: { touched, error } } = field;
    switch (field.type) {
      case "textarea":
        return (
          <div>
            <StyledLabel>{field.label}</StyledLabel>
            <div>
              <StyledTextArea {...field.input} />
              <StyledErrorDiv>{touched ? error : ""}</StyledErrorDiv>
            </div>
          </div>
        );
      case "checkbox":
        return (
          <div>
            <StyledTagsLabel>
              <StyledCheckbox type="checkbox" {...field.input} />
              {field.label}
            </StyledTagsLabel>
            <StyledErrorDiv>{touched ? error : ""}</StyledErrorDiv>
          </div>
        );
      default:
        return (
          <div>
            {field.label && <StyledLabel>{field.label}</StyledLabel>}
            <div>
              <StyledInput type={field.type} {...field.input} />
              <StyledErrorDiv>{touched ? error : ""}</StyledErrorDiv>
            </div>
          </div>
        );
    }
  }

  render() {
    const { onSubmit, handleSubmit } = this.props;
    return (
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Field
          label="Title:"
          name="title"
          component={this.RenderInputWithError}
          type="text"
        />
        <Field name="image_url" component={this.RenderFileInput} />
        <Field
          label="Update:"
          name="content"
          component={this.RenderInputWithError}
          type="textarea"
        />
        <StyledP>Tags:</StyledP>
        <Field
          name="project"
          id="project"
          component={this.RenderInputWithError}
          type="checkbox"
          label="Project"
        />

        <Field
          name="events/exhibitions"
          id="events/exhibitions"
          component={this.RenderInputWithError}
          type="checkbox"
          label="Events/Exhibitions"
        />

        <Field
          name="opportunities"
          id="opportunities"
          component={this.RenderInputWithError}
          type="checkbox"
          label="Opportunities"
        />

        <StyledSubmit type="submit">Submit</StyledSubmit>
      </StyledForm>
    );
  }
}

export default AddUpdateForm;
