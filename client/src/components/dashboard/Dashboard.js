import React, { Component } from "react";
import WelcomeHeaderContainer from "./WelcomeHeaderContainer";
import ProgressUpdateContainer from "./ProgressUpdateContainer";
import NavMenu from "./NavMenu";

class DashboardContainer extends Component {
  render() {
    return (
      <div>
        <section className="dashboard__top">
          <WelcomeHeaderContainer />
          <ProgressUpdateContainer />
        </section>
        <NavMenu />
      </div>
    );
  }
}

export default DashboardContainer;
