import { useForm } from "react-hook-form";
import React from "react";
import formStyles from "../styles/Mailing.module.css";
import buttonStyles from "../styles/Buttons.module.css";

const SubscribeForm = ({ backgroundImage }) => {
  const mainpageStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      // Send the email to Mailchimp
      const response = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Handle a successful subscription
        reset();
        alert("Thank you for subscribing!");
      } else {
        // Handle errors
        alert("Subscription failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className={formStyles.mainpage} style={mainpageStyle}>
      <div className={formStyles.bodycontainer}>
        <form
          className={formStyles.formcontainer}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={formStyles.formfield}>
            <label className={formStyles.label}>First Name:</label>
            <input
              className={formStyles.input}
              type="text"
              {...register("firstName")}
            />
          </div>
          <br />
          <div className={formStyles.formfield}>
            <label className={formStyles.label}>Last Name:</label>
            <input
              className={formStyles.input}
              type="text"
              {...register("lastName")}
            />
          </div>
          <br />
          <div className={formStyles.formfield}>
            <label className={formStyles.label}>Email:</label>
            <input
              className={formStyles.input}
              type="email"
              {...register("email")}
            />
          </div>
          <button className={buttonStyles.primarybtn} type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
export default SubscribeForm;