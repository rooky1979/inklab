import React, { useState } from "react";
import contactStyles from "../styles/Contact.module.css";
import buttonStyles from "../styles/Buttons.module.css";

const ContactForm = ({ backgroundImage }) => {

  const nodemailer = require('nodemailer');

  const mainpageStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    tattooEnquiry: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     // Create a transporter using Elastic Email's SMTP server and your credentials
  const transporter = nodemailer.createTransport({
    host: 'smtp.elasticemail.com', // Elastic Email SMTP server
    port: 2525, // Elastic Email SMTP port
    auth: {
      user: process.env.REACT_APP_ELASTIC_USERNAME, // Your Elastic Email username (often your email address)
      pass: process.env.REACT_APP_ELASTIC_PASSWORD, // Your SMTP password or API key
    },
  });

  // Compose your email
  const mailOptions = {
    from: formData.email, // Your sender email address
    to: 'mrook1979@hotmail.com', // Recipient's email address
    subject: 'NEW TATTOO ENQUIRY',
    text: 'Hello, this is a test email sent through Elastic Email SMTP!',
  };

  try {
    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    
    // Handle success (e.g., show a success message to the user)
    console.log('Email sent successfully');
  } catch (error) {
    // Handle errors (e.g., show an error message to the user)
    console.error('Error sending email:', error);
  }
  };

  return (
    <div className={contactStyles.mainpage} style={mainpageStyle}>
      <div className={contactStyles.bodycontainer}>
        <form onSubmit={handleSubmit}>
          <div className={contactStyles.titletext}>
            <p>Use this contact form to get the conversation going!</p>
            <br />
          </div>
          <div className={contactStyles.text}>
            <p>
              Hey, I’m Steve, thanks for coming to learn more about booking with
              me! My tattooing covers a variety of styles, but I consider myself
              a specialist in realistic tattooing, in both black & grey &
              colour. I do also take a variety of projects & I will always aim
              to help my clients with all of their tattoo requests.
            </p>
            <br />
          </div>
          <div className={contactStyles.text}>
            <p>
              I work from a private studio setting in beautiful Whistler, B.C. I
              have clients travelling from all over B.C. & beyond to book with
              me. If you are coming a long way, I appreciate that & I will do my
              best to work around your travel plans.
            </p>
            <br />
          </div>
          <div className={contactStyles.text}>
            <p>
              Please contact me to discuss any ideas you have! I check messages
              regularly & I reply to all inquiries quickly. Bigger projects I
              can advise my wait time for drawing. Smaller tattoos, I can often
              fit in a little sooner. I’m currently taking a wide range of
              projects. If you are unsure whether your idea matches my style –
              just ask!
            </p>
            <br />
          </div>
          <div className={contactStyles.formfield}>
            <label className={contactStyles.label}>Name:</label>
            <input
              className={contactStyles.input}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className={contactStyles.formfield}>
            <label className={contactStyles.label}>Phone:</label>
            <input
              className={contactStyles.input}
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className={contactStyles.formfield}>
            <label className={contactStyles.label}>Email:</label>
            <input
              className={contactStyles.input}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className={contactStyles.formfield}>
            <label className={contactStyles.label}>Enquiry:</label>
            <textarea
            className={contactStyles.textarea}
              name="tattooEnquiry"
              rows="7"
              value={formData.tattooEnquiry}
              onChange={handleChange}
              required
            />
          </div>
          <button className={buttonStyles.primarybtn} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
