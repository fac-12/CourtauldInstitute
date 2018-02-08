import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import DirectoryContainer from "./DirectoryContainer";

class Directory extends Component {
  componentDidMount() {
    this.props.fetchDirectory();
  }
  render() {
    return (
      <div>
        <h2>Directory</h2>
        <DirectoryContainer data={this.props.directory} />
      </div>
    );
  }
}

const mapStateToProps = ({ directory }) => ({
  directory
});

export default connect(mapStateToProps, actions)(Directory);
