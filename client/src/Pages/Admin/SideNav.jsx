import React from "react";
import "./SideNav.css";
// import { ROUTES } from "../../helper/routes";
// import { _removeAllLs, _getSecureLs } from "../../helper/storage";
import {
  NavLink,
  Routes,
  useLocation,
  useNavigate,
  useParams,
  useRoutes,
} from "react-router-dom";

import className from "classnames";

function SideNav() {
  const navigate = useNavigate();
  // const userMode = _getSecureLs("auth")?.mode;
  // console.log(userMode);

  return (
    <aside className="main-sidebar sidebar-dark-primary ">
      <a
        href="/admin/dashboard"
        className="brand-link d-flex align-items-center"
      >
        <img src={require("../../Assets/Images/logo.png")} alt="logo" />
        <span className="brand-text font-weight-light">Find Your Job</span>
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
                to="company"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <i className="nav-icon fa fa-building" aria-hidden="true"></i>
                Workspaces
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="EmployerList"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <i className="nav-icon fa fa-building" aria-hidden="true"></i>
                Registered Employers
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
