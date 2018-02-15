import React, { Component } from "react";
import Header from "../Header";
import ErrorPageContainer from "./ErrorPageContainer";

class Client extends Component {
  render() {
    return (
      <div>
        <Header title="404 Error" returnDashboard />
        <ErrorPageContainer message="Page not found" />
      </div>
    );
  }
}

export default Client;
