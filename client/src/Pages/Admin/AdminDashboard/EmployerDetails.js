import React, { useState, useEffect, useCallback } from "react";
import {
  adminEmployerDetails,
  adminEmployerDelete,
} from "../../../services/auth";
import Table from "react-bootstrap/Table";
import { FaUserCircle } from "react-icons/fa";

function EmployerDetails() {
  const [employerDetails, setEmployerDetails] = useState(null);
  const employerDetailsAdmin = useCallback(async (jobId) => {
    try {
      const response = await adminEmployerDetails();
      console.log(response);
      setEmployerDetails(response);
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  useEffect(() => {
    employerDetailsAdmin();
  });

  const handleAdminEmployerDelete = async (id) => {
    try {
      const response = await adminEmployerDelete(id);
      console.log(response);
      window.location.reload(true);
    } catch (e) {
      throw new Error(e);
    }
  };

  return (
    <div style={{ margin: "1rem 0" }}>
      <h4>
        <FaUserCircle
          style={{
            marginTop: "-10px",
            fontSize: "2rem",
            color: "#010b1d",
          }}
        />{" "}
        Total Registered Employers
      </h4>
      {employerDetails?.length !== 0 ? (
        <Table responsive striped bordered hover style={{ marginTop: "1rem" }}>
          <thead>
            <tr>
              <th>S.N.</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Company Name</th>
              <th>E-mail</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employerDetails?.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    <img
                      style={{ width: "15vh", height: "15vh" }}
                      src={
                        e["img_path"] !== null
                          ? `http://localhost:8000/${e["img_path"]}`
                          : require("../../../Assets/Images/user.png")
                      }
                      alt="logo"
                    />
                  </td>
                  <td>{e["name"]}</td>
                  <td>{e["companyName"]}</td>
                  <td>
                    <a
                      href={`mailto:${e["email"]}`}
                      style={{ textDecoration: "none", color: "#fb246a" }}
                    >
                      {e["email"]}
                    </a>
                  </td>
                  <td>{e["mobile"]}</td>
                  <td style={{ paddingTop: "5px" }}>
                    <button
                      onClick={() => handleAdminEmployerDelete(e["id"])}
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

export default EmployerDetails;
