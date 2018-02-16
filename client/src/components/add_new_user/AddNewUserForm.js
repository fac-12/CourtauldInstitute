import React, { Component } from "react";
import { Field } from "redux-form";
import styled from "styled-components";
import { StyledForm } from "../styledDefaults/FormStyles";
import { StyledSubmitBtn } from "../styledDefaults/BtnStyles";
import {
  RenderFileInput,
  RenderInputWithError,
  RenderRadioGroup
} from "../../helpers/reduxFormHelpers";

const StyledParagraph = styled.p`
  text-align: center;
  margin: 1rem auto;
`;

class AddNewUserForm extends Component {
  render() {
    const { onSubmit, handleSubmit, pristine, submitting, reset } = this.props;
    return (
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="first_name"
          label="First name"
          type="text"
          component={RenderInputWithError}
        />
        <Field
          name="last_name"
          label="Last name"
          type="text"
          component={RenderInputWithError}
        />
        <Field
          name="email"
          label="Email"
          type="email"
          component={RenderInputWithError}
        />
        <Field
          name="picture_url"
          label="Upload picture"
          component={RenderFileInput}
        />
        <Field
          component={RenderRadioGroup}
          name="type"
          required
          options={[
            { title: "Volunteer", value: "volunteer" },
            { title: "Staff", value: "staff" }
          ]}
        />
        {!this.props.done && (
          <StyledSubmitBtn type="submit" disabled={pristine || submitting}>
            Add New User
          </StyledSubmitBtn>
        )}
        {this.props.done && (
          <StyledSubmitBtn disabled={pristine || submitting} onClick={reset}>
            Clear Form
          </StyledSubmitBtn>
        )}
        {this.props.done && <StyledParagraph>User added.</StyledParagraph>}
      </StyledForm>
    );
  }
}

export default AddNewUserForm;
