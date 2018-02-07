import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
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
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log(this.props.route);
  }
  render() {
    return (
      <Button onClick={this.handleClick}>
        <Title>{this.props.title}</Title>
        <Subtitle>{this.props.subtitle}</Subtitle>
      </Button>
    );
  }
}

export default NavButton;
