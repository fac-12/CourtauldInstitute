import React, { Component } from "react";

class NavButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log(this.props.route);
  }
  render() {
    console.log("navbtn");
    return (
      <button onClick={this.handleClick}>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </button>
    );
  }
}

export default NavButton;
