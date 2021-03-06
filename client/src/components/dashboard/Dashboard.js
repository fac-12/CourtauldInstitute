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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #ecf0f1;
  position: relative;

  @media screen and (min-width: 600px) {
    min-height: 35vh;
  }
  @media screen and (min-width: 960px) {
    background-position: center;
    min-height: 45vh;
  }
`;

class DashboardContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
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
