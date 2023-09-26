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
            /* className={formStyles.formcontainer} */
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className={formStyles.titletext}>
              <p>Shhhhh welcome to the Secret Club.....</p>
              <br />
            </div>
            <div className={formStyles.text}>
              <p>
                If you subscribe to my mailing list, you will be the first to
                see any available art to tattoo before I post it out there for
                others to grab.
              </p>
              <br />
            </div>
            <div className={formStyles.text}>
              <p>
                I also run regular promotions that are exclusive to the Secret
                Club which could be anything from timed discounted slots to
                special offers.
              </p>
              <br />
            </div>
            <div className={formStyles.text}>
              <p>
                I hate getting spammed in my inbox as much as anyone so the
                Secret Club emails only go out approximately once a month.
              </p>
              <br />
            </div>
            <div className={formStyles.text}>
              <p>
                Please add my email to your contacts to avoid missing out -
                <strong>stevek.tattoo@gmail.com</strong>
              </p>
              <br />
            </div>
            <div className={formStyles.formfield}>
              <label className={formStyles.label}>First Name:</label>
              <input
                className={formStyles.input}
                type="text"
                required
                {...register("firstName")}
              />
            </div>
            <br />
            <div className={formStyles.formfield}>
              <label className={formStyles.label}>Last Name:</label>
              <input
                className={formStyles.input}
                type="text"
                required
                {...register("lastName")}
              />
            </div>
            <br />
            <div className={formStyles.formfield}>
              <label className={formStyles.label}>Email:</label>
              <input
                className={formStyles.input}
                type="email"
                required
                {...register("email")}
              />
            </div>
            <button className={buttonStyles.button} type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
  );
};
export default SubscribeForm;
