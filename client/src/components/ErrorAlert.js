import React, { Component } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: red;
  margin: 5px, 0;
`;

class ErrorAlert extends Component {
  render() {
    return <StyledDiv>{this.props.text}</StyledDiv>;
  }
}

export default ErrorAlert;
