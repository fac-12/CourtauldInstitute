import React, { Component } from "react";
import NavButton from "./NavButton";
import styled from "styled-components";
import { connect } from "react-redux";

const NavMenu = styled.div`
  margin: 0.75rem 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
`;

const menuItems = [
  {
    title: "Updates",
    subtitle: "Events, exhibitions, updates and more",
    route: "/updates"
  },
  {
    title: "Discoveries",
    subtitle: "Check out recent finds and post your own",
    route: "/discoveries"
  },
  {
    title: "Directory",
    subtitle: "Learn more about your fellow volunteers",
    route: "/directory"
  },
  {
    title: "Add New User",
    subtitle: "Add a new staff member or volunteer",
    route: "/addUser"
  },
  {
    title: "My Profile",
    subtitle: "View and edit your volunteer profile",
    route: "/myProfile"
  },
  {
    title: "Book shift",
    subtitle: "Book your next shift on Timecounts",
    route: "/bookShift"
  }
];

class NavMenuContainer extends Component {
  render() {
    return (
      <NavMenu>
        {menuItems.map(item => (
          <NavButton
            title={item.title}
            subtitle={item.subtitle}
            route={item.route}
            key={item.route}
            userType={this.props.userType}
          />
        ))}
      </NavMenu>
    );
  }
}

const mapStatetoProps = ({ auth }) => ({
  userType: auth.type
});

export default connect(mapStatetoProps, null)(NavMenuContainer);
