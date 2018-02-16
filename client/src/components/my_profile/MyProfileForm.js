import React, { Component } from "react";
import { Field } from "redux-form";
import styled from "styled-components";
import { StyledForm } from "../styledDefaults/FormStyles";
import { StyledSubmitBtn } from "../styledDefaults/BtnStyles";
import { RenderInputWithError } from "../../helpers/reduxFormHelpers";
import AddButton from "../AddButton";

const StyledImg = styled.img`
  border-radius: 100%;
  width: 60%;
  max-width: 300px;
  align-self: center;
  margin: 1.5rem;
`;

class MyProfileContainer extends Component {
  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledImg src={this.props.picture_url} />
        <Field
          label="First Name"
          name="first_name"
          type="text"
          component={RenderInputWithError}
        />
        <Field
          label="Last Name"
          name="last_name"
          type="text"
          component={RenderInputWithError}
        />
        <Field
          label="Email (private)"
          name="email"
          type="text"
          component={RenderInputWithError}
        />
        <Field
          label="About Me"
          name="about_me"
          type="textarea"
          component={RenderInputWithError}
        />
        <Field
          label="Why I Volunteer"
          name="why_volunteer"
          type="textarea"
          component={RenderInputWithError}
        />
        <AddButton route="/resetPassword" purpose="Reset Password" />
        <StyledSubmitBtn type="submit">Update profile</StyledSubmitBtn>
      </StyledForm>
    );
  }
}

export default MyProfileContainer;
