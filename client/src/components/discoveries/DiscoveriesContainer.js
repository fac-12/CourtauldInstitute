import React, { Component } from "react";
import _ from "lodash";
import * as actions from "../../actions";
import { connect } from "react-redux";
import DiscoveriesItem from "./DiscoveriesItem";

import Header from "../Header";

class DiscoveriesContainer extends Component {
  componentDidMount() {
    this.props.fetchDiscoveries();
  }

  render() {
    console.log(this.props.discoveries);
    return (
      <div>
        <Header title="Discoveries" />
        <DiscoveriesItem data={this.props.discoveries} />
      </div>
    );
  }
}

const mapStateToProps = ({ discoveries }) => ({
  discoveries: _.values(discoveries)
});

export default connect(mapStateToProps, actions)(DiscoveriesContainer);
