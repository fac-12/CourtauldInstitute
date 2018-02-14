import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions";
import Header from "../Header";
import UpdateItem from "./UpdateItem";
import UpdateFilterBtns from "./UpdateFilterBtns";
import AddButton from "../AddButton";
import Loader from "../Loader";

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

  render() {
    const { filter } = this.props.match.params;
    console.log(filter, this.props.match.params);
    const data = this.props.updates;
    return (
      <div>
        <Header title="Updates" />
        <UpdateFilterBtns options={filterOptions} active={filter} />
        <AddButton route="/updates/new" purpose="Create New Update" />
        {this.props.loading && <Loader />}
        {data.map(item => <UpdateItem key={item.id} data={item} />)}
      </div>
    );
  }
}

const mapStateToProps = ({ updates, loading }) => ({
  updates: _.reverse(_.sortBy(_.values(updates), "datetime")),
  loading: loading.updates
});

export default connect(mapStateToProps, actions)(UpdatesContainer);
