import React, { Component } from "react";
import LoginForm from "./LoginForm";
import LoginBackground from "./loginBackground.png";

import styled from "styled-components";

const StyledLoginContainer = styled.div`
  background-image: url(${LoginBackground});
  background-size: contain;
`;

const Login = styled.div`
  font-family: "Source Serif Pro", serif;
  border: 1px solid red;
  height: 100vh;
  background-size: contain;
  color: #ecf0f1;
  margin-left: 50px;
`;

const LoginHeader = styled.h1`
  border: 1px solid red;
  font-size: 25px;
  font-weight: normal;
  margin: 0 auto;
  text-align: center;
`;

class LoginContainer extends Component {
  render() {
    return (
      <StyledLoginContainer>
        <Login>
          <LoginHeader>Volunteer Platform</LoginHeader>
          <LoginForm />
        </Login>
      </StyledLoginContainer>
    );
  }
}

export default LoginContainer;
