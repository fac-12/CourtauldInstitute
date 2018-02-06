import React, { Component } from "react";

class ProgressUpdate extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>{this.props.text}</p>
        <p>{this.props.data}</p>
      </div>
    );
  }
}

export default ProgressUpdate;
