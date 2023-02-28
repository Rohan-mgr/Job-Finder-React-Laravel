import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import Applicants from "./Pages/UserDashboard/JobList/Applicants";
import JobDetails from "./Components/JobDetails/JobDetails";
import JobListings from "./Pages/JobListings/JobListings";
import Page404 from "./Pages/404/404";
import AdminDashboard from "./Pages/Admin/AdminDashboard/AdminDashboard";
import EmployerDetails from "./Pages/Admin/AdminDashboard/EmployerDetails";
import SeekerDetails from "./Pages/Admin/AdminDashboard/SeekerDetails";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="contact_us" element={<ContactUs />} />
          <Route path="services" element={<Services />} />
          <Route path="login/:mode" element={<Login />} />
          <Route path="register/:mode" element={<Register />} />
          <Route path="/job_details/:id" element={<JobDetails />} />
          <Route path="/search_jobs/job_listings" element={<JobListings />} />
        </Route>
        <Route path="*" element={<Page404 />} />

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
          <Route path="job_lists/applicants" element={<Applicants />} />
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
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="employer_details" element={<EmployerDetails />} />
          <Route path="seeker_details" element={<SeekerDetails />} />
          <Route path="logout" element={<Logout Mode="admin" />} />
        </Route>
        <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
