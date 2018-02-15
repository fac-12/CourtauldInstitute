import React, { Component } from "react";
import Styled from "styled-components";
import Parser from "html-react-parser";

const ProfileDiv = Styled.div`
  margin: 0 1.5rem;
`;

const NameAndImageDiv = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px auto;
  max-width: 500px;
`;

const Name = Styled.h3`
  align-self: center;
  font-family: "Source Serif Pro", serif;
  font-size: 1.875rem;
`;
const StyledImage = Styled.img`
  border-radius: 80%;
  width: 75%;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 35px;
`;

const StyledSubHeading = Styled.h3`
  font-family: "Source Serif Pro", serif;
  font-size: 1.5rem;
  max-width: 500px;
`;

const StyledP = Styled.div`
  margin-top: 0.9rem;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  font-family: "Open Sans", sans-serif;
  max-width: 500px;
`;

class Profile extends Component {
  render() {
    console.log(this.props);
    return (
      <ProfileDiv>
        <NameAndImageDiv>
          <StyledImage src={this.props.data.picture_url} />
          <Name>
            {this.props.data.first_name} {this.props.data.last_name}
          </Name>
        </NameAndImageDiv>
        <StyledSubHeading>About Me</StyledSubHeading>
        <StyledP>{Parser(this.props.data.about_me)}</StyledP>
        <StyledSubHeading> Why I Volunteer </StyledSubHeading>
        <StyledP>{Parser(this.props.data.why_volunteer)}</StyledP>
        <StyledSubHeading> Role </StyledSubHeading>
        <StyledP>{this.props.data.type}</StyledP>
      </ProfileDiv>
    );
  }
}

export default Profile;
