import React, { Component } from "react";
import WelcomeHeaderContainer from "./WelcomeHeaderContainer";
import ProgressUpdateContainer from "./ProgressUpdateContainer";
import NavMenuContainer from "./NavMenuContainer";
import styled from "styled-components";
import dashboardHeader from "./dashboardHeader.png";

const StyledDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.div`
  font-family: "Source Serif Pro", serif;
  background-image: url(${dashboardHeader});
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #ecf0f1;

  @media screen and (min-width: 960px) {
    align-items: center;
    background-position: center;
    height: 60vh;
  }
`;

class DashboardContainer extends Component {
  render() {
    return (
      <StyledDashboardContainer>
        <StyledHeader>
          <WelcomeHeaderContainer />
          <ProgressUpdateContainer />
        </StyledHeader>
        <NavMenuContainer />
      </StyledDashboardContainer>
    );
  }
}

export default DashboardContainer;
