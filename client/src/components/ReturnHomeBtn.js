import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const StyledBtn = styled.button`
  grid-area: left;
  justify-self: end;
  align-self: center;
  border: 0;
  background: #ffffff;
`;

const StyledSvg = styled.svg`
  height: 16px;
  width: 9px;
  color: #000000;
  padding-top: 7px;
`;

class ReturnHomeBtn extends Component {
  render() {
    return (
      <StyledBtn onClick={this.props.history.goBack}>
        <StyledSvg
          viewBox="0 0 9 16"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.17136363,15.8729848 L8.87508343,15.1576204 C9.04163886,14.988309 9.04163886,14.7137831 8.87508343,14.5444355 L2.45246295,8.00000226 L8.87508343,1.45553291 C9.04163886,1.28622146 9.04163886,1.01169554 8.87508343,0.842347961 L8.17136363,0.126983589 C8.0048082,-0.0423278631 7.73475098,-0.0423278631 7.56816001,0.126983589 L0.124916572,7.69342785 C-0.0416388574,7.8627393 -0.0416388574,8.13726521 0.124916572,8.3066128 L7.56816001,15.8730209 C7.73475098,16.0423324 8.0048082,16.0423324 8.17136363,15.8729848 Z"
            id="left-chevron"
            fill="#000000"
            fillRule="nonzero"
          />
        </StyledSvg>
      </StyledBtn>
    );
  }
}

export default withRouter(ReturnHomeBtn);
