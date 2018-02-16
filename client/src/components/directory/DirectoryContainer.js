import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions";
import Directory from "./Directory";
import Header from "../Header";
import SearchBar from "../SearchBar";

class DirectoryContainer extends Component {
  componentDidMount() {
    this.props.fetchDirectory();
    this.state = { search: "" };
  }
  onSearch = value => {
    this.setState({ search: value.toLowerCase() });
  };
  render() {
    const data =
      this.state && this.state.search
        ? this.props.directory.filter(user =>
            (user.first_name + user.last_name)
              .toLowerCase()
              .includes(this.state.search)
          )
        : this.props.directory;
    return (
      <div>
        <Header title="Directory" returnDashboard />
        <SearchBar onSubmit={this.onSearch} />
        <Directory data={data} />
      </div>
    );
  }
}

const mapStateToProps = ({ directory }) => ({
  directory: _.values(directory)
});

export default connect(mapStateToProps, actions)(DirectoryContainer);
