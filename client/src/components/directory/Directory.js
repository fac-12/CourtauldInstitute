import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDirectory = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr auto;
`;

const StyledLink = styled(Link)`
  width: 90%;
  background: none;
  border-radius: 8px;
  text-decoration: none;
  margin-top: 25px;
  justify-self: center;
  font-family: "Source Serif Pro", serif;
  color: #333333;
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: inherit;
`;

const StyledParagraph = styled.p`
  text-align: center;
`;

class DirectoryContainer extends Component {
  render() {
    const data = _.values(this.props.data);
    return (
      <StyledDirectory id="directory component">
        {data.map(item => (
          <StyledLink key={item.id} to={`/profile/${item.id}`}>
            <StyledImage src={item.picture_url} />
            <StyledParagraph>
              {item.first_name} {item.last_name}{" "}
            </StyledParagraph>
          </StyledLink>
        ))}
      </StyledDirectory>
    );
  }
}

export default DirectoryContainer;
