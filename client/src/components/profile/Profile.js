import React, { Component } from "react";
import styled from "styled-components";

const ProfileDiv = styled.div`
  margin-left: 10px;
`;

const NameAndImageDiv = styled.div`
  display: grid;
  grid-template-columns: 45% 55%;
  margin-top: 20px;
`;

const Name = styled.h3`
  align-self: center;
`;
const StyledImage = styled.img`
  border-radius: 100%;
  width: 85%;
  align-self: center;
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
        <h3>About me</h3>
        <p>{this.props.data.about_me}</p>
        <h3> Why I volunteer </h3>
        <p>{this.props.data.why_volunteer}</p>
        <h3> Role </h3>
        <p>{this.props.data.type}</p>
      </ProfileDiv>
    );
  }
}

export default Profile;
