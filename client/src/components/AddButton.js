import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledAddBtn = styled(Link)`
  border: 1px solid #c9cccc;
  background: #ffffff;
  border-radius: 8px;
  font-family: "Open Sans", sans-serif;
  font-size: 0.75rem;
  color: #333333;
  padding: 5px 10px;
  margin: 10px 20px 20px 20px;
  outline: none;
  text-decoration: none;
  display: block;
  text-align: center;
`;

class AddUpdateBtn extends Component {
  render() {
    return (
      <StyledAddBtn to={this.props.route}>{this.props.purpose}</StyledAddBtn>
    );
  }
}

export default AddUpdateBtn;
