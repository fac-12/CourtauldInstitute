import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  border: 1px solid #ecf0f1;
  width: 170px;
  height: 110px;
  background: none;
  border-radius: 8px;
`;

const StyledTitle = styled.h1`
  font-family: "Source Serif Pro", serif;
  font-size: 18px;
`;

const StyledSubtitle = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  font-weight: 100;
  font-size: 12px;
`;

class NavButton extends Component {
  render() {
    if (this.props.route !== "/bookShift") {
      return (
        <StyledLink to={this.props.route}>
          <StyledTitle>{this.props.title}</StyledTitle>
          <StyledSubtitle>{this.props.subtitle}</StyledSubtitle>
        </StyledLink>
      );
    }
    return (
      <a href="https://www.google.com">
        <StyledTitle>{this.props.title}</StyledTitle>
        <StyledSubtitle>{this.props.subtitle}</StyledSubtitle>Book shift
      </a>
    );
  }
}

export default NavButton;
