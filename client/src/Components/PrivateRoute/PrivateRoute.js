import { Navigate } from "react-router-dom";
import { _getSecureLs } from "../../helper/storage";

function PrivateRoute({ children }) {
  const { isLoggedIn } = _getSecureLs("adminAuth");

  if (!isLoggedIn) {
    return <Navigate to="/adminlogin" />;
  }

  return children;
}

export default PrivateRoute;
