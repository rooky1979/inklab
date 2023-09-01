import React from 'react';
import mailingStyles from "@/styles/Mailing.module.css";
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const MailForm = props => {

const posturl = `https://hotmail.us21.list-manage.com/subscribe/post?=${TOBEADDED}&id=${TOBEADDED}`;

  return (
    <div className={mailingStyles.formcontainer}>
      <MailchimpSubscribe />
    </div>
  )
}

export default MailForm
