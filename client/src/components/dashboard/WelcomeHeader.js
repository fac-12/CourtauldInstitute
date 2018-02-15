import React, { Component } from "react";
import styled from "styled-components";

const StyledWelcomeHeader = styled.h1`
  font-size: 1.5rem;
  margin-left: 1.5rem;
`;

const StyledName = styled.span`
  font-size: 50px;
  /* @media screen and (min-width: 400px) {
    display: block;
    text-align: center;
  } */
`;

class WelcomeHeader extends Component {
  render() {
    return (
      <div>
        <StyledWelcomeHeader>
          Welcome <br />
          <StyledName>{this.props.name}</StyledName>
        </StyledWelcomeHeader>
      </div>
    );
  }
}

export default WelcomeHeader;
