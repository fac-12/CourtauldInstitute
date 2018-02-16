import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Profile from "./Profile";
import Header from "../Header";

class ProfileContainer extends Component {
  componentDidMount() {
    this.props.fetchProfile(this.props.match.params.id);
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Header title="Profile" returnDashboard={false} />
        {this.props.profile && <Profile data={this.props.profile} />}
      </div>
    );
  }
}

const mapStateToProps = ({ profile }) => ({
  profile
});

export default connect(mapStateToProps, actions)(ProfileContainer);
