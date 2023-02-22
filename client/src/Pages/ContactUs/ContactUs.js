import React from "react";
import "./ContactUs.css";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { handleUserMessage } from "../../services/auth";
import { toast } from "react-toastify";

export const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      user_email: "",
      subject: "",
      message: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        const data = await handleUserMessage(values);
        console.log(data);
        if (!data) {
          throw new Error("Message can't be send");
        }
        resetForm({ values: "" });
        toast("Message Sent Successfully");
        window.scrollTo(0, 0);
      } catch (e) {
        toast.error(e);
        console.log("error", e);
      }
    },
  });

  return (
    <div>
      <div className="breadCrum">
        <h2>Contact Us</h2>
        <h4>Take your career to the next level.</h4>
      </div>
      <Form className="container mt-5" onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Label>Full Name/Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="user_email"
            placeholder="Enter your email"
            value={formik.values.user_email}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            placeholder="Enter subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
          />
        </Form.Group>
        <Button className="my-4" type="submit" block>
          {formik.isSubmitting ? "Submitting your message" : "Submit"}
        </Button>
      </Form>

      <div className="google_map my-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2122654837285!2d85.32525975!3d27.71073175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1908c874a40b%3A0x87a26cbf3b75037c!2sKamal%20Pokhari!5e0!3m2!1sen!2snp!4v1676814746137!5m2!1sen!2snp"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default ContactUs;
