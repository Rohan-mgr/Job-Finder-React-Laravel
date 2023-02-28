import React, { useState, useEffect, useCallback } from "react";
import Table from "react-bootstrap/Table";
import {
  getEmployerPostedJob,
  handleDeleteJob,
  getApplicantDetails,
} from "../../../services/employer";
import { _getSecureLs } from "../../../helper/storage";
import { FaSuitcase } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function JobList() {
  const navigate = useNavigate();
  const [jobLists, setJobLists] = useState(null);
  const [coutApplicants, setCountApplicants] = useState(null);
  const { user } = _getSecureLs("employerAuth");

  const getApplicants = useCallback(
    async (jobId) => {
      try {
        const response = await getApplicantDetails(jobId);
        console.log(response);
        navigate("/account/employer/job_lists/applicants", {
          state: response?.applicant,
        });
      } catch (e) {
        throw new Error(e);
      }
    },
    [navigate]
  );

  const getJobLIsts = useCallback(async () => {
    try {
      const response = await getEmployerPostedJob(user?.id);
      setJobLists(response?.message);
      setCountApplicants(response?.applicants);
    } catch (e) {
      throw new Error(e);
    }
  }, [user?.id]);

  useEffect(() => {
    getJobLIsts();
  }, [getJobLIsts]);

  const handleDelete = async (id) => {
    try {
      const response = await handleDeleteJob(id);
      console.log(response);
      window.location.reload(true);
    } catch (e) {
      throw new Error(e);
    }
  };

  return (
    <div style={{ margin: "1rem 0" }}>
      <h4>
        <FaSuitcase
          style={{
            marginTop: "-10px",
            fontSize: "2rem",
            color: "#010b1d",
          }}
        />{" "}
        All Posted Jobs
      </h4>
      {jobLists?.length !== 0 ? (
        <Table responsive striped bordered hover style={{ marginTop: "1rem" }}>
          <thead>
            <tr>
              <th>S.N.</th>
              <th>Job Title</th>
              <th>Job Type</th>
              <th>Job Level</th>
              <th>Vacancy</th>
              <th>Education</th>
              <th>Experience</th>
              <th>Salary</th>
              <th>Applicants</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobLists?.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e["jobTitle"]}</td>
                  <td>{e["jobType"]}</td>
                  <td>{e["jobLevel"]}</td>
                  <td>{e["vacancy"]}</td>
                  <td>{e["education"]}</td>
                  <td>{e["experience"]}</td>
                  <td>{e["salary"]}</td>
                  <td>
                    <button
                      style={{
                        background: "#fb246a",
                        padding: "8px",
                        borderRadius: "7px",
                      }}
                      onClick={() => getApplicants(e["id"])}
                    >
                      {coutApplicants[i]} Candidate
                    </button>
                  </td>
                  <td style={{ paddingTop: "5px" }}>
                    <button
                      onClick={() => handleDelete(e["id"])}
                      style={{
                        color: "#fff",
                        background: "red",
                        padding: "10px",
                        borderRadius: "7px",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <h4 className="text-center">No Job posted by the employer yet</h4>
      )}
    </div>
  );
}

export default JobList;
