import React, { Component } from "react";
import WelcomeHeaderContainer from "./WelcomeHeaderContainer";
import ProgressUpdateContainer from "./ProgressUpdateContainer";
import NavMenuContainer from "./NavMenuContainer";

import styled from "styled-components";

const StyledDashboard = styled.div`
  margin-left: 15px;
  margin-right: 15px;
`;

class DashboardContainer extends Component {
  render() {
    return (
      <StyledDashboard>
        <section className="dashboard__top">
          <WelcomeHeaderContainer />
          <ProgressUpdateContainer />
        </section>
        <NavMenuContainer />
      </StyledDashboard>
    );
  }
}

export default DashboardContainer;
