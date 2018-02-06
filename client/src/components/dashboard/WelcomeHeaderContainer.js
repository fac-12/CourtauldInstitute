import React, { Component } from "react";
import WelcomeHeader from "./WelcomeHeader";

class WelcomeHeaderContainer extends Component {
  render() {
    return (
      <div>
        <WelcomeHeader name="Luke" />
      </div>
    );
  }
}

export default WelcomeHeaderContainer;
