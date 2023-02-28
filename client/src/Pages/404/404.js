import React from "react";
import "./404.css";
import { NavLink } from "react-router-dom";

function Page404() {
  return (
    <div class="main-wrapper">
      <div class="error-box">
        <h1>{"{404}"}</h1>
        <h3>
          <i class="fa fa-warning"></i> Oops! Page not found!
        </h3>
        <p>The page you requested was not found.</p>
        <NavLink to="/" className="btn head-btn1">
          <i class="fa fa-long-arrow-left" aria-hidden="true"></i> Back to Home
        </NavLink>
      </div>
    </div>
  );
}

export default Page404;
