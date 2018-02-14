import React, { Component } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 20px 20px 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const StyledBtn = styled.button`
  border: 1px solid #c9cccc;
  background: #ffffff;
  border-radius: 8px;
  font-family: "Open Sans", sans-serif;
  font-size: 0.75rem;
  color: #333333;
  padding: 5px 10px;
  outline: none;
  text-decoration: none;
`;

class UpdateFilterBtns extends Component {
  render() {
    return (
      <StyledDiv id="filter_btns">
        {this.props.options.map(item => (
          <StyledBtn
            key={item.filter}
            name={item.filter}
            style={
              this.props.active === item.filter
                ? { background: "#c9cccc" }
                : { background: "#ffffff" }
            }
            onClick={this.props.onClick}
          >
            {item.text}
          </StyledBtn>
        ))}
      </StyledDiv>
    );
  }
}

export default UpdateFilterBtns;
