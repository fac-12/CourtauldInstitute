import React, { Component } from "react";
import styled from "styled-components";
import ReturnHomeBtn from "./ReturnHomeBtn";

const StyledHeader = styled.div`
  height: 75px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 2px 2px 0 #c9cccc;
`;

const StyledTitle = styled.h1`
  font-family: "Source Serif Pro", serif;
  font-weight: 600;
  font-size: 1.7rem;
  color: #333333;
  width: 100%;
  text-align: center;
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader id="header_container">
        <ReturnHomeBtn returnDashboard={this.props.returnDashboard} />
        <StyledTitle>{this.props.title}</StyledTitle>
      </StyledHeader>
    );
  }
}

export default Header;
