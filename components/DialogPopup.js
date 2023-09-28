import React from "react";
import PropTypes from "prop-types";
import dialogStyles from "../styles/Dialog.module.css";

const DialogPopup = ({ message, isSuccess, onClose }) => {
  const dialogClass = isSuccess
    ? `${dialogStyles.dialog} ${dialogStyles.success}`
    : `${dialogStyles.dialog} ${dialogStyles.error}`;

  return (
    <div className={dialogStyles.overlay}>
      <div className={dialogClass}>
        <span className={dialogStyles.close} onClick={onClose}>
          &times;
        </span>
        <p>{message}</p>
      </div>
    </div>
  );
};

DialogPopup.propTypes = {
  message: PropTypes.string.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DialogPopup;
