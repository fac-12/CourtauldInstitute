import React, { Component } from "react";
import WelcomeHeader from "./WelcomeHeader";
import ProgressUpdate from "./ProgressUpdate";
import NavMenu from "./NavMenu";

class DashboardContainer extends Component {
  render() {
    return (
      <div>
        <section>
          <WelcomeHeader />
          <ProgressUpdate />
        </section>
        <NavMenu />
      </div>
    );
  }
}

export default DashboardContainer;
