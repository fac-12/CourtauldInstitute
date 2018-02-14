import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import SignInForm from "./SignInForm";
import styled from "styled-components";
import * as actions from "../../actions";
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
  justify-content: space-between;
`;

const LoginHeader = styled.h1`
  font-size: 25px;
  font-weight: normal;
  text-align: center;
`;

const Logo = styled.img`
  height: 100px;
  margin-top: 56px;
  margin-bottom: 15px;
`;

class LandingContainer extends Component {
  componentDidMount() {
    if (this.props.auth) {
      this.props.logoutUser();
    }
  }
  submitForm = values => {
    this.props.loginUser(values);
  };
  render() {
    const { handleSubmit, error } = this.props;
    return (
      <StyledLoginContainer>
        <div>
          <Logo src={courtauldLogo} alt="" />
          <LoginHeader>Volunteer Platform</LoginHeader>
        </div>
        <SignInForm
          onSubmit={this.submitForm}
          handleSubmit={handleSubmit}
          error={error}
        />
      </StyledLoginContainer>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Please enter an email address";
  }
  if (!values.password) {
    errors.password = "Please enter a password";
  }
  return errors;
};

const mapStateToProps = ({ error, auth }) => ({ error: error.login, auth });

export default reduxForm({
  validate,
  form: "LogInForm"
})(connect(mapStateToProps, actions)(LandingContainer));
