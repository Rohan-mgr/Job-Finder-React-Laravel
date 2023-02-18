import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { _remove } from "../../helper/storage";

function Logout(props) {
  function signout() {
    if (props.Mode === "seeker") {
      _remove("seekerAuth");
    } else {
      _remove("employerAuth");
    }
  }
  useEffect(() => {
    signout();
  }, []);
  return (
    <Navigate
      to={props.Mode === "seeker" ? "/login/seeker" : "/login/employer"}
      replace={true}
    />
  );
}

export default Logout;
