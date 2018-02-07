import React, { Component } from "react";
import NavButton from "./NavButton";
import styled from "styled-components";

const NavMenu = styled.div`
  background: red;
  display: flex;
  flex-basis: 45%;
`;

const menuItems = [
  {
    title: "Updates",
    subtitle: "Events, exhibitions,updates and more",
    route: "/updates"
  },
  {
    title: "Recent Discoveries",
    subtitle: "Check out recent finds and post your own",
    route: "/discoveries"
  },
  {
    title: "Volunteer Directory",
    subtitle: "Learn more about your fellow volunteers",
    route: "/directory"
  },
  {
    title: "View my profile",
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
          />
        ))}
      </NavMenu>
    );
  }
}

export default NavMenuContainer;
