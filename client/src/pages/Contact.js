import React from "react";

const Contact = () => {
  return (
    <div className="contact-form-container s-container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="First name"
          required
          minLength="4"
          maxLength="8"
          size="10"
        />
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last name"
          required
          minLength="4"
          maxLength="8"
          size="10"
        />
        <input
          type="email"
          id="email"
          placeholder="Email address"
          pattern=".+@globex\.com"
          size="30"
          required
        />
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
        ></input>
        <div className="message">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" cols="33"></textarea>
          <button type="button">Send</button>{" "}
        </div>
      </form>
    </div>
  );
};

export default Contact;
