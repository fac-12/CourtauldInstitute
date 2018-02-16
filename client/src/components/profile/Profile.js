import React, { Component } from "react";
import styled from "styled-components";
import Parser from "html-react-parser";
import { capitalizeFirstLetter } from "../../helpers/capitalize";

const ProfileDiv = styled.div`
  max-width: 500px;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledImage = styled.div`
  border-radius: 80%;
  width: 75%;
  height: 75vw;
  max-height: 300px;
  max-width: 300px;
  margin: 1rem;
`;

const Name = styled.h3`
  font-family: "Source Serif Pro", serif;
  font-weight: 400;
  font-size: 1.7rem;
  color: #333333;
  margin: 1rem;
  text-align: center;
`;

const StyledSubHeading = styled.p`
  font-family: "Source Serif Pro", serif;
  font-size: 1.5rem;
  color: #333333;
  margin: 1rem 1rem 0 1rem;
`;

const StyledP = styled.div`
  font-size: 0.875rem;
  font-family: "Open Sans", sans-serif;
  margin: 1rem;
`;

class Profile extends Component {
  render() {
    console.log(
      "rendering profile",
      this.props.data.first_name,
      this.props.data.picture_url
    );
    return (
      <ProfileDiv>
        <Name>
          {this.props.data.first_name} {this.props.data.last_name}
        </Name>
        <StyledImage
          style={{
            backgroundImage: `url(${this.props.data.picture_url})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`
          }}
        />
        <StyledSubHeading>About Me</StyledSubHeading>
        {this.props.data.about_me ? (
          <StyledP>{Parser(this.props.data.about_me)}</StyledP>
        ) : (
          <StyledP />
        )}
        <StyledSubHeading> Why I Volunteer </StyledSubHeading>
        {this.props.data.why_volunteer ? (
          <StyledP>{Parser(this.props.data.why_volunteer)}</StyledP>
        ) : (
          <StyledP />
        )}
        <StyledSubHeading> Role </StyledSubHeading>
        <StyledP>{capitalizeFirstLetter(this.props.data.type)}</StyledP>
      </ProfileDiv>
    );
  }
}

export default Profile;
