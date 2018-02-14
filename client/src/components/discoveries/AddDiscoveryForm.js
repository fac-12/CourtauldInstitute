import React, { Component } from "react";
import { Field } from "redux-form";
import {
  RenderFileInput,
  RenderInputWithError
} from "../../helpers/reduxFormHelpers";
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
  render() {
    const { onSubmit, handleSubmit } = this.props;
    return (
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Field label="image" name="image_url" component={RenderFileInput} />
        <Field
          label="Caption"
          name="content"
          type="textarea"
          component={RenderInputWithError}
        />
        <StyledSubmitBtn type="submit">Add Discovery </StyledSubmitBtn>
      </StyledForm>
    );
  }
}

export default AddDiscoveryForm;
