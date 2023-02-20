import React from "react";
import { NavLink } from "react-router-dom";

function NavItem(props) {
<<<<<<< HEAD
  console.log(props.Link);
=======
>>>>>>> a9f7f9e0f08f96977931f00b3b76d4c5f7becc1d
  let icon;
  switch (props.Link) {
    case "Home":
      icon = "fa fa-home";
      break;
    case "Services":
      icon = "fa fa-handshake";
      break;
<<<<<<< HEAD
=======
    case "Contact Us":
      icon = "fa fa-address-book";
      break;
    case "Our Team":
      icon = "fa fa-users";
      break;
>>>>>>> a9f7f9e0f08f96977931f00b3b76d4c5f7becc1d
    default:
      break;
  }
  return (
    <NavLink
      to={props.Path}
      className="nav-link"
      onClick={() => props.hideNav()}
    >
<<<<<<< HEAD
      <i class={icon} aria-hidden="true" style={{ marginRight: "5px" }}></i>
=======
      <i class={icon} style={{ marginRight: "5px" }} aria-hidden="true"></i>
>>>>>>> a9f7f9e0f08f96977931f00b3b76d4c5f7becc1d
      {props.Link}
    </NavLink>
  );
}

export default NavItem;
