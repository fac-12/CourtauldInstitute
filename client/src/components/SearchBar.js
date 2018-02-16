import React, { Component } from "react";
import styled from "styled-components";
import { StyledInput } from "./styledDefaults/FormStyles";
import { StyledSubmitBtn } from "./styledDefaults/BtnStyles";

const StyledForm = styled.form`
  margin: 1rem auto;
  max-width: 500px;
  width: 100%;
  display: flex;
`;

const StyledSearch = StyledInput.extend`
  width: 80%;
`;

const StyledBtn = StyledSubmitBtn.extend`
  height: 2rem;
  margin-left: 1rem;
`;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  onChange = e => {
    this.setState({ value: e.target.value });
    this.props.onSubmit(e.target.value);
  };
  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledSearch
          name="search"
          placeholder="Search for users..."
          onChange={this.onChange}
          value={this.state.value}
        />
      </StyledForm>
    );
  }
}

export default SearchBar;
