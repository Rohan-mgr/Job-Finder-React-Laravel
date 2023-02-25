import React from "react";
import "./Header.css";
import { _getSecureLs } from "../../helper/storage";
import NavLink from "../../Components/Navigation/NavLink/NavLink";

function Header() {
  const { userMode } = _getSecureLs("seekerAuth");
  return (
    <nav className="main-header navbar navbar-expand  mr-1">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars" />
          </a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li
          className="nav-item"
          style={{
            display: "inline-flex",
            alignItems: "center",
            margin: "auto 0",
          }}
        >
          <a
            className="nav-link"
            data-widget="fullscreen"
            href="#"
            role="button"
          >
            <i className="fas fa-expand-arrows-alt" />
          </a>
        </li>
        {userMode === "seeker" && userMode !== undefined && (
          <li>
            <NavLink Path="/search_jobs/job_listings" Link="Apply for a job" />
            {/* <a className="btn head-btn1">Apply for a job</a> */}
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Header;
