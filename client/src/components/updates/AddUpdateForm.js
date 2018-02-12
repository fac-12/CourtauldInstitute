import React, { Component } from "react";
import { Field } from "redux-form";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 20px;
  font-family: "Open Sans", sans-serif;
`;

const StyledInput = styled.input`
  border: 2px;
  border-style: inset;
  border-color: #ecf0f1;
  margin: 5px 0 10px 0;
  width: 100%;
`;
const StyledCheckbox = styled.input`
  margin: 5px 5px 2px 0;
  position: relative;
  top: 1px;
`;
const StyledTextArea = styled.textarea`
  border: 2px;
  border-style: inset;
  border-color: #ecf0f1;
  margin: 5px 0 10px 0;
  width: 100%;
  height: 100px;
`;
const StyledFileUpload = StyledInput.extend`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;
const StyledSubmit = styled.button`
  border: 1px solid #c9cccc;
  background: #ffffff;
  border-radius: 8px;
  font-family: "Open Sans", sans-serif;
  font-size: 0.75rem;
  color: #333333;
  padding: 5px 10px;
  margin: 10px 0;
  outline: none;
  text-decoration: none;
  display: block;
  text-align: center;
`;

const StyledErrorDiv = styled.div`
  color: red;
`;

const StyledFileUploadBtn = styled.label`
  border: 1px solid #c9cccc;
  background: #ffffff;
  border-radius: 8px;
  font-family: "Open Sans", sans-serif;
  font-size: 0.75rem;
  color: #333333;
  padding: 5px 10px;
  margin: 10px 0;
  outline: none;
  text-decoration: none;
  display: block;
  text-align: center;
  cursor: pointerl;
`;

const StyledP = styled.p`
  margin: 5px 0;
  font-family: "Source Serif Pro", serif;
  font-weight: 600;
`;
const StyledLabel = styled.label`
  font-family: "Source Serif Pro", serif;
  font-weight: 600;
`;
const StyledTagsLabel = styled.label`
  font-size: 0.9rem;
`;

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
