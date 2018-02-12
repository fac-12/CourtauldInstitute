import React, { Component } from "react";
import _ from "lodash";
import * as actions from "../../actions";
import { connect } from "react-redux";
import DiscoveriesItem from "./DiscoveriesItem";
import AddButton from "../AddButton";
import Header from "../Header";

class DiscoveriesContainer extends Component {
  componentDidMount() {
    this.props.fetchDiscoveries();
  }

  render() {
    return (
      <div>
        <Header title="Discoveries" />
        <AddButton route="/discoveries/new" purpose="Add discovery" />
        <DiscoveriesItem data={this.props.discoveries} />
      </div>
    );
  }
}

const mapStateToProps = ({ discoveries }) => ({
  discoveries: _.values(discoveries)
});

export default connect(mapStateToProps, actions)(DiscoveriesContainer);
