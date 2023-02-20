import React, { useState, useEffect, useCallback } from "react";
import Table from "react-bootstrap/Table";
import { getEmployerPostedJob } from "../../../services/employer";
import { _getSecureLs } from "../../../helper/storage";

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

  console.log(jobLists?.map((e) => e));

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>S.N.</th>
          <th>Posted By</th>
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
        </tr>
      </thead>
      <tbody>
        {jobLists?.map((e, i) => {
          return (
            <tr key={i}>
              <td>{i++}</td>
              <td>{e["employer_id"]}</td>
              <td>{e["jobTitle"]}</td>
              <td>{e["companyLogo"]}</td>
              <td>{e["jobCategory"]}</td>
              <td>{e["jobType"]}</td>
              <td>{e["jobLevel"]}</td>
              <td>{e["vacancy"]}</td>
              <td>{e["jonLocation"]}</td>
              <td>{e["skills"]}</td>
              <td>{e["education"]}</td>
              <td>{e["experience"]}</td>
              <td>{e["salary"]}</td>
              <td>{e["description"]}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default JobList;
