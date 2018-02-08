import React, { Component } from "react";
import styled from "styled-components";
import ReturnHomeBtn from "./ReturnHomeBtn";

const StyledHeader = styled.div`
  height: 75px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 2px 2px 0 #c9cccc;
  display: grid;
  grid-template-columns: 35px auto 35px;
  grid-template-areas: "left center .";
`;

const StyledTitle = styled.h1`
  font-family: SourceSerifPro;
  font-weight: 600;
  font-size: 24px;
  color: #333333;
  letter-spacing: 0;
  grid-area: center;
  justify-self: center;
  align-self: center;
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader id="header_container">
        <ReturnHomeBtn />
        <StyledTitle>{this.props.title}</StyledTitle>
      </StyledHeader>
    );
  }
}

export default Header;
