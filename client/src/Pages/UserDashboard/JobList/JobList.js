import React, { useState, useEffect, useCallback } from "react";
import Table from "react-bootstrap/Table";
import {
  getEmployerPostedJob,
  handleDeleteJob,
} from "../../../services/employer";
import { _getSecureLs } from "../../../helper/storage";
import { FaSuitcase } from "react-icons/fa";

function JobList() {
  const [jobLists, setJobLists] = useState(null);
  const { user } = _getSecureLs("employerAuth");

  const getJobLIsts = useCallback(async () => {
    try {
      const response = await getEmployerPostedJob(user?.id);
      setJobLists(response?.message);
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
  console.log(jobLists);

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
        <Table responsive style={{ marginTop: "1rem" }}>
          <thead>
            <tr>
              <th>S.N.</th>
              <th>Job Title</th>
              <th>Company Logo</th>
              <th>Job Category</th>
              <th>Job Type</th>
              <th>Job Level</th>
              <th>Vacancy</th>
              <th>Job Location</th>
              <th>Skills</th>
              <th>Education</th>
              <th>Experience</th>
              <th>Salary</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobLists?.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e["jobTitle"]}</td>
                  <td>
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src={`http://localhost:8000/${e["companyLogo"]}`}
                      alt="logo"
                    />
                  </td>
                  <td>{e["jobCategory"]}</td>
                  <td>{e["jobType"]}</td>
                  <td>{e["jobLevel"]}</td>
                  <td>{e["vacancy"]}</td>
                  <td>{e["jobLocation"]}</td>
                  <td>{e["skills"]}</td>
                  <td>{e["education"]}</td>
                  <td>{e["experience"]}</td>
                  <td>{e["salary"]}</td>
                  <td>{e["description"]}</td>
                  <td style={{ paddingTop: "17px" }}>
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
