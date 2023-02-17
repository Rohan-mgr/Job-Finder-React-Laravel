import React, { useState } from "react";
import { deleteSeekerAccount } from "../../services/seeker";
import { _getSecureLs, _remove } from "../../helper/storage";
import { useNavigate } from "react-router-dom";
import DismissableAlert from "../Alert/Alert";

function DeleteAccount() {
  const navigate = useNavigate();
  const { user } = _getSecureLs("seekerAuth");
  const [msg, setMsg] = useState(null);
  console.log(msg);

  return (
    <div>
      <form
        onSubmit={(e) => {
          deleteSeekerAccount(e, user?.id, setMsg);
          _remove("seekerAuth");
          navigate("/register/seeker");
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
