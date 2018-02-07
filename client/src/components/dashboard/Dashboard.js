import React, { Component } from "react";
import WelcomeHeaderContainer from "./WelcomeHeaderContainer";
import ProgressUpdateContainer from "./ProgressUpdateContainer";
import NavMenuContainer from "./NavMenuContainer";

import styled from "styled-components";

const Dashboard = styled.div`
  margin-left: 15px;
  margin-right: 15px;
`;

class DashboardContainer extends Component {
  render() {
    return (
      <Dashboard>
        <section className="dashboard__top">
          <WelcomeHeaderContainer />
          <ProgressUpdateContainer />
        </section>
        <NavMenuContainer />
      </Dashboard>
    );
  }
}

export default DashboardContainer;
