import React, { Component } from "react";
import styled from "styled-components";

const StyledInputLabel = styled.div`
  /* border: 1px solid red; */
  font-size: 15px;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  /* border: 1px solid red; */
  background: rgba(255, 255, 255, 0.05);
  width: 275px;
  height: 29px;
  border-radius: 4px;
  border: 1px solid rgba(205, 205, 205, 0.42);
`;

const StyledButton = styled.button`
  font-family: "Source Serif Pro", serif;
  background: #2d4262;
  color: white;
  width: 275px;
  height: 56px;
  border: none;
  font-size: 16px;
  border-radius: 8px;
`;

class LoginForm extends Component {
  render() {
    return (
      <div>
        <StyledInputLabel htmlFor="">
          Email
          <StyledInput type="email" aria-label="Email" ariarequired="true" />
        </StyledInputLabel>
        <StyledInputLabel htmlFor="">
          Password
          <StyledInput
            type="password"
            aria-label="Password"
            ariarequired="true"
          />
        </StyledInputLabel>
        <StyledButton name="button">Login</StyledButton>
      </div>
    );
  }
}

export default LoginForm;
