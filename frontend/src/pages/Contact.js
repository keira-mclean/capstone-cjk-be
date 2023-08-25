import React, { useState } from 'react';
import "./Contact.css";

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
    <div className="contactDiv">
      <h2 className="mb-3">Contact Us</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="contactLabel" htmlFor="name">
            Name
          </label>
          <input className="contactInput" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="contactLabel" htmlFor="email">
            Email
          </label>
          <input className="contactInput" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="contactLabel" htmlFor="message">
            Message
          </label>
          <textarea className="contactInput" id="message" required />
        </div>
        <button className="contactButton" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
    
  )
}
export default Contact
