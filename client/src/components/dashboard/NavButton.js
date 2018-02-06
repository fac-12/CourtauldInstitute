import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavButton extends Component {
  render() {
    if (this.props.route !== "/bookShift") {
      return (
        <Link to={this.props.route}>
          <h3>{this.props.title}</h3>
          <p>{this.props.subtitle}</p>
        </Link>
      );
    }
    return (
      <a href="https://www.google.com">
        <h3>{this.props.title}</h3>
        <p>{this.props.subtitle}</p>Book shift
      </a>
    );
  }
}

export default NavButton;
