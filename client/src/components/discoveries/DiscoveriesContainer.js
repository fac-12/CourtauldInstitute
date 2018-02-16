import React, { Component } from "react";
import _ from "lodash";
import * as actions from "../../actions";
import { connect } from "react-redux";
import DiscoveriesItem from "./DiscoveriesItem";
import AddButton from "../AddButton";
import Header from "../Header";
import Loader from "../Loader";
import FetchMoreButton from "../FetchMoreButton";
import { sortDiscoveries } from "../../helpers/selectors";

class DiscoveriesContainer extends Component {
  componentDidMount() {
    if (this.props.numLoaded === 0) {
      this.props.fetchDiscoveries(10, 0);
    }
    window.scrollTo(0, 0);
  }

  handleFetchMoreClick = e => {
    this.props.fetchDiscoveries(10, this.props.numLoaded);
  };

  render() {
    const data = this.props.discoveries;
    return (
      <div>
        <Header title="Discoveries" returnDashboard />
        <AddButton route="/discoveries/new" purpose="Add discovery" />
        {this.props.loading && <Loader />}
        {data.map(item => <DiscoveriesItem key={item.id} data={item} />)}
        {this.props.isMore ? (
          <FetchMoreButton
            text="Load more discoveries"
            onClick={this.handleFetchMoreClick}
          />
        ) : (
          <FetchMoreButton text="No more discoveries" onClick={null} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  discoveries: sortDiscoveries(state),
  loading: state.loading.discoveries,
  numLoaded: _.size(state.discoveries.data),
  isMore: state.discoveries.isMore
});

export default connect(mapStateToProps, actions)(DiscoveriesContainer);
