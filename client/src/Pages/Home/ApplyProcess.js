import React from "react";
import "../../scss/_apply-proces.scss";
// import "../ApplyProcess/ApplyProcess.css";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { SiSymantec } from "react-icons/si";
// import "../../../scss/_apply-process.scss";

function ApplyProcess() {
  return (
    <div className="apply-bg apply-process-area apply-bg pt-150 pb-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle white-text text-center">
              <span>Apply process</span>
              <h2> How it works</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-process text-center mb-30">
              <div className="process-ion">
                <span>
                  <AiOutlineFileSearch />
                </span>
              </div>
              <div className="process-cap">
                <h5>1. Search a job</h5>
                <p>
                  Customize your search by job type, location, salary range, and
                  other filters to narrow down your search results.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-process text-center mb-30">
              <div className="process-ion">
                <span>
                  <SiSymantec />
                </span>
              </div>
              <div className="process-cap">
                <h5>2. Apply for job</h5>
                <p>
                  Once you've found a job that interests you, submit your resume and
                  cover letter to the job posting.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-process text-center mb-30">
              <div className="process-ion">
                <span>
                  <BsFillPersonFill />
                </span>
              </div>
              <div className="process-cap">
                <h5>3. Get your job</h5>
                <p>
                  Get your job with the employer. If your application is genuine,
                   you wil appointed by the employer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplyProcess;
