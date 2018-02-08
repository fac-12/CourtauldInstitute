import React, { Component } from "react";
import _ from "lodash";

class DirectoryContainer extends Component {
  render() {
    const data = _.values(this.props.data);
    return (
      <div>
        <p>Data goes here </p>
        {data.map(item => (
          <p key={item.id}>
            {" "}
            {item.first_name} {item.last_name} {item.picture_url}{" "}
          </p>
        ))}
      </div>
    );
  }
}

export default DirectoryContainer;
