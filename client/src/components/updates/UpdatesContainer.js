import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions";
import Header from "../Header";
import UpdateItem from "./UpdateItem";
import UpdateFilterBtns from "./UpdateFilterBtns";

class UpdatesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { filter: "all" };
    this.changeFilter = this.changeFilter.bind(this);
  }
  changeFilter(e) {
    this.setState({ filter: e.target.name });
  }
  componentDidMount() {
    this.props.fetchUpdates(10, 0);
  }
  render() {
    const data = _.values(this.props.updates);
    return (
      <div>
        <Header title="Updates" />
        <UpdateFilterBtns
          active={this.state.filter}
          onClick={this.changeFilter}
        />
        {data.map(item => <UpdateItem key={item.id} data={item} />)}
      </div>
    );
  }
}

const mapStateToProps = ({ updates }) => ({
  updates
});

export default connect(mapStateToProps, actions)(UpdatesContainer);
