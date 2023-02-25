import React from "react";
import { NavLink } from "react-router-dom";

function NavItem(props) {
  let icon;
  switch (props.Link) {
    case "Home":
      icon = "fa fa-home";
      break;
    case "Services":
      icon = "fa fa-handshake";
      break;
    case "Contact Us":
      icon = "fa fa-address-book";
      break;
    case "Our Team":
      icon = "fa fa-users";
      break;
    case "Find Jobs":
      icon = "fa fa-briefcase";
      break;
    default:
      break;
  }
  return (
    <NavLink
      to={props.Path}
      className={
        props.Link === "Apply for a job" ? "btn head-btn1" : "nav-link"
      }
      onClick={() => props.hideNav()}
    >
      <i class={icon} style={{ marginRight: "5px" }} aria-hidden="true"></i>
      {props.Link}
    </NavLink>
  );
}

export default NavItem;
