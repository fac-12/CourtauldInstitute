import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDirectory = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem auto;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  width: 10rem;
  background: none;
  border-radius: 10px;
  text-decoration: none;
  margin-top: 25px;
  font-family: "Source Serif Pro", serif;
  color: #333333;
  margin: 1rem 1rem;
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
    return (
      <StyledDirectory>
        {this.props.data.length > 0 ? (
          this.props.data.map(item => (
            <StyledLink key={item.id} to={`/profile/${item.id}`}>
              <div
                style={{
                  backgroundImage: `url(${item.picture_url})`,
                  backgroundSize: `cover`,
                  backgroundPosition: `center`,
                  height: `10rem`,
                  borderRadius: `10px`
                }}
              />
              <StyledParagraph>
                {item.first_name} {item.last_name}{" "}
              </StyledParagraph>
            </StyledLink>
          ))
        ) : (
          <StyledParagraph>No users match your search</StyledParagraph>
        )}
      </StyledDirectory>
    );
  }
}

export default DirectoryContainer;
