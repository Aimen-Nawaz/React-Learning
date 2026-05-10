import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="title">
        Contact <span>Us</span>
      </h1>

      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit
        suscipit egestas. Nunc eget congue ante.
      </p>

      <div className="contact-box">
        
        <div className="contact-image">
        
          <img src="/images/contact.png" alt="contacy" />
    
        </div>


        <div className="contact-form">
          <label>Full name</label>
          <input type="text" placeholder="Enter your full name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Message</label>
          <textarea placeholder="Enter your message"></textarea>

          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;