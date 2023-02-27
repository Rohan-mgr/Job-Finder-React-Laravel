import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { _remove } from "../../helper/storage";

function Logout(props) {
  function signout() {
    if (props.Mode === "seeker") {
      _remove("seekerAuth");
    } else if (props.Mode === "employer") {
      _remove("employerAuth");
    } else {
      _remove("adminAuth");
    }
  }
  useEffect(() => {
    signout();
  }, []);
  return (
    <Navigate
      to={
        props.Mode === "seeker"
          ? "/login/seeker"
          : props.Mode === "employer"
          ? "/login/employer"
          : "/adminlogin"
      }
      replace={true}
    />
  );
}

export default Logout;
