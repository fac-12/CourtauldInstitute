import React, { Component } from "react";
import WelcomeHeaderContainer from "./WelcomeHeaderContainer";
import ProgressUpdate from "./ProgressUpdate";
import NavMenu from "./NavMenu";

class DashboardContainer extends Component {
  render() {
    return (
      <div>
        <section className="dashboard__top">
          <WelcomeHeaderContainer />
          <ProgressUpdate />
        </section>
        <NavMenu />
      </div>
    );
  }
}

export default DashboardContainer;
