import React, { useState, useEffect } from "react";
import mailingStyles from "@/styles/Mailing.module.css";
import InputField from "./InputField";

const CustomForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      firstName &&
      lastName &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email /*possibly MERGE0*/,
        MERGE1: firstName,
        MERGE2: lastName,
      });
  };

  return (
    <form className={mailingStyles.mailform} onSubmit={(e) => handleSubmit(e)}>
      <h3 className={mailingStyles.mailform_title}>
        {status === "success"
          ? "Success!"
          : "Join our email list for future updates."}
      </h3>
{/* UP TO HERE WITH SORTING STYLING
 */}      {status === "sending" && (
        <div className="mc__alert mc__alert--sending">
          {/* change class */}
          sending...
        </div>
      )}
      {status === "error" && (
        <div
          className="mc__alert mc__alert--error"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          className="mc__alert mc__alert--success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status !== "success" ? (
        <div className={mailingStyles.mailformfield_container}>
          <InputField
            label="First Name"
            onChangeHandler={setFirstName}
            type="text"
            value={firstName}
            placeholder="Jane"
            isRequired
          />
          <InputField
            label="Last Name"
            onChangeHandler={setLastName}
            type="text"
            value={lastName}
            placeholder="Doe"
            isRequired
          />
          <InputField
            label="Email"
            onChangeHandler={setEmail}
            type="email"
            value={email}
            placeholder="your@email.com"
            isRequired
          />
        </div>
      ) : null}
      {status === "success" ? (
        <button
          onClick={() => setModalOpen(false)}
          className="g__justify-self-center"
        >
          Close
        </button>
      ) : (
        <InputField
          label="subscribe"
          type="submit"
          formValues={[email, firstName, lastName]}
        />
      )}
    </form>
  );
};

export default CustomForm;
