import React, { Component } from "react";
import { connect } from "react-redux";

import WelcomeHeader from "./WelcomeHeader";

class WelcomeHeaderContainer extends Component {
  render() {
    return (
      <div>
        <WelcomeHeader name={this.props.name} />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  name: auth.first_name
});

export default connect(mapStateToProps, null)(WelcomeHeaderContainer);
