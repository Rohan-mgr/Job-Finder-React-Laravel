import React, { useState, useCallback, useEffect } from "react";
import nameInitials from "name-initials";
import Avatar from "../../../Components/avatar/avatar";
import { _getSecureLs } from "../../../helper/storage";
import { handleAdminDashboardDetails } from "../../../services/auth";

function AdminDashboard() {
  const { user } = _getSecureLs("adminAuth");
  const [dashboardDetails, setDashboardDetails] = useState({
    jobCount: 0,
    seekerCount: 0,
    employerCount: 0,
    applicantCount: 0,
  });

  const getDashboardDetails = useCallback(async (jobId) => {
    try {
      const response = await handleAdminDashboardDetails();
      console.log(response);
      setDashboardDetails((prevState) => {
        return {
          ...prevState,
          jobCount: response?.jobCount,
          seekerCount: response?.seekerCount,
          employerCount: response?.employerCount,
          applicantCount: response?.applicantCount,
        };
      });
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  useEffect(() => {
    getDashboardDetails();
  });

  return (
    <section className="content">
      <div className="mb-5 mt-3">
        <h1>Welcome, </h1>
        <div className="d-flex align-items-center">
          <Avatar initial={nameInitials(`${user?.name}`)} />
          <h2 className="ml-3 mt-2">
            <strong>{user?.name}!</strong>
          </h2>
        </div>
      </div>
      <div className="container-fluid">
        {/* Small boxes (Stat box) */}
        <div className="row">
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-info">
              <div className="inner">
                <h3>{dashboardDetails.jobCount}</h3>
                <p>Total Jobs</p>
              </div>
              <div className="icon">
                <i className="fa fa-briefcase" />
              </div>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-success">
              <div className="inner">
                <h3>{dashboardDetails.seekerCount}</h3>
                <p>Total Job Seekers</p>
              </div>
              <div className="icon">
                <i className="fa fa-user" />
              </div>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-warning">
              <div className="inner">
                <h3>{dashboardDetails.employerCount}</h3>
                <p>Total Employers</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add" />
              </div>
            </div>
          </div>
          {/* ./col */}
          <div className="col-lg-3 col-6">
            {/* small box */}
            <div className="small-box bg-primary">
              <div className="inner">
                <h3>{dashboardDetails.applicantCount}</h3>
                <p>Total Applicants</p>
              </div>
              <div className="icon">
                <i className="fa fa-address-card" />
              </div>
            </div>
          </div>
          {/* ./col */}
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
