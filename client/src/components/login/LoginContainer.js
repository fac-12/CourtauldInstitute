import React, { Component } from "react";
import { reduxForm } from "redux-form";
import SignInForm from "./SignInForm";
import styled from "styled-components";
import * as actions from "../../actions";
import { connect } from "react-redux";
import LoginBackground from "./loginBackground.png";
import courtauldLogo from "./courtauldLogo.png";

const StyledLoginContainer = styled.div`
  background-image: url(${LoginBackground});
  background-size: contain;
  background-repeat: no-repeat;
  height: 100vh;
  font-family: "Source Serif Pro", serif;
  color: #ecf0f1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginHeader = styled.h1`
  font-size: 25px;
  font-weight: normal;
  margin-bottom: 191px;
  text-align: center;
`;

const Logo = styled.img`
  height: 100px;
  margin-top: 56px;
  margin-bottom: 15px;
`;

class LandingContainer extends Component {
  submitForm = values => {
    this.props.loginUser(values);
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <StyledLoginContainer>
        <Logo src={courtauldLogo} alt="" />
        <LoginHeader>Volunteer Platform</LoginHeader>
        <SignInForm onSubmit={this.submitForm} handleSubmit={handleSubmit} />
      </StyledLoginContainer>
    );
  }
}

const validate = values => {
  const errors = {};

  return errors;
};

export default reduxForm({
  validate,
  form: "LogInForm"
})(connect(null, actions)(LandingContainer));
