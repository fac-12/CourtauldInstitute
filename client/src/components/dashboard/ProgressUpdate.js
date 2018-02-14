import React, { Component } from "react";
import styled from "styled-components";

const StyledProgressUpdate = styled.div`
  margin-left: 1.5rem;
  color: white;
  font-size: 18px;
`;

class ProgressUpdate extends Component {
  render() {
    return (
      <StyledProgressUpdate>
        <p>{this.props.text}</p>
        <p>{this.props.data}</p>
      </StyledProgressUpdate>
    );
  }
}

export default ProgressUpdate;
