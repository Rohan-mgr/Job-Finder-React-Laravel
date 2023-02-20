import React, { useState } from "react";
import "./PostJob.css";
import Form from "react-bootstrap/Form";
import { handlePostJob } from "../../../services/employer";
import { _getSecureLs } from "../../../helper/storage";
import { useNavigate } from "react-router-dom";

function PostJob() {
  const navigate = useNavigate();
  const { user } = _getSecureLs("employerAuth");
  const [jobInfo, setJobInfo] = useState({
    jobTitle: "",
    companyLogo: null,
    jobCategory: "",
    jobType: "",
    jobLevel: "",
    vacancy: "",
    jobLocation: "",
    skills: "",
    education: "",
    experience: "",
    salary: "",
    description: "",
  });
  const handleChange = (e) => {
    setJobInfo((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    try {
      const response = await handlePostJob(e, jobInfo, user?.id);
      navigate("/account/employer/job_lists");
    } catch (e) {
      throw new Error(e);
    }
  };
  return (
    <div className="Post_Job">
      <Form
        className="col-12 col-md-9 col-lg-10"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h2>Post a new job</h2>
        </Form.Group>

        <div className="d-md-flex d-lg-flex gap-5">
          <Form.Group className="mb-3 col-12" controlId="formBasicEmail">
            <Form.Label>Job Title</Form.Label>
            <Form.Control
              type="text"
              name="jobTitle"
              required
              value={jobInfo.jobTitle}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
        </div>
        <div className="d-md-flex d-lg-flex gap-5">
          <Form.Group className="mb-3 col-12" controlId="formBasicEmail">
            <Form.Label>Company Logo</Form.Label>
            <Form.Control
              type="file"
              name="companyLogo"
              accept="image/*"
              required
              onChange={(e) => {
                if (e.target.files[0] && e.target.files.length > 0) {
                  setJobInfo((prevState) => {
                    return {
                      ...prevState,
                      [e.target.name]: e.target.files[0],
                    };
                  });
                }
              }}
            />
          </Form.Group>
        </div>

        <div className="d-md-flex d-lg-flex">
          <Form.Group
            className="mb-3 col-12 col-md-6 col-lg-6"
            controlId="formBasicEmail"
          >
            <Form.Label>Job Category</Form.Label>
            <Form.Select
              required
              aria-label="Floating label select example"
              name="jobCategory"
              value={jobInfo.jobCategory}
              onChange={(e) => handleChange(e)}
            >
              <option>Select Job Category</option>
              <option value="Design & Creative">Design & Creative</option>
              <option value="Design & Development">Design & Development</option>
              <option value="Sales & Marketing">Sales & Marketing</option>
              <option value="Mobile Application">Mobile Application</option>
              <option value="Construction">Construction</option>
              <option value="Information Technology">
                Information Technology
              </option>
              <option value="Real Estate">Real Estate</option>
              <option value="Content Writer">Content Writer</option>
            </Form.Select>
          </Form.Group>

          <Form.Group
            className="mb-3 col-12 col-md-6 col-lg-6"
            controlId="formBasicEmail"
          >
            <Form.Label>Job Type</Form.Label>
            <Form.Select
              aria-label="Floating label select example"
              name="jobType"
              value={jobInfo.jobType}
              onChange={(e) => handleChange(e)}
              required
            >
              <option>Select Job Type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
            </Form.Select>
          </Form.Group>
        </div>

        <div className="d-md-flex d-lg-flexS">
          <Form.Group
            className="mb-3 col-12 col-md-6 col-lg-6"
            controlId="formBasicPassword"
          >
            <Form.Label>Job Level</Form.Label>
            <Form.Select
              aria-label="Floating label select example"
              name="jobLevel"
              value={jobInfo.jobLevel}
              onChange={(e) => handleChange(e)}
              required
            >
              <option>Select Job Level</option>
              <option value="Intern Level">Intern Level</option>
              <option value="Entry Level">Entry Level</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Senior Level">Senior Level</option>
              <option value="Top Level">Top Level</option>
            </Form.Select>
          </Form.Group>

          <Form.Group
            className="mb-3 col-12 col-md-6 col-lg-6"
            controlId="formBasicPassword2"
          >
            <Form.Label>No of Vacancy</Form.Label>
            <Form.Control
              type="text"
              name="vacancy"
              value={jobInfo.vacancy}
              onChange={(e) => handleChange(e)}
              required
            />
          </Form.Group>
        </div>

        <div className="d-md-flex d-lg-flexS">
          <Form.Group
            className="mb-3 col-12 col-md-6 col-lg-6"
            controlId="formBasicPassword"
          >
            <Form.Label>Job Location</Form.Label>
            <Form.Control
              type="text"
              name="jobLocation"
              placeholder="District name eg. Hetauda"
              value={jobInfo.jobLocation}
              onChange={(e) => handleChange(e)}
              required
            />
          </Form.Group>

          <Form.Group
            className="mb-3 col-12 col-md-6 col-lg-6"
            controlId="formBasicPassword2"
          >
            <Form.Label>Skills</Form.Label>
            <Form.Control
              type="text"
              name="skills"
              placeholder="eg. reactjs, nodejs, c++"
              value={jobInfo.skills}
              onChange={(e) => handleChange(e)}
              required
            />
          </Form.Group>
        </div>

        <div className="d-md-flex d-lg-flexS">
          <Form.Group
            className="mb-3 col-12 col-md-6 col-lg-6"
            controlId="formBasicPassword"
          >
            <Form.Label>Education Preference</Form.Label>
            <Form.Select
              aria-label="Floating label select example"
              name="education"
              value={jobInfo.education}
              onChange={(e) => handleChange(e)}
              required
            >
              <option>Select Education Preference</option>
              <option value="Under SLC">Under SLC</option>
              <option value="SLC">SLC</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Master's">Master's</option>
              <option value="Bachelors's">Bachelors's</option>
              <option value="phd.">phd.</option>
            </Form.Select>
          </Form.Group>

          <Form.Group
            className="mb-3 col-12 col-md-6 col-lg-6"
            controlId="formBasicPassword2"
          >
            <Form.Label>Experience(in years)</Form.Label>
            <Form.Control
              type="text"
              name="experience"
              placeholder="eg. 1 year, 5 years etc"
              value={jobInfo.experience}
              onChange={(e) => handleChange(e)}
              required
            />
          </Form.Group>
        </div>

        <Form.Group className="mb-3 col-12" controlId="formBasicPassword2">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="text"
            name="salary"
            placeholder="in rupees"
            value={jobInfo.salary}
            onChange={(e) => handleChange(e)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 col-12" controlId="formBasicPassword2">
          <Form.Label>Job Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={jobInfo.description}
            onChange={(e) => handleChange(e)}
            style={{ height: "100px" }}
          />
        </Form.Group>

        <button className="btn head-btn1 col-12" type="submit">
          Post A New Job
        </button>
      </Form>
    </div>
  );
}

export default PostJob;
