import React, { Component } from "react";
import styled from "styled-components";

const StyledWelcomeHeader = styled.h1`
  font-size: 1.6rem;
  margin: 1.5rem;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
`;

class WelcomeHeader extends Component {
  render() {
    return (
      <div>
        <StyledWelcomeHeader>Welcome {this.props.name}</StyledWelcomeHeader>
      </div>
    );
  }
}

export default WelcomeHeader;
