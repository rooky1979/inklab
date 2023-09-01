import React from "react";
import mailingStyles from "@/styles/Mailing.module.css";

const InputField = (props) => {
  
    const validateInput = (values) => {
    if (values.some((f) => f === "") || values[0].indexOf("@") === -1) {
      return true;
    } else {
      return false;
    }
  };

  if (props.type === "submit") {
    return (
      <input
        className={mailingStyles.button}
        type="submit"
        value={props.label}
        disabled={validateInput(props.formValues)}
      />
    );
  } else if (props.type === "textarea") {
    return (
      <label className={mailingStyles.inputfieldlabel}>
        {props.label}
        <textarea
          onChange={(e) => props.onChangeHandler(e.target.value)}
          placeholder={props.placeholder}
          value={props.value}
          required={props.isRequired}
          className={mailingStyles.inputfieldlabel}
          rows={7}
          name={props.name}
        />
      </label>
    );
  } else {
    return (
      <label className={mailingStyles.inputfieldlabel}>
        {props.label}
        <input
          onChange={(e) => props.onChangeHandler(e.target.value)}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          required={props.isRequired}
          className={mailingStyles.inputfieldlabel}
          name={props.name}
        />
      </label>
    );
  }
};

export default React.memo(InputField);
