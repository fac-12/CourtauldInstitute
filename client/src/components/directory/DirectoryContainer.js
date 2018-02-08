import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

class DirectoryContainer extends Component {
  render() {
    const data = _.values(this.props.data);
    return (
      <div>
        <p>Data goes here </p>
        {data.map(item => (
          <Link key={item.id} to={`/profile/${item.id}`}>
            {item.first_name} {item.last_name} {item.picture_url}{" "}
          </Link>
        ))}
      </div>
    );
  }
}

export default DirectoryContainer;
