import React, { Component } from "react";
import { Field } from "redux-form";
import {
  RenderFileInput,
  RenderInputWithError
} from "../../helpers/reduxFormHelpers";
import { StyledForm, StyledP } from "../styledDefaults/FormStyles";
import { StyledSubmitBtn } from "../styledDefaults/BtnStyles";

class AddUpdateForm extends Component {
  render() {
    const { onSubmit, handleSubmit } = this.props;
    return (
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Field
          label="Title:"
          name="title"
          component={RenderInputWithError}
          type="text"
        />
        <Field name="image_url" component={RenderFileInput} />
        <Field
          label="Update:"
          name="content"
          component={RenderInputWithError}
          type="textarea"
        />
        <StyledP>Tags:</StyledP>
        <Field
          name="project"
          id="project"
          component={RenderInputWithError}
          type="checkbox"
          label="Project"
        />

        <Field
          name="events/exhibitions"
          id="events/exhibitions"
          component={RenderInputWithError}
          type="checkbox"
          label="Events/Exhibitions"
        />

        <Field
          name="opportunities"
          id="opportunities"
          component={RenderInputWithError}
          type="checkbox"
          label="Opportunities"
        />

        <StyledSubmitBtn type="submit">Submit</StyledSubmitBtn>
      </StyledForm>
    );
  }
}

export default AddUpdateForm;
