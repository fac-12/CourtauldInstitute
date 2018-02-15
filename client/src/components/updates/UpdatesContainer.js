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

  handleClick = e => {
    this.props.setFilter(e.target.name);
  };

  render() {
    const data = this.props.updates;
    return (
      <div>
        <Header title="Updates" returnDashboard />
        <UpdateFilterBtns
          options={filterOptions}
          active={this.props.filter}
          onClick={this.handleClick}
        />
        <AddButton route="/updates/new" purpose="Create New Update" />
        {this.props.loading && <Loader />}
        {data.map(item => <UpdateItem key={item.id} data={item} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  updates: filterUpdates(state),
  loading: state.loading.updates,
  filter: state.filter
});

export default connect(mapStateToProps, actions)(UpdatesContainer);
