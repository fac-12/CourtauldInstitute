import React, { Component } from "react";
import _ from "lodash";
import { parseDateTime } from "../../helpers/conversions";

class DiscoveriesItem extends Component {
  render() {
    const data = _.values(this.props.data);
    return (
      <div>
        {data.map(item => (
          <div key={item.id}>
            <img src={item.image_url} />
            <p>{item.content}</p>
            <p>
              Posted by {item.first_name} {item.last_name}
            </p>
            <p>{item.datetime}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default DiscoveriesItem;
