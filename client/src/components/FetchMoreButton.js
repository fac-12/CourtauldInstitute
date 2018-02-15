import React, { Component } from "react";
import styled from "styled-components";
import { StyledSubmitBtn } from "../components/styledDefaults/BtnStyles";

const StyledFetchBtn = StyledSubmitBtn.extend`
  margin: 0px;
  width: 100%;
`;
const StyledDiv = styled.div`
  margin: 10px 20px 20px 20px;
  @media screen and (min-width: 600px) {
    max-width: 500px;
    margin: 10px auto;
  }
`;

class FetchMoreButton extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <StyledDiv>
        <StyledFetchBtn
          onClick={onClick}
          style={onClick ? {} : { border: "1px solid #eeeeee" }}
        >
          {this.props.text}
        </StyledFetchBtn>
      </StyledDiv>
    );
  }
}

export default FetchMoreButton;
