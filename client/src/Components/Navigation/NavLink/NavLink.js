import React from "react";
import { NavLink } from "react-router-dom";

function NavItem(props) {
  console.log(props.Link);
  let icon;
  switch (props.Link) {
    case "Home":
      icon = "fa fa-home";
      break;
    case "Services":
      icon = "fa fa-handshake";
      break;
    default:
      break;
  }
  return (
    <NavLink
      to={props.Path}
      className="nav-link"
      onClick={() => props.hideNav()}
    >
      <i class={icon} aria-hidden="true" style={{ marginRight: "5px" }}></i>
      {props.Link}
    </NavLink>
  );
}

export default NavItem;
