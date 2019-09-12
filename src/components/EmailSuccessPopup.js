import React from 'react';

const EmailSuccessPopup = (props) => {
    return(
      <div className={props.isClosed?"success-popup":"success-popup show-popup"}>
        <div >
          <h2>Thank You!</h2>
          <p>You are now subscribed and will recieve emails whenever I make a new post or publish a new Heroine Rises chapter!</p>
          <div className="success-exit btn btn-info" onClick={props.handleClose}>Close</div>
        </div>
      </div>
    )
}

export default EmailSuccessPopup;