import React, { useState, useEffect, useCallback } from "react";
import "../../scss/_featured-Jobs.scss";
import { getRecentJobs } from "../../services/seeker";

function RecentJobs() {
  const [recentJobs, setRecentJobs] = useState([]);

  const getCurrentJobs = useCallback(async () => {
    try {
      const response = await getRecentJobs();
      setRecentJobs(response?.jobs.reverse());
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  useEffect(() => {
    getCurrentJobs();
  }, [getCurrentJobs]);
  console.log(recentJobs.reverse());
  return (
    <section className="featured-job-area feature-padding">
      <div className="container">
        {/* Section Tittle */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center">
              <span>Recent Job</span>
              <h2>Featured Jobs</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            {/* single-job-content */}
            {/* {recentJobs?.length > 0 ? ( */}
            {recentJobs?.reverse().map((job) => {
              return (
                <div className="single-job-items mb-30">
                  <div className="job-items">
                    <div className="company-img">
                      <a href={`/job_details/${job.id}`}>
                        <img
                          src={`http://localhost:8000/${job.companyLogo}`}
                          alt="company Logo"
                        />
                      </a>
                    </div>
                    <div className="job-tittle">
                      <a href={`/job_details/${job.id}`}>
                        <h4>{job.jobTitle}</h4>
                      </a>
                      <ul>
                        <li>
                          <i class="fas fa fa-sitemap" aria-hidden="true"></i>
                          {job.jobCategory}
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          {job.jobLocation.charAt(0).toUpperCase() +
                            job.jobLocation.slice(1)}
                          , Nepal
                        </li>
                        <li>${job.salary}</li>
                        <li>
                          <i class="fas fa fa-level-up" aria-hidden="true"></i>
                          {job.jobLevel}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="items-link f-right">
                    <a href={`/job_details/${job.id}`}>{job.jobType}</a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentJobs;
