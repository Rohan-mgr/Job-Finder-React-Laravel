import React, { useState, useEffect } from "react";
// import "./SideNav.css";
// import { _removeAllLs, _getSecureLs } from "../../helper/storage";
import {
  NavLink,
  // Routes,
  // useLocation,
  useNavigate,
  // useParams,
  // useRoutes,
} from "react-router-dom";
import { getSeekerProfile } from "../../services/seeker";
import { _getSecureLs } from "../../helper/storage";

// import className from "classnames";

function SideNav() {
  const navigate = useNavigate();
  const [seekerProfilePath, setSeekerProfilePath] = useState(null);
  const { user } = _getSecureLs("seekerAuth");
  // const userMode = _getSecureLs("auth")?.mode;
  // console.log(userMode);

  const getSeeker = async () => {
    try {
      const response = await getSeekerProfile(user?.id);
      console.log(response);
      setSeekerProfilePath(response?.imgPath);
      navigate("/account/seeker/upload_photo");
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    getSeeker();
  }, [seekerProfilePath]);
  console.log(seekerProfilePath);

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
