import React, { Component } from "react";
import ProgressUpdate from "./ProgressUpdate";
import { updateProgress } from "../../actions/index";

class ProgressUpdateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressData: []
    };
  }
  componentDidMount() {
    updateProgress().then(res => {
      console.log("res: ", res);
      this.setState({ progressData: res });
    });
  }

  render() {
    return (
      <div>
        <ProgressUpdate
          text={this.state.progressData.text_update.info}
          data="350 out of 650 files digitised"
        />
      </div>
    );
  }
}

export default ProgressUpdateContainer;
