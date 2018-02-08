import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import UpdateFeed from "./UpdateFeed";
import Header from "../Header";

class UpdatesContainer extends Component {
  componentDidMount() {
    this.props.fetchUpdates(10, 0);
  }
  render() {
    return (
      <div>
        <Header title="Updates" />
        <UpdateFeed data={this.props.updates} />
      </div>
    );
  }
}

const mapStateToProps = ({ updates }) => ({
  updates
});

export default connect(mapStateToProps, actions)(UpdatesContainer);
