import React, { Component } from "react";
import { Field } from "redux-form";
import styled from "styled-components";

const StyledForm = styled.form`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledInputField = styled.div`
  margin-bottom: 2px;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  font-family: "Source Serif Pro", serif;
  margin-bottom: 23px;
`;

const StyledInput = styled.input`
  /* border: 1px solid red; */
  background: rgba(255, 255, 255, 0.05);
  width: 275px;
  height: 29px;
  color: white;
  border-radius: 4px;
  border: 1px solid rgba(205, 205, 205, 0.42);
  margin-top: 10px;
  font-family: "Source Serif Pro", serif;
  padding-left: 10px;
  font-size: 1rem;
`;

const StyledButton = styled.button`
  font-family: "Source Serif Pro", serif;
  background: rgba(45, 66, 98, 0.7);
  color: white;
  width: 275px;
  height: 56px;
  border: none;
  font-size: 1rem;
  border-radius: 8px;
  margin-bottom: 30px;
`;

const StyledError = styled.div`
  color: white;
  margin: 10px 0px;
  width: 275px;
  font-size: 0.85rem;
`;

const StyledFormError = styled.p`
  font-size: 0.85rem;
  margin-top: 7px;
  margin-bottom: 0;
  color: #e84118;
`;

class SignInForm extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    return (
      <StyledInputField>
        <label>{field.label}</label>
        <StyledInput
          style={touched && error ? { border: "1px solid #e84118" } : {}}
          type={field.type}
          {...field.input}
          name={field.name}
        />
        <StyledFormError>{touched ? error : ""}</StyledFormError>
      </StyledInputField>
    );
  }

  render() {
    const { handleSubmit, onSubmit, error } = this.props;
    return (
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="email"
          type="email"
          label="Email"
          component={this.renderField}
        />
        <Field
          name="password"
          type="password"
          label="Password"
          component={this.renderField}
        />
        <StyledButton type="submit">Log in</StyledButton>
        {error && <StyledError>{error}</StyledError>}
      </StyledForm>
    );
  }
}

export default SignInForm;
