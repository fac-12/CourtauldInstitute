import React, { Component } from "react";
import Styled from "styled-components";

const ProfileDiv = Styled.div`
  margin: 0 1.5rem;
  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const NameAndImageDiv = Styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 20px;
  @media screen and (min-width: 600px) {
    width: 55%;
  }
`;

const Name = Styled.h3`
  align-self: center;
  font-family: "Source Serif Pro", serif;
  font-size: 1.875rem;
`;
const StyledImage = Styled.img`
  border-radius: 80%;
  width: 73%;
  align-self: center;
  margin-bottom: 35px;
`;

const StyledSubHeading = Styled.h3`
  font-family: "Source Serif Pro", serif;
  font-size: 1.5rem;
  @media screen and (min-width: 600px) {
    width: 50%;
  }
`;

const StyledP = Styled.p`
  margin-top: 0.9rem;
  margin-bottom: 2rem;
  font-family: "Source Serif Pro", serif;
  @media screen and (min-width: 600px) {
    width: 50%;
  }
`;

class Profile extends Component {
  render() {
    return (
      <ProfileDiv>
        <NameAndImageDiv>
          <StyledImage src={this.props.data.picture_url} />
          <Name>
            {this.props.data.first_name} {this.props.data.last_name}
          </Name>
        </NameAndImageDiv>
        <StyledSubHeading>About Me</StyledSubHeading>
        <StyledP>{this.props.data.about_me}</StyledP>
        <StyledSubHeading> Why I Volunteer </StyledSubHeading>
        <StyledP>{this.props.data.why_volunteer}</StyledP>
        <StyledSubHeading> Role </StyledSubHeading>
        <StyledP>{this.props.data.type}</StyledP>
      </ProfileDiv>
    );
  }
}

export default Profile;
