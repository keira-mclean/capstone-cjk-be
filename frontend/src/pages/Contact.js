import React, { useState } from 'react';
import "./Contact.css";
import heroImage from "../../src/contact_us_photo.avif";

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submited')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <>
      <div className="homeMenu jumboTron container-fluid bg-light p-5" style={{ backgroundImage: `url(${heroImage})` }}>
        <h1 className="display-4">Contact Us</h1>

        <h5 className="heroText">Make the road your journey</h5>
      </div>
      <div className="contactDiv">
        <h2 className="mb-3">Contact Us</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <input placeholder="Name" className="contactInput" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <input placeholder="Email" className="contactInput" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <textarea placeholder="Message" className="contactInput" id="message" required />
          </div>
          <button className="contactButton" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
    </>
  )
}
export default Contact
