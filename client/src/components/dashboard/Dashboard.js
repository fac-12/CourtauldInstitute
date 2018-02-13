import React, { Component } from "react";
import WelcomeHeaderContainer from "./WelcomeHeaderContainer";
import ProgressUpdateContainer from "./ProgressUpdateContainer";
import NavMenuContainer from "./NavMenuContainer";

class DashboardContainer extends Component {
  render() {
    return (
      <div>
        <section>
          <WelcomeHeaderContainer />
          <ProgressUpdateContainer />
        </section>
        <NavMenuContainer />
      </div>
    );
  }
}

export default DashboardContainer;
