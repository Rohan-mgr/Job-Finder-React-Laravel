import { Navigate } from "react-router-dom";
import { _getSecureLs } from "../../helper/storage";
import { useParams } from "react-router-dom";

function ProtectedRouteEmployer({ children }) {
  const { isLoggedIn } = _getSecureLs("employerAuth");
  console.log(isLoggedIn);

  if (!isLoggedIn) {
    console.log("hey");
    // return <Navigate to="/login/employer" />;
    return <Navigate to="/login/employer" />;
  }

  return children;
}

export default ProtectedRouteEmployer;
