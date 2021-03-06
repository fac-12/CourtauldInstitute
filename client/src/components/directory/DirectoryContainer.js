import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions";
import Directory from "./Directory";
import Header from "../Header";
import SearchBar from "../SearchBar";
import { sortDirectory } from "../../helpers/selectors";

class DirectoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }
  componentDidMount() {
    if (this.props.directory.length === 0) {
      this.props.fetchDirectory();
    }
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
        <Directory data={data} search={this.state.search} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  directory: sortDirectory(state)
});

export default connect(mapStateToProps, actions)(DirectoryContainer);
