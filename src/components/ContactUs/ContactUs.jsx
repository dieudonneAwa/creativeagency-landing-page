import React from 'react';
import { ContactUsWrapper } from './Styles';

const ContactUs = () => {
  return (
    <ContactUsWrapper>
      <div className="contact-container">
        <div className="section-header">
          <h5>contact us</h5>
          <h1>Have an awesome idea in your mind? <br /> we would love to hear</h1>
        </div>
        <form>
          <input type="email" name="email" placeholder="enter your email" />
          <button>Start</button>
        </form>
      </div>
    </ContactUsWrapper>
  )
}

export default ContactUs
