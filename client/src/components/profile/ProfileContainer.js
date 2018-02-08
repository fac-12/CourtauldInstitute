import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Profile from "./Profile";

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.fetchProfile(this.props.match.params.id);
    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <Profile data={this.props.profile} />
      </div>
    );
  }
}

const mapStateToProps = ({ profile }) => ({
  profile
});

export default connect(mapStateToProps, actions)(ProfileContainer);
