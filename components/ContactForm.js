import React, { useState } from "react";
import contactStyles from "../styles/Contact.module.css";
import buttonStyles from "../styles/Buttons.module.css";
import axios from "axios";

const ContactForm = ({ backgroundImage }) => {
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

    try {
      const response = await axios.post("/api/sendEmail", formData);
      console.log(response.data.message);
      setFormData({
        name: "",
        phone: "",
        email: "",
        tattooEnquiry: "",
      });
      alert("Email sent successfully!");
    } catch (error) {
      alert(
        "An error occurred while sending the email. Please try again later."
      );
      console.error("Error sending email:", error);
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
              You'll find all of my booking info below. Please read all of these
              sections, then contact me using the contact form at the bottom of
              this page. I also highly suggest checking out the FAQs page to see
              if your questions are answered there first.
            </p>
            <br />
          </div>
          <div className={contactStyles.text}>
            <p>
              When filling out the contact form for new bookings I ask if you
              could please send the following information. If you are unsure of
              anything right now, no problem!
            </p>
            <br />
          </div>
          <ul className={contactStyles.text}>
            <li>Rough size/placement,</li>
            <li>Style (realistic, outlined or mix),</li>
            <li>Black/grey or colour,</li>
            <li>
              Any images (if anything is relevant) – forward to my email
              stevek.tatoo@gmail.com,
            </li>
            <li>
              Your availability (days/times) for booking either the tattoo or a
              consultation, if needed.
            </li>
            <br />
          <div className={contactStyles.text}>
            <p>
              Thats just to get a clear idea of what you’d like before I create
              your artwork. Before drawing I’ll send details to pay a deposit,
              which will be deducted from the price of the tattoo.
            </p>
            <br />
          </div>
          </ul>
          <div className={contactStyles.text}>
            <p>
              I work from a private studio setting in beautiful Whistler, B.C. I
              have clients travelling from all over B.C. and beyond to book with
              me. If you are coming a long way, I appreciate that and I will do
              my best to work around your travel plans.
            </p>
            <br />
          </div>
          <div className={contactStyles.text}>
            <p>
              I check messages regularly and I reply to all inquiries quickly.
              Bigger projects I can advise my wait time for drawing. Smaller
              tattoos, I can often fit in a little sooner. I’m currently taking
              a wide range of projects. If you are unsure whether your idea
              matches my style – just ask!
            </p>
            <br />
          </div>
          <div className={contactStyles.text}>
            <p>
              If you are ready to book, or have questions for me, then it's time
              to reach out!
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
          <div className={contactStyles.titletext}>
            <br />
            <p>Booking T's and C's</p>
            <br />
          </div>
          <ul className={contactStyles.text}>
            <li>
              A deposit will be required to book an appointment, or to start
              working on artwork. All deposits are non refundable, in the case
              of a tattoo not being booked. They cover all of my time planning
              and communicating with you.
            </li>
            <li>
              Deposits are between $100-500 depending on size of the tattoo.
            </li>
            <li>
              I offer to change a drawing once. Any extra drawing time may incur
              charges. Once a drawing is approved there may be no more changes.
            </li>
            <li>
              Your deposit will be deducted from your final tattoo appointment.
            </li>
            <li>
              Cancelations, or changes to dates with less than two weeks notice
              will result in losing your deposit. Cancellations due to emergency
              situations may be re-scheduled.
            </li>
            <li>
              Please arrive at the exact time of your appointment. If you are
              more than 15 mins late without contacting me you will lose your
              deposit and may be required to rebook your appointment and pay a
              new deposit.
            </li>
            <li>
              Tattoo appointments must be booked within one month of receiving
              artwork, or three months from date of last appointment. Otherwise
              this will result in loss of deposit and a new deposit will be
              required.
            </li>
            <li>
              All artwork remains the property of Steve Kretz and may not be
              used or copied by another artist. If you decide not to get the
              tattoo, then artwork can be reposted as available. The deposit
              covers my time preparing for your appointment and is not a
              purchase of artwork.
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
