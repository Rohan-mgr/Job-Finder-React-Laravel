import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { FaRegAddressCard } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

function Applicants() {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);
  return (
    <div style={{ margin: "1rem 0" }}>
      <h4 style={{ display: "inline" }}>
        <FaRegAddressCard
          style={{
            marginTop: "-5px",
            fontSize: "2rem",
            color: "#010b1d",
          }}
        />{" "}
        Applicants Details
      </h4>
      <p
        style={{ float: "right", cursor: "pointer", fontWeight: "500" }}
        onClick={() => navigate("/account/employer/job_lists")}
      >
        <BsArrowLeft /> Job Lists
      </p>
      {state?.length !== 0 ? (
        <Table responsive striped bordered hover style={{ marginTop: "1rem" }}>
          <thead>
            <tr>
              <th>S.N.</th>
              <th>Full Name</th>
              <th>Profile</th>
              <th>Email</th>
              <th>Resume</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {state?.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e["name"]}</td>
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

                  <td>
                    <a
                      href={`mailto:${e["email"]}`}
                      style={{ textDecoration: "none", color: "#fb246a" }}
                    >
                      {e["email"]}
                    </a>
                  </td>
                  <td>
                    <a
                      style={{
                        background: "#fb246a",
                        padding: "8px",
                        borderRadius: "7px",
                      }}
                      href={`http://localhost:8000/${e["resume"]}`}
                      download
                    >
                      <AiOutlineEye
                        style={{ fontSize: "1.2rem", marginTop: "-2px" }}
                      />
                      View
                    </a>
                  </td>
                  <td>{e["mobile"]}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <h4 className="text-center">No Job Seeker apply for this job yet</h4>
      )}
    </div>
  );
}

export default Applicants;
