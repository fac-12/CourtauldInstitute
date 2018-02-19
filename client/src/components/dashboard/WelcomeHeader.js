import React, { Component } from "react";
import styled from "styled-components";

const StyledWelcomeHeader = styled.h1`
  font-size: 1.6rem;
  margin: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 960px) {
    margin-top: 3rem;
    margin-left: 12rem;
  }
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
