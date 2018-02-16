import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions";
import Header from "../Header";
import UpdateItem from "./UpdateItem";
import UpdateFilterBtns from "./UpdateFilterBtns";
import AddButton from "../AddButton";
import Loader from "../Loader";
import { filterUpdates } from "../../helpers/selectors";
import FetchMoreButton from "../FetchMoreButton";

const filterOptions = [
  {
    text: "All",
    filter: "all"
  },
  {
    text: "Project",
    filter: "project"
  },
  {
    text: "Events/Exhibitions",
    filter: "events"
  },
  {
    text: "Opportunities",
    filter: "opportunities"
  }
];

class UpdatesContainer extends Component {
  componentDidMount() {
    this.props.fetchUpdates(10, 0);
  }

  handleFilterClick = e => {
    this.props.setFilter(e.target.name);
  };

  handleFetchMoreClick = e => {
    this.props.fetchUpdates(10, this.props.numLoaded);
  };

  render() {
    const data = this.props.updates;
    return (
      <div>
        <Header title="Updates" returnDashboard />
        <UpdateFilterBtns
          options={filterOptions}
          active={this.props.filter}
          onClick={this.handleFilterClick}
        />
        <AddButton route="/updates/new" purpose="Create New Update" />
        {this.props.loading && <Loader />}
        {data.map(item => <UpdateItem key={item.id} data={item} />)}
        {this.props.isMore ? (
          <FetchMoreButton
            text="Load more updates"
            onClick={this.handleFetchMoreClick}
          />
        ) : (
          <FetchMoreButton text="No more updates" onClick={null} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  updates: filterUpdates(state),
  loading: state.loading.updates,
  filter: state.filter,
  numLoaded: _.size(state.updates.data),
  isMore: state.updates.isMore
});

export default connect(mapStateToProps, actions)(UpdatesContainer);
