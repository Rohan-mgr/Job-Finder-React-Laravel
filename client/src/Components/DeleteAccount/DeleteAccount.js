import React, { useState } from "react";
import { deleteSeekerAccount } from "../../services/seeker";
import { deleteEmployerAccount } from "../../services/employer";
import { _getSecureLs, _remove } from "../../helper/storage";
import { useNavigate } from "react-router-dom";
import DismissableAlert from "../Alert/Alert";

function DeleteAccount(props) {
  const navigate = useNavigate();
  let User;
  if (props.Mode === "seeker") {
    User = _getSecureLs("seekerAuth")?.user;
  } else {
    User = _getSecureLs("employerAuth")?.user;
  }
  const [msg, setMsg] = useState(null);
  console.log(msg);
  console.log(User, props.Mode);

  return (
    <div>
      <form
        onSubmit={(e) => {
          if (props.Mode === "seeker") {
            deleteSeekerAccount(e, User?.id, setMsg);
            _remove("seekerAuth");
            navigate("/register/seeker");
          } else {
            deleteEmployerAccount(e, User?.id, setMsg);
            _remove("employerAuth");
            navigate("/register/employer");
          }
        }}
      >
        {msg && <DismissableAlert>{msg?.message}</DismissableAlert>}
        <h4>Are you sure yo want to delete your account?</h4>
        <button type="submit" className="btn head-btn1">
          Yes, Delete My Account
        </button>
        <button
          className="btn head-btn2"
          onClick={() => navigate("/account/seeker/dashboard")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default DeleteAccount;
