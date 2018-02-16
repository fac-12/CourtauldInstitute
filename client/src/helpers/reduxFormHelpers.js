import React from "react";
import {
  StyledInput,
  StyledCheckbox,
  StyledTextArea,
  StyledHideFileUpload,
  StyledErrorDiv,
  StyledLabel,
  StyledTagsLabel,
  StyledFieldDiv,
  StyledRadioLabel
} from "../components/styledDefaults/FormStyles";
import { StyledFileUploadBtn } from "../components/styledDefaults/BtnStyles";

export const RenderInputWithError = field => {
  const { meta: { touched, error } } = field;
  switch (field.type) {
  case "textarea":
    return (
      <StyledFieldDiv>
        <StyledLabel>{field.label}</StyledLabel>
        <StyledTextArea {...field.input} />
        <StyledErrorDiv>{touched ? error : ""}</StyledErrorDiv>
      </StyledFieldDiv>
    );
  case "checkbox":
    return (
      <StyledFieldDiv>
        <StyledTagsLabel>
          <StyledCheckbox type="checkbox" {...field.input} />
          {field.label}
        </StyledTagsLabel>
        <StyledErrorDiv>{touched ? error : ""}</StyledErrorDiv>
      </StyledFieldDiv>
    );
  default:
    return (
      <StyledFieldDiv>
        {field.label && <StyledLabel>{field.label}</StyledLabel>}
        <StyledInput type={field.type} {...field.input} />
        <StyledErrorDiv>{touched ? error : ""}</StyledErrorDiv>
      </StyledFieldDiv>
    );
  }
};

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

export const RenderFileInput = ({
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
          onChange={adaptFileEventToValue(onChange)}
          onBlur={adaptFileEventToValue(onBlur)}
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

export const RenderRadioGroup = field => {
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
};
