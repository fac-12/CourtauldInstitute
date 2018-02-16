import React, { Component } from "react";
import { Field } from "redux-form";
import styled from "styled-components";
import { StyledForm } from "../styledDefaults/FormStyles";
import { StyledSubmitBtn } from "../styledDefaults/BtnStyles";
import { RenderInputWithError } from "../../helpers/reduxFormHelpers";

const StyledP = styled.p`
  margin: 5px 0 20px 0;
`;

class MyProfileContainer extends Component {
  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        {this.props.showMessage && (
          <StyledP>Welcome! Please reset your password.</StyledP>
        )}
        <Field
          label="New Password"
          name="new_password"
          type="password"
          component={RenderInputWithError}
        />
        <Field
          label="Confirm Password"
          name="confirm_password"
          type="password"
          component={RenderInputWithError}
        />
        <StyledSubmitBtn type="submit">Reset password</StyledSubmitBtn>
      </StyledForm>
    );
  }
}

export default MyProfileContainer;
