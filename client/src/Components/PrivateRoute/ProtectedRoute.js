import { Navigate } from "react-router-dom";
import { _getSecureLs } from "../../helper/storage";
import { useParams } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = _getSecureLs("userAuth");
  const { mode } = useParams();
  console.log(mode);

  if (!isLoggedIn) {
    // return <Navigate to="/login/employer" />;
    return (
      <Navigate to={`/login/${mode === "employer" ? "employer" : "seeker"}`} />
    );
  }

  return children;
}

export default ProtectedRoute;
