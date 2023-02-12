import { Navigate } from "react-router-dom";
import { _getSecureLs } from "../../helper/storage";
import { useParams } from "react-router-dom";

function ProtectedRouteSeeker({ children }) {
  const { isLoggedIn } = _getSecureLs("seekerAuth");
  console.log(isLoggedIn);

  if (!isLoggedIn) {
    console.log("hey");
    // return <Navigate to="/login/employer" />;
    return <Navigate to="/login/seeker" />;
  }

  return children;
}

export default ProtectedRouteSeeker;
