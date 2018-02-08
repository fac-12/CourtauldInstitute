import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import DirectoryContainer from "./DirectoryContainer";
import Header from "../Header";

class Directory extends Component {
  componentDidMount() {
    this.props.fetchDirectory();
  }
  render() {
    return (
      <div>
        <Header title="Directory" />
        <DirectoryContainer data={this.props.directory} />
      </div>
    );
  }
}

const mapStateToProps = ({ directory }) => ({
  directory
});

export default connect(mapStateToProps, actions)(Directory);
