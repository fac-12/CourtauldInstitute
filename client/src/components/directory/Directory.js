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
  width: 40%;
  max-width: 10rem;
  background: none;
  border-radius: 10px;
  text-decoration: none;
  margin-top: 1rem;
  font-family: "Source Serif Pro", serif;
  color: #333333;
  margin: 0.5rem 0.8rem;
  @media screen and (min-width: 600px) {
    width: 10rem;
    margin-top: 1.5rem;
    margin: 1rem 1rem;
  }
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
          this.props.data.map(item => {
            console.log(item);
            if (item.type !== "admin") {
              return (
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
              )
            }
          }
        )) : this.props.search ? (
          <StyledParagraph>No users match your search</StyledParagraph>
        ) : (
          <StyledParagraph>Directory loading...</StyledParagraph>
        )}
      </StyledDirectory>
    );
  }
}

export default DirectoryContainer;
