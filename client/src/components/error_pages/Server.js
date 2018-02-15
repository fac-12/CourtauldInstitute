import React, { Component } from "react";
import Header from "../Header";
import ErrorPageContainer from "./ErrorPageContainer";

class Server extends Component {
  render() {
    return (
      <div>
        <Header title="500 Error" returnDashboard />
        <ErrorPageContainer message="Internal server error." />
      </div>
    );
  }
}

export default Server;
