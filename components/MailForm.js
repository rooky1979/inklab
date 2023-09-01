import React from "react";
import mailingStyles from "@/styles/Mailing.module.css";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const MailForm = (props) => {
  const postUrl = `https://hotmail.us21.list-manage.com/subscribe/post?=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <div className={mailingStyles.formcontainer}>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailForm;
