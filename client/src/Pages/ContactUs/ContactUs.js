//import React, { useState } from "react";
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { div, Form, Button, Row, Col } from "react-bootstrap";

// function ContactUs() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   export const ContactUs = () => {
//     const form = useRef();

//     const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_kxy4p9o', 'template_9vzqa7s', form.current, 'CSJgHzw331hxJitkL')
//       .then((result) => {
//           console.log(result.text);
//           console.log("")
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
//     <div className="container">
//       <h2 className="text-center">Contact Us</h2>
//       <Form onSubmit={sendEmail}>
//         <Form.Group>
//           <Form.Label>Full Name/Username</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter your name"
//             name="name"
//             value={user_name}
//           />
//         </Form.Group>

//         <Form.Group>
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={user_email}
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Subject</Form.Label>
//           <Form.Control
//             type="text"
//             name="subject"
//             placeholder="Enter subject"
//             value={subject}
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Message</Form.Label>
//           <Form.Control as="textarea" rows={5} value={message} name="comment" />
//         </Form.Group>
//         <Button className="my-4" type="submit" block>
//           Submit
//         </Button>
//       </Form>

//       <div className="">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2122654837285!2d85.32525975!3d27.71073175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1908c874a40b%3A0x87a26cbf3b75037c!2sKamal%20Pokhari!5e0!3m2!1sen!2snp!4v1676814746137!5m2!1sen!2snp"
//           width="100%"
//           height="450"
//           style={{border:0}}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         />
//       </div>
//     </div>
//   );
// }

//  export default ContactUs;
