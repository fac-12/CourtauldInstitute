import React, { Component } from "react";
import _ from "lodash";
import UpdateItem from "./UpdateItem";
import UpdateFilterBtns from "./UpdateFilterBtns";

class UpdateFeed extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: "all" };
    this.changeFilter = this.changeFilter.bind(this);
  }
  changeFilter(e) {
    this.setState({ filter: e.target.name });
  }
  render() {
    const data = _.values(this.props.data);
    return (
      <div id="feed">
        <UpdateFilterBtns
          active={this.state.filter}
          onClick={this.changeFilter}
        />
        {data.map(item => <UpdateItem key={item.id} data={item} />)}
      </div>
    );
  }
}

export default UpdateFeed;
