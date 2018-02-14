import React from "react";
import {
  StyledInput,
  StyledCheckbox,
  StyledTextArea,
  StyledHideFileUpload,
  StyledErrorDiv,
  StyledLabel,
  StyledTagsLabel
} from "../components/styledDefaults/FormStyles";
import { StyledFileUploadBtn } from "../components/styledDefaults/BtnStyles";

export const RenderInputWithError = field => {
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
};

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

export const RenderFileInput = ({
  input: { value: omitValue, onChange, onBlur, ...inputProps },
  meta: omitMeta,
  ...props
}) => (
  <StyledFileUploadBtn
    style={omitValue ? { background: "#c9cccc" } : { background: "#ffffff" }}
    htmlFor="image_url"
  >
    {omitValue
      ? `File Selected: ${omitValue.name}`
      : `Select a photo to upload (optional)`}
    <StyledHideFileUpload
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      type="file"
      id="image_url"
      accept="image/*"
      {...props.input}
      {...props}
    />
  </StyledFileUploadBtn>
);
