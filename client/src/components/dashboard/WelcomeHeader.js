import React, { Component } from "react";
import styled from "styled-components";

const StyledWelcomeHeader = styled.h1`
  color: white;
  font-size: 24px;
  margin-left: 1.5rem;
`;

const StyledName = styled.span`
  font-size: 50px;
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
