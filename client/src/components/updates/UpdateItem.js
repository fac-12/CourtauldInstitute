import React, { Component } from "react";

class UpdateItem extends Component {
  render() {
    const data = this.props.data;
    return <div key="update item">{data.title}</div>;
  }
}

export default UpdateItem;
