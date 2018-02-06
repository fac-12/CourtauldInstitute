import React, { Component } from "react";
import ProgressUpdate from "./ProgressUpdate";

class ProgressUpdateContainer extends Component {
  render() {
    return (
      <div>
        <ProgressUpdate
          text="This week we're on box 25"
          data="350 out of 650 files digitised"
        />
      </div>
    );
  }
}

export default ProgressUpdateContainer;
