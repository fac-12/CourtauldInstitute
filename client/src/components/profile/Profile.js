import React, { Component } from "react";
import Header from "../Header";

class Profile extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div>
        <Header title={this.props.data.first_name} />
        <p>{this.props.data.first_name}</p>
        <p>{this.props.data.last_name}</p>
        <p>{this.props.data.about_me}</p>
        <p>{this.props.data.why_volunteer}</p>
        <p>{this.props.data.type}</p>
        <p>{this.props.data.picture_url}</p>
      </div>
    );
  }
}

export default Profile;
