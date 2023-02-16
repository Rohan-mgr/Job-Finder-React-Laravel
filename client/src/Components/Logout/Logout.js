import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { _remove } from "../../helper/storage";

function Logout(props) {
  function signout() {
    _remove("seekerAuth");
  }
  useEffect(() => {
    signout();
  }, []);
  return <Navigate to="/login/seeker" replace={true} />;
}

export default Logout;
