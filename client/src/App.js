import React from "react";
import "./App.css";
import OurTeam from "./Pages/Team/OurTeam";
import Dashboard from "./Pages/Admin/Dashboard";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import Login from "./Pages/Login/Login";
import Register from "./Pages/SignUp/Register";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "./Pages/Admin/AdminLogin/AdminLogin";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ProtectedRouteEmployer from "./Components/PrivateRoute/ProtectedRouteEmployer";
import ProtectedRouteSeeker from "./Components/PrivateRoute/ProtectedRouteSeeker";
import UserDashboard from "./Pages/UserDashboard/Dashboard";
import UploadProfile from "./Pages/UserDashboard/UploadProfile/UploadProfile";
import ChangePassword from "./Pages/UserDashboard/ChangePassword/ChangePassword";
import CV from "./Pages/UserDashboard/CV/CV";
import Resume from "./Pages/UserDashboard/Resume/Resume";
import Logout from "./Components/Logout/Logout";
import DeleteAccount from "./Components/DeleteAccount/DeleteAccount";
import CommonDashboard from "./Pages/UserDashboard/CommonDashboard";
import PostJob from "./Pages/UserDashboard/PostJob/PostJob";
import JobList from "./Pages/UserDashboard/JobList/JobList";
import RegisteredEmployes from "./Pages/Admin/EmployerList/EmployerList";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="contact_us" element={<ContactUs />} />
          <Route path="services" element={<Services />} />
          <Route path="login/:mode" element={<Login />} />
          <Route path="register/:mode" element={<Register />} />
        </Route>
        <Route path="/ourteam" element={<OurTeam />} />
        <Route
          path="/account/employer"
          element={
            <ProtectedRouteEmployer>
              <UserDashboard />
            </ProtectedRouteEmployer>
          }
        >
          <Route path="dashboard" element={<CommonDashboard />} />
          <Route path="upload_photo" element={<UploadProfile />} />
          <Route path="logout" element={<Logout Mode="employer" />} />
          <Route path="post_job" element={<PostJob />} /> 
          <Route path="job_lists" element={<JobList />} />
          <Route
            path="change_password"
            element={<ChangePassword Mode="employer" />}
          />

          <Route
            path="delete_account"
            element={<DeleteAccount Mode="employer" />}
          />
        </Route>
        <Route
          path="/account/seeker"
          element={
            <ProtectedRouteSeeker>
              <UserDashboard />
            </ProtectedRouteSeeker>
          }
        >
          <Route path="dashboard" element={<CommonDashboard />} />
          <Route path="upload_photo" element={<UploadProfile />} />
          <Route
            path="change_password"
            element={<ChangePassword Mode="seeker" />}
          />
          <Route path="cv_cover_letter" element={<CV />} />
          <Route path="my_resume" element={<Resume />} />
          <Route
            path="delete_account"
            element={<DeleteAccount Mode="seeker" />}
          />
          <Route path="logout" element={<Logout Mode="seeker" />} />
        </Route>
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard" element={<p>This is dashboard</p>} />
          <Route path="company" element={<p>This is company</p>} />
          <Route path="EmployerList" element={<RegisteredEmployes/>} />
        </Route>
        <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>
    </div>
  );
}

export default App;
