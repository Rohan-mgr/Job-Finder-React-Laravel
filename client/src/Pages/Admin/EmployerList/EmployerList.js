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
          <th>Employer ID</th>
          <th>Employer Name</th>
          <th>Company Name</th>
          <th>CompanyEmail</th>
          <th>Phone num</th>
        </tr>
      </thead>
      <tbody>
        {jobLists?.map((e, i) => {
          return (
            <tr key={i}>
              <td>{i++}</td>
              <td>{e["employer_id"]}</td>
              <td>{e["name"]}</td>
              <td>{e["companyName"]}</td>
              <td>{e["email"]}</td>
              <td>{e["mobile"]}</td>
              <td>{e[""]}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default JobList;
