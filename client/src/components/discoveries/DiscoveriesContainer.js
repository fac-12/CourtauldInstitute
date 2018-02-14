import React, { Component } from "react";
import _ from "lodash";
import * as actions from "../../actions";
import { connect } from "react-redux";
import DiscoveriesItem from "./DiscoveriesItem";
import AddButton from "../AddButton";
import Header from "../Header";
import Loader from "../Loader";

class DiscoveriesContainer extends Component {
  componentDidMount() {
    this.props.fetchDiscoveries(10, 0);
  }

  render() {
    const data = this.props.discoveries;
    return (
      <div>
        <Header title="Discoveries" />
        <AddButton route="/discoveries/new" purpose="Add discovery" />
        {this.props.loading && <Loader />}
        {data.map(item => <DiscoveriesItem key={item.id} data={item} />)}
      </div>
    );
  }
}

const mapStateToProps = ({ discoveries, loading }) => ({
  discoveries: _.reverse(_.sortBy(_.values(discoveries), "datetime")),
  loading: loading.discoveries
});

export default connect(mapStateToProps, actions)(DiscoveriesContainer);
