import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDirectory = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 45% 45%;
  grid-template-rows: 1fr auto;
  @media screen and (min-width: 600px) {
    grid-template-columns: 20% 20% 20% 20% 20%;
  }
`;

const StyledLink = styled(Link)`
  width: 95%;
  background: none;
  border-radius: 10px;
  text-decoration: none;
  margin-top: 25px;
  justify-self: center;
  font-family: "Source Serif Pro", serif;
  color: #333333;
  margin-left: 35px;
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: inherit;
`;

const StyledParagraph = styled.p`
  text-align: center;
  margin-top: 20px;
`;

class DirectoryContainer extends Component {
  render() {
    const data = _.values(this.props.data);
    return (
      <StyledDirectory id="directory component">
        {data.map(item => (
          <StyledLink key={item.id} to={`/profile/${item.id}`}>
            <div
              style={{
                backgroundImage: `url(${item.picture_url})`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
                height: `200px`,
                borderRadius: `10px`
              }}
            />
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
