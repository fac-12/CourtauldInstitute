import React, { Component } from "react";
import styled from "styled-components";

const StyledProgressUpdate = styled.div`
  margin-left: 1.5rem;
  color: white;
  font-size: 18px;
`;

const StyledP = styled.p`
  margin-bottom: 0.5rem;
`;

class ProgressUpdate extends Component {
  render() {
    return (
      <StyledProgressUpdate>
        <StyledP>{this.props.text}</StyledP>
        <StyledP>{this.props.data}</StyledP>
      </StyledProgressUpdate>
    );
  }
}

export default ProgressUpdate;
