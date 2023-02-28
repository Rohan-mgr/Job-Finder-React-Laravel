import React, { useState, useCallback, useEffect } from "react";
import "../../scss/_job_listing.scss";
import { useLocation } from "react-router-dom";
import { handleJobSearch } from "../../services/seeker";
import { getRecentJobs } from "../../services/seeker";

function JobListings() {
  const [searchJobs, setSearchJobs] = useState([]);

  const search = useLocation().search;
  const title = new URLSearchParams(search).get("jobTitle");
  const location = new URLSearchParams(search).get("jobLocation");
  console.log(title, location);

  const handleSearchJobs = useCallback(async () => {
    try {
      const response = await handleJobSearch({
        jobTitle: title,
        jobLocation: location,
      });
      console.log(response);
      setSearchJobs(response?.jobs);
    } catch (e) {
      throw new Error(e);
    }
  }, [location, title]);

  const getAllJobs = useCallback(async () => {
    try {
      const response = await getRecentJobs();
      console.log(response, "allJobs");
      setSearchJobs(response?.jobs);
      //   setRecentJobs(response?.jobs.reverse());
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  useEffect(() => {
    if (title !== null || location !== null) {
      handleSearchJobs();
    } else {
      getAllJobs();
    }
  }, [handleSearchJobs, getAllJobs, title, location]);

  return (
    <div>
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
                    <h2>Get your job</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Area End */}
        {/* Job List Area Start */}
        {/* {searchJobs.length > 0 ? ( */}
        <div className="job-listing-area pt-120 pb-120">
          <div className="container">
            <div className="row">
              {/* Right content */}
              <div className="col-12">
                {/* Featured_job_start */}
                <section className="featured-job-area">
                  <div className="container">
                    {/* Count of Job list Start */}
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="count-job mb-35">
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                            }}
                          >
                            <strong>{searchJobs.length} Jobs found</strong>
                          </span>
                          {/* Select job items start */}
                          <div className="select-job-items">
                            <form
                              className="search-box"
                              // onSubmit={formik.handleSubmit}
                            >
                              <div className="input-form">
                                <input
                                  type="text"
                                  name="jobTitle"
                                  placeholder="Job Tittle or Keyword"
                                  // value={formik.values.jobTitle}
                                  // onChange={formik.handleChange}
                                />
                              </div>
                              <div className="select-form">
                                <div className="input-form w-100">
                                  <input
                                    type="text"
                                    name="jobLocation"
                                    placeholder="Location (eg. district name)"
                                    //   value={formik.values.jobLocation}
                                    //   onChange={formik.handleChange}
                                  />
                                </div>
                              </div>
                              <div className="search-form">
                                <button
                                  type="submit"
                                  className="btn head-btn1 w-100"
                                  style={{ padding: "2.2rem" }}
                                >
                                  Search
                                </button>
                              </div>
                            </form>
                          </div>
                          {/*  Select job items End*/}
                        </div>
                      </div>
                    </div>
                    {/* Count of Job list End */}
                    {/* single-job-content */}
                    {searchJobs?.length > 0 ? (
                      searchJobs?.map((j) => {
                        return (
                          <div className="single-job-items mb-30">
                            <div className="job-items">
                              <div className="company-img">
                                <a href={`/job_details/${j?.id}`}>
                                  <img
                                    src={`http://localhost:8000/${j?.companyLogo}`}
                                    alt="company logo"
                                  />
                                </a>
                              </div>
                              <div className="job-tittle job-tittle2">
                                <a href={`/job_details/${j?.id}`}>
                                  <h4>{j.jobTitle}</h4>
                                </a>
                                <ul>
                                  <li>{j.jobCategory}</li>
                                  <li>
                                    <i className="fas fa-map-marker-alt" />
                                    {j.jobLocation.charAt(0).toUpperCase() +
                                      j.jobLocation.slice(1)}
                                    , Nepal
                                  </li>
                                  <li>${j.salary}</li>
                                  <li>
                                    <i
                                      class="fas fa fa-level-up"
                                      aria-hidden="true"
                                    ></i>
                                    {j.jobLevel}
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="items-link items-link2 f-right">
                              <a href={`/job_details/${j?.id}`}>{j.jobType}</a>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <h2 className="text-center m-5 text-danger">
                        Sorry 😔 No jobs found
                      </h2>
                    )}
                  </div>
                </section>
                {/* Featured_job_end */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default JobListings;
