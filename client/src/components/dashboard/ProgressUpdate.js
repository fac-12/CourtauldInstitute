import React, { Component } from "react";

class ProgressUpdate extends Component {
  render() {
    return (
      <div>
        <p>{this.props.text}</p>
        <p>{this.props.data}</p>
      </div>
    );
  }
}

export default ProgressUpdate;
