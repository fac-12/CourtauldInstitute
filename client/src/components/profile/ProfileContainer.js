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
    if (
      this.props.profile &&
      this.props.profile.id === parseInt(this.props.match.params.id, 10)
    ) {
      return (
        <div>
          <Header title="Profile" returnDashboard={false} />
          {this.props.profile && <Profile data={this.props.profile} />}
        </div>
      );
    }
    return <div />;
  }
}

const mapStateToProps = ({ profile }) => ({
  profile
});

export default connect(mapStateToProps, actions)(ProfileContainer);
