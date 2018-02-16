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
const StyledImage = styled.img`
  border-radius: 80%;
  width: 75%;
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
    return (
      <ProfileDiv>
        <Name>
          {this.props.data.first_name} {this.props.data.last_name}
        </Name>
        <StyledImage src={this.props.data.picture_url} />
        <StyledSubHeading>About Me</StyledSubHeading>
        <StyledP>{Parser(this.props.data.about_me)}</StyledP>
        <StyledSubHeading> Why I Volunteer </StyledSubHeading>
        <StyledP>{Parser(this.props.data.why_volunteer)}</StyledP>
        <StyledSubHeading> Role </StyledSubHeading>
        <StyledP>{capitalizeFirstLetter(this.props.data.type)}</StyledP>
      </ProfileDiv>
    );
  }
}

export default Profile;
