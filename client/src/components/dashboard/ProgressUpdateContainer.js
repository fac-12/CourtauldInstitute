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
      this.setState({ progressData: res });
    });
  }

  render() {
    const data = this.state.progressData;
    if (data) {
      const weekProgress = data.Images_Progress_Week.info;
      console.log(weekProgress, parseInt(weekProgress, 10));
    }
    return (
      <div>
        {data && (
          <ProgressUpdate
            text={data.Text_Update.info}
            collection={data.Images_Collection.info}
            weekProgress={parseInt(data.Images_Progress_Week.info, 10)}
            overallProgress={parseInt(data.Images_Progress_Total.info, 10)}
            total={parseInt(data.Images_Total.info, 10)}
          />
        )}
      </div>
    );
  }
}

export default ProgressUpdateContainer;
