import React from "react";
import { _getSecureLs } from "../../helper/storage";
import nameInitials from "name-initials";
import Avatar from "../../Components/avatar/avatar";

function CommonDashboard() {
  let User;
  const { userMode } = _getSecureLs("seekerAuth");
  if (userMode === "seeker") {
    User = _getSecureLs("seekerAuth")?.user;
  } else {
    User = _getSecureLs("employerAuth")?.user;
  }

  return (
    <div>
      <div className="mb-3">
        <h1>Welcome, </h1>
        <div className="d-flex align-items-center">
          <Avatar initial={nameInitials(`${User?.name}`)} />
          <h2 className="ml-3 mt-2">
            <strong>{User?.name}!</strong>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CommonDashboard;
