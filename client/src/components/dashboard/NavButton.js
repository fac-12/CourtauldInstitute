import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  border: 1px solid #ecf0f1;
  width: 100%;
  height: 6rem;
  background: none;
  border-radius: 8px;
  text-decoration: none;
  margin: 7px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr auto;
`;

const StyledA = styled.a`
  border: 1px solid #ecf0f1;
  width: 100%;
  height: 6rem;
  background: none;
  border-radius: 8px;
  text-decoration: none;
  margin: 7px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr auto;
`;

const StyledTitle = styled.h1`
  font-family: "Source Serif Pro", serif;
  font-size: 1.125rem;
  color: #333333;
  margin: 15px 10px 5px 10px;
  text-align: center;
  align-self: center;
`;

const StyledSubtitle = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  font-weight: 100;
  font-size: 0.75rem;
  color: #333333;
  margin: 5px 15px 15px 15px;
  text-align: center;
  align-self: center;
`;

class NavButton extends Component {
  render() {
    if (
      this.props.route !== "/bookShift" &&
      (this.props.route !== "/addNewUser" || this.props.userType === "staff") &&
      (this.props.route !== "/resetPassword" || this.props.resetPassword)
    ) {
      return (
        <StyledLink to={this.props.route}>
          <StyledTitle>{this.props.title}</StyledTitle>
          <StyledSubtitle>{this.props.subtitle}</StyledSubtitle>
        </StyledLink>
      );
    }
    if (
      this.props.route === "/bookShift" &&
      this.props.userType === "volunteer"
    ) {
      return (
        <StyledA
          href="https://timecounts.org/courtauldvolunteers/me/assignments/963?view=available"
          target="_blank"
        >
          <StyledTitle>{this.props.title}</StyledTitle>
          <StyledSubtitle>{this.props.subtitle}</StyledSubtitle>
        </StyledA>
      );
    }
    return null;
  }
}

export default NavButton;
