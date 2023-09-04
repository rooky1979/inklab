// components/ContactForm.js

import React, { useState } from 'react';
import contactStyles from "../styles/Contact.module.css";
import axios from 'axios'; // Import Axios

const ContactForm = ({ backgroundImage }) => {

  const mainpageStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tattooEnquiry: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        // Make a POST request to your API route
        const response = await axios.post('/api/contact', formData);
  
        if (response.data.success) {
          // Handle success (e.g., show a success message to the user)
          console.log('Email sent successfully');
        } else {
          // Handle error (e.g., show an error message to the user)
          console.error('Email could not be sent');
        }
      } catch (error) {
        // Handle network or other errors
        console.error('An error occurred:', error);
      }
  };

  return (
    <div className={contactStyles.mainpage} style={mainpageStyle}>
        <div className={contactStyles.bodycontainer}>
    <form  onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="tattooEnquiry"
        placeholder="Tattoo Enquiry"
        value={formData.tattooEnquiry}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
  );
}

export default ContactForm;
