import React, { Component } from "react";
import ProgressUpdate from "./ProgressUpdate";
import { updateProgress } from "../../actions/index";

class ProgressUpdateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressData: null
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
        {this.state.progressData && (
          <ProgressUpdate
            text={this.state.progressData.text_update.info}
            data={this.state.progressData.data_update.info}
          />
        )}
      </div>
    );
  }
}

export default ProgressUpdateContainer;
