import React, { Component } from "react";
import WelcomeHeaderContainer from "./WelcomeHeaderContainer";
import ProgressUpdateContainer from "./ProgressUpdateContainer";
import NavMenuContainer from "./NavMenuContainer";

import styled from "styled-components";

const StyledDashboard = styled.div``;

class DashboardContainer extends Component {
  render() {
    return (
      <StyledDashboard id="dashboard_container">
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
