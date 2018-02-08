import React, { Component } from "react";
import _ from "lodash";

class UpdateFeed extends Component {
  render() {
    const data = _.values(this.props.data);
    return (
      <div>
        <p>Data goes here </p>
        {data.map(item => <p key={item.id}> {item.title} </p>)}
      </div>
    );
  }
}

export default UpdateFeed;
