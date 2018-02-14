import React, { Component } from "react";
import Styled from "styled-components";

const ProfileDiv = Styled.div`
  margin-left: 10px;
`;

const NameAndImageDiv = Styled.div`
  display: grid;
  grid-template-columns: 45% 55%;
  margin-top: 20px;
`;

const Name = Styled.h3`
  align-self: center;
`;
const StyledImage = Styled.img`
  border-radius: 100%;
  width: 85%;
  align-self: center;
`;

const StyledSubHeading = Styled.h3`
  margin: 1rem 0.5rem;
`;

const StyledP = Styled.p`
  margin: 1rem 0.5rem;
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
        <StyledSubHeading>About me</StyledSubHeading>
        <StyledP>{this.props.data.about_me}</StyledP>
        <StyledSubHeading> Why I volunteer </StyledSubHeading>
        <StyledP>{this.props.data.why_volunteer}</StyledP>
        <StyledSubHeading> Role </StyledSubHeading>
        <StyledP>{this.props.data.type}</StyledP>
      </ProfileDiv>
    );
  }
}

export default Profile;
