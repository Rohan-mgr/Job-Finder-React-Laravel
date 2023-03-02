import React, { useState, useCallback, useEffect } from "react";
import { AiOutlineComment } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import {
  handlePostTestimonial,
  fetchTestimonials,
  handleDeleteTestimonial,
  handleEditTestimonial,
} from "../../../services/auth";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import { useNavigate, useLocation } from "react-router-dom";

function Testimonial() {
  const navigate = useNavigate();

  const search = useLocation().search;
  const tid = new URLSearchParams(search).get("tid");

  const [dbTestimonials, setDBTestimonials] = useState(null);
  const [testimonials, setTestimonials] = useState({
    clientName: "",
    clientProfile: null,
    designation: "",
    companyName: "",
    description: "",
  });

  const getTestimonials = useCallback(async () => {
    try {
      const response = await fetchTestimonials();
      setDBTestimonials(response);
    } catch (e) {
      throw new Error(e);
    }
  }, []);

  const handleChange = (e) => {
    setTestimonials((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    try {
      let response;
      if (tid === null) {
        response = await handlePostTestimonial(e, testimonials);
      } else {
        response = await handleEditTestimonial(e, tid, testimonials);
      }
      toast.success(response?.data?.message);
      navigate("/admin/testimonials");
      window.location.reload(true);
    } catch (e) {
      throw new Error(e);
    }
  };

  const handleEdit = async (testimonial) => {
    navigate(`/admin/testimonials?tid=${testimonial["id"]}`);
    window.scrollTo(0, 0);
    setTestimonials((prevState) => {
      return {
        ...prevState,
        clientName: testimonial.clientName,
        designation: testimonial.designation,
        companyName: testimonial.companyName,
        description: testimonial.description,
      };
    });
    console.log(testimonial);
  };
  console.log(tid);

  const handleDelete = async (id) => {
    try {
      const response = await handleDeleteTestimonial(id);
      console.log(response);
      window.location.reload(true);
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    if (tid === null) {
      setTestimonials({
        clientName: "",
        clientProfile: null,
        designation: "",
        companyName: "",
        description: "",
      });
    }
    getTestimonials();
  }, [getTestimonials, tid]);
  return (
    <div style={{ margin: "1rem 0" }}>
      <h4>
        <AiOutlineComment
          style={{
            marginTop: "-10px",
            fontSize: "2rem",
            color: "#010b1d",
          }}
        />{" "}
        Add Clients Testimonial
      </h4>
      <Form
        className="col-12 col-md-9 col-lg-10 mt-2"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="d-md-flex d-lg-flex gap-5">
          <Form.Group className="mb-3 col-12" controlId="formBasicEmail">
            <Form.Label>Client Name</Form.Label>
            <Form.Control
              type="text"
              name="clientName"
              required
              value={testimonials.clientName}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
        </div>
        {!tid && (
          <div className="d-md-flex d-lg-flex gap-5">
            <Form.Group className="mb-3 col-12" controlId="formBasicEmail">
              <Form.Label>Client Profile</Form.Label>
              <Form.Control
                type="file"
                name="clientProfile"
                accept="image/*"
                required={tid === null ? true : false}
                onChange={(e) => {
                  if (e.target.files[0] && e.target.files.length > 0) {
                    setTestimonials((prevState) => {
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
        )}
        <div className="d-md-flex d-lg-flex gap-5">
          <Form.Group className="mb-3 col-12" controlId="formBasicEmail">
            <Form.Label>Client Designation</Form.Label>
            <Form.Control
              type="text"
              name="designation"
              required
              value={testimonials.designation}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
        </div>
        <div className="d-md-flex d-lg-flex gap-5">
          <Form.Group className="mb-3 col-12" controlId="formBasicEmail">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              name="companyName"
              required
              value={testimonials.companyName}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
        </div>
        <div className="d-md-flex d-lg-flex gap-5">
          <Form.Group className="mb-3 col-12" controlId="formBasicPassword2">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={testimonials.description}
              onChange={(e) => handleChange(e)}
              style={{ height: "100px" }}
            />
          </Form.Group>
        </div>
        <button type="submit" className="btn head-btn1">
          {tid === null ? "Add Testimonial" : "Edit Testimonial"}
        </button>
      </Form>
      <div style={{ margin: "4rem 0" }}>
        <h4>
          <AiOutlineComment
            style={{
              marginTop: "-10px",
              fontSize: "2rem",
              color: "#010b1d",
            }}
          />{" "}
          Testimonial Lists
        </h4>
        {dbTestimonials?.length !== 0 ? (
          <Table
            responsive
            striped
            bordered
            hover
            style={{ marginTop: "1rem" }}
          >
            <thead>
              <tr>
                <th>S.N.</th>
                <th>Client Name</th>
                <th>Designation</th>
                <th>Company</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dbTestimonials?.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e["clientName"]}</td>
                    <td>{e["designation"]}</td>
                    <td>{e["companyName"]}</td>
                    <td style={{ paddingTop: "5px" }}>
                      <button
                        onClick={() => handleEdit(e)}
                        style={{
                          color: "#fff",
                          background: "#0dcaf0",
                          padding: "10px",
                          borderRadius: "7px",
                          margin: "5px",
                        }}
                      >
                        Edit
                      </button>
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
          <h4 className="text-center">No Testimonials posted yet</h4>
        )}
      </div>
    </div>
  );
}

export default Testimonial;
