import React, { Component } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 20px 20px;
  display: flex;
  justify-content: space-between;
`;

const StyledBtn = styled.button`
  border: 1px solid #ecf0f1;
  background: #ffffff;
  border-radius: 8px;
  font-family: OpenSans;
  font-size: 12px;
  color: #333333;
  padding: 5px 10px;
  outline: none;
`;

const filters = [
  {
    text: "All",
    filter: "all"
  },
  {
    text: "Project",
    filter: "project"
  },
  {
    text: "Events/Exhibitions",
    filter: "events/exhibitions"
  },
  {
    text: "Opportunities",
    filter: "opportunities"
  }
];

class UpdateFilterBtns extends Component {
  render() {
    return (
      <StyledDiv id="filter_btns">
        {filters.map(item => (
          <StyledBtn
            key={item.filter}
            name={item.filter}
            style={
              this.props.active === item.filter
                ? { background: "#ecf0f1" }
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
