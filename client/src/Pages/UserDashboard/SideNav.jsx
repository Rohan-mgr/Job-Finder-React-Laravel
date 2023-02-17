import React, { useState, useEffect, useCallback } from "react";
import {
  NavLink,
  // Routes,
  // useLocation,
  // useNavigate,
  // useParams,
  // useRoutes,
} from "react-router-dom";
import { getSeekerProfile } from "../../services/seeker";
import { _getSecureLs } from "../../helper/storage";

function SideNav() {
  const [seekerProfilePath, setSeekerProfilePath] = useState(null);
  const { user } = _getSecureLs("seekerAuth");

  const getSeeker = useCallback(async () => {
    try {
      const response = await getSeekerProfile(user?.id);
      setSeekerProfilePath(response?.imgPath);
    } catch (e) {
      throw new Error(e);
    }
  }, [user?.id]);
  useEffect(() => {
    getSeeker();
  }, [getSeeker]);

  return (
    <aside className="main-sidebar sidebar-dark-primary ">
      <div className="ourteam__image__wrapper">
        <img
          src={
            seekerProfilePath
              ? `http://localhost:8000/${seekerProfilePath}`
              : require("../../Assets/Images/user.png")
          }
          alt="rohan-pic"
        />
      </div>

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
                to="upload_photo"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <i className="nav-icon fa fa-camera" aria-hidden="true"></i>
                Upload A Photo
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="cv_cover_letter"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <i className="nav-icon fa fa-bullhorn" aria-hidden="true"></i>
                CV &amp; Cover Letter
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="change_password"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <i className="nav-icon fa fa-key" aria-hidden="true"></i>
                Change Password
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="my_resume"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <i class="nav-icon fa fa-file-text" aria-hidden="true"></i>
                My Resume
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="delete_account"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <i class="nav-icon fa fa-power-off" aria-hidden="true"></i>
                Delete Account
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
      </div>
    </aside>
  );
}

export default SideNav;
