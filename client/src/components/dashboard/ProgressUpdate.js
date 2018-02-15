import React, { Component } from "react";
import styled from "styled-components";

const StyledProgressUpdate = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  font-size: 1.05rem;

  @media screen and (min-width: 960px) {
    max-width: 500px;
  }
`;

const StyledP = styled.p`
  margin-bottom: 0.5rem;
`;

class ProgressUpdate extends Component {
  render() {
    return (
      <StyledProgressUpdate>
        <StyledP>{this.props.text}</StyledP>
        <StyledP>{this.props.collection}</StyledP>
        <StyledP>{this.props.weekProgress}</StyledP>
        <StyledP>{this.props.overallProgress}</StyledP>
      </StyledProgressUpdate>
    );
  }
}

export default ProgressUpdate;
