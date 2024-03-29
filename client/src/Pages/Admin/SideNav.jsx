import React from "react";
import "./SideNav.css";
// import { ROUTES } from "../../helper/routes";
// import { _removeAllLs, _getSecureLs } from "../../helper/storage";
import { NavLink } from "react-router-dom";

function SideNav() {
  return (
    <aside className="main-sidebar sidebar-dark-primary ">
      <a
        href="/admin/dashboard"
        className="brand-link d-flex align-items-center"
      >
        <img src={require("../../Assets/Images/logo.png")} alt="logo" />
        <span className="brand-text font-weight-light">JobFinder.com</span>
      </a>

      <div className="sidebar ">
        <nav className="mt-2 mb-2 d-flex flex-column justify-content-between align-items-between">
          <ul className="nav nav-pills nav-sidebar flex-column" role="menu">
            <li className="nav-item">
              <NavLink
                exact
                to="dashboard"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <i className="nav-icon fa fa-house-user" aria-hidden="true"></i>
                Dashboard
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="employer_details"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <i className="nav-icon fa fa-list-alt" aria-hidden="true"></i>
                Employer List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="seeker_details"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <i class="nav-icon fa fa-list-ul" aria-hidden="true"></i>
                Seeker List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="testimonials"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <i class="nav-icon fa fa-commenting" aria-hidden="true"></i>
                Testimonials
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="logout"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <i class="nav-icon fa fa-sign-out" aria-hidden="true"></i>
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* <div class="sidebar-custom">
          <button
            onClick={() => {
              _removeAllLs();
              navigate(ROUTES.LOGIN);
            }}
            class="mt-2 btn btn-secondary hide-on-collapse pos-right"
          >
            <i class="fas fa-sign-out-alt"></i> Logout
          </button>
        </div> */}
      </div>
    </aside>
  );
}

export default SideNav;
