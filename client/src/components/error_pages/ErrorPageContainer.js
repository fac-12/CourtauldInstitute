import React, { Component } from "react";
import Styled from "styled-components";
import ClientError from "./client_err_pic.jpg";

const StyledDiv = Styled.div`
  width: 100%;
  background-image: url(${ClientError});
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledP = Styled.p`
  color: white;
  font-size: 3rem;
  text-align: center;
`;

class ErrorPageContainer extends Component {
  render() {
    return (
      <StyledDiv>
        <StyledP>{this.props.message}</StyledP>
      </StyledDiv>
    );
  }
}

export default ErrorPageContainer;
