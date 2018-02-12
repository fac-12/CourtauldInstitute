import React, { Component } from "react";
import _ from "lodash";

class DiscoveriesItem extends Component {
  render() {
    const data = _.values(this.props.data);
    return (
      <div>
        {data.map(item => (
          <div key={item.id}>
            <p>
              {item.first_name} {item.last_name}
            </p>
            <img src={item.image_url} />
          </div>
        ))}
      </div>
    );
  }
}

export default DiscoveriesItem;
