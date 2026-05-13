import React from "react";
import { contactContainer, contact, conatctSection, title, subTitle, contactBox, contactImage, contactForm } from '../../styel/Contact.module.css'

const Contact = () => {
  return (
    <section className={conatctSection}>
      <div className={contactContainer}>
        <h1 className={title}>
          Contact <span>Us</span>
        </h1>

        <p className={subTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit
          suscipit egestas. Nunc eget congue ante.
        </p>

        <div className={contactBox}>

          <div className={contactImage}>

            <img src="/images/contact.png" alt="contacy" />

          </div>

          <div className={contact}>
            <div className={contactForm}>
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
      </div>
    </section>
  );
};

export default Contact;