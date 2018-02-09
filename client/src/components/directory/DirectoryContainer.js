import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Directory from "./Directory";
import Header from "../Header";

class DirectoryContainer extends Component {
  componentDidMount() {
    this.props.fetchDirectory();
  }
  render() {
    return (
      <div>
        <Header title="Directory" />
        <Directory data={this.props.directory} />
      </div>
    );
  }
}

const mapStateToProps = ({ directory }) => ({
  directory
});

export default connect(mapStateToProps, actions)(DirectoryContainer);
