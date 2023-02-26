import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getJobDetails, handleApplyForJob } from "../../services/seeker";
import { _getSecureLs } from "../../helper/storage";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function JobDetails() {
  const navigate = useNavigate();
  const { user } = _getSecureLs("seekerAuth");
  const { id } = useParams();
  const [recentJob, setRecentJob] = useState(null);
  const [companyInfo, setcompanyInfo] = useState(null);
  // console.log(user?.id);

  const handleApplyProcess = async () => {
    if (user?.id === undefined || user?.id === null) {
      navigate("/login/seeker");
    } else {
      try {
        const response = await handleApplyForJob(id, user?.id);
        console.log(response);
        navigate("/search_jobs/job_listings");
        toast.success(response?.message);
      } catch (e) {
        throw new Error(e);
      }
    }
  };

  const getCurrentJobDetails = useCallback(async () => {
    try {
      const response = await getJobDetails(id);
      setRecentJob(response?.job);
      setcompanyInfo(response?.companyInfo);
    } catch (e) {
      throw new Error(e);
    }
  }, [id]);

  useEffect(() => {
    getCurrentJobDetails();
  }, [getCurrentJobDetails]);
  // console.log(companyInfo);
  return (
    <main>
      {/* Hero Area Start*/}
      <div className="slider-area ">
        <div
          className="single-slider section-overly slider-height2 d-flex align-items-center"
          style={{
            backgroundImage: `url(${require("../../Assets/Images/job_details_banner.jpg")})`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap text-center">
                  <h2>{recentJob?.jobTitle}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Area End */}
      {/* job post company Start */}
      <div className="job-post-company pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-between">
            {/* Left Content */}
            <div className="col-xl-7 col-lg-8">
              {/* job single */}
              <div className="single-job-items mb-50">
                <div className="job-items">
                  <div className="company-img company-img-details">
                    <img
                      src={`http://localhost:8000/${recentJob?.companyLogo}`}
                      alt="logo"
                    />
                  </div>
                  <div className="job-tittle">
                    <h4>{recentJob?.jobTitle}</h4>
                    <ul>
                      <li>{recentJob?.jobCategory}</li>
                      <li>
                        <i className="fas fa-map-marker-alt" />
                        {recentJob?.jobLocation.charAt(0).toUpperCase() +
                          recentJob?.jobLocation.slice(1)}
                        , Nepal
                      </li>
                      <li>${recentJob?.salary}</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* job single End */}
              <div className="job-post-details">
                <div className="post-details1 mb-50">
                  {/* Small Section Tittle */}
                  <div className="small-section-tittle">
                    <h4>Job Description</h4>
                  </div>
                  <p>{recentJob?.description}</p>
                </div>
                <div className="post-details2  mb-50">
                  {/* Small Section Tittle */}
                  <div className="small-section-tittle">
                    <h4>Required Knowledge, Skills, and Abilities</h4>
                  </div>
                  <ul>
                    <li>
                      Candidate must possess{" "}
                      <strong>{recentJob?.skills} </strong>
                      skills
                    </li>
                    <li>Flexible working with team leaders and team members</li>
                    <li>Ability to Research and make right decision</li>
                    <li>Strong problem solving and aptitude skills</li>
                  </ul>
                </div>
                <div className="post-details2  mb-50">
                  {/* Small Section Tittle */}
                  <div className="small-section-tittle">
                    <h4>Education + Experience</h4>
                  </div>
                  <ul>
                    <li>
                      {recentJob?.experience} years of related professional
                      experience
                    </li>
                    <li>
                      Academic Education requirement Level: &nbsp;
                      {recentJob?.education}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Right Content */}
            <div className="col-xl-4 col-lg-4">
              <div className="post-details3  mb-50">
                {/* Small Section Tittle */}
                <div className="small-section-tittle">
                  <h4>Job Overview</h4>
                </div>
                <ul>
                  <li>
                    Posted date :{" "}
                    <span>
                      {new Date(recentJob?.updated_at).toLocaleString()}
                    </span>
                  </li>
                  <li>
                    Location :{" "}
                    <span>
                      {recentJob?.jobLocation.charAt(0).toUpperCase() +
                        recentJob?.jobLocation.slice(1)}
                    </span>
                  </li>
                  <li>
                    Vacancy : <span>{recentJob?.vacancy}</span>
                  </li>
                  <li>
                    Job nature : <span>{recentJob?.jobType}</span>
                  </li>
                  <li>
                    Salary : <span>${recentJob?.salary} yearly</span>
                  </li>
                </ul>
                <div className="apply-btn2">
                  <button
                    className="btn head-btn1"
                    disabled={+recentJob?.vacancy === 0}
                    onClick={handleApplyProcess}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
              <div className="post-details4  mb-50">
                {/* Small Section Tittle */}
                <div className="small-section-tittle">
                  <h4>Company Information</h4>
                </div>
                <ul>
                  <li>
                    Name: <span>{companyInfo?.companyName} </span>
                  </li>
                  <li>
                    Owner : <span>{companyInfo?.name}</span>
                  </li>
                  <li>
                    Contact : <span>{companyInfo?.mobile}</span>
                  </li>
                  <li>
                    Email: <span>{companyInfo?.email}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* job post company End */}
    </main>
  );
}

export default JobDetails;
