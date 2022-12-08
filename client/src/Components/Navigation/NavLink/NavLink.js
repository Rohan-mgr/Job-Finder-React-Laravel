import React from "react";
import { NavLink } from "react-router-dom";

function NavItem(props) {
  return (
    <NavLink to={props.Path} className="nav-link">
      {props.Link}
    </NavLink>
  );
}

export default NavItem;
