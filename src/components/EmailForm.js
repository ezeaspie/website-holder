import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import EmailSuccessPopUp from '../components/EmailSuccessPopup';

const EmailForm = () => {

  const [email, setEmail] = useState('');
  const [invalid,setInvalid] = useState(false);
  const [popUpClosed, setPopUpClosed] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    addToMailchimp(email)
      .then((data) => {
        if(data.result==="success"){
          setPopUpClosed(false);
        }
        else{
          setInvalid(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
    setInvalid(false);
  };

  const handleClose = () => {
    setPopUpClosed(true);
    setInvalid(false);
  }

  return (
    <form onSubmit={handleSubmit} className="email-form">
      <h2>Subscribe to my email list!</h2>
      <div className="email-form-wrapper">
        <input
          className={invalid?"sign-up-input input-error":"sign-up-input"}
          placeholder="Email address"
          name="email"
          type="text"
          onChange={handleEmailChange}
        />
        <button className="btn btn-call-to-action" type="submit">Subscribe</button>
        <EmailSuccessPopUp isClosed={popUpClosed} handleClose={handleClose}/>
      </div>
    </form>
  );
};

export default EmailForm;