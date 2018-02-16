import React, { Component } from "react";
import styled from "styled-components";

const StyledLoader = styled.div`
  margin: 10px auto 20px auto;
  color: #c9cccc;
  text-align: center;
`;

class Loader extends Component {
  render() {
    return <StyledLoader>Loading new post...</StyledLoader>;
  }
}

export default Loader;
