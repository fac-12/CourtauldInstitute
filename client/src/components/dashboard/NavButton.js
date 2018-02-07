import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Link = styled.a`
  border: 1px solid #ecf0f1;
  width: 170px;
  height: 110px;
  background: none;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-family: "Source Serif Pro", serif;
  font-size: 18px;
`;

const Subtitle = styled.h2`
  font-family: "Open Sans", sans-serif;
  font-style: italic;
  font-weight: 100;
  font-size: 12px;
`;

class NavButton extends Component {
  render() {
    if (this.props.route !== "/bookShift") {
      return (
        <Link to={this.props.route}>
          <h3>{this.props.title}</h3>
          <p>{this.props.subtitle}</p>
        </Link>
      );
    }
    return (
      <a href="https://www.google.com">
        <h3>{this.props.title}</h3>
        <p>{this.props.subtitle}</p>Book shift
      </a>
    );
  }
}

export default NavButton;
