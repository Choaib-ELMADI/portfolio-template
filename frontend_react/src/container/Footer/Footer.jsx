import React, { useState } from 'react';


import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.css';
import { images } from '../../constants';
import { client } from '../../client';


const Footer = () => {
  const [formData, setFormData] = useState({ name:'', email: '', message:'' });
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmit(true);
      })
  }


  return (
    <>
      <h2 className="head-text">Take a <span>Coffe</span> & <span>Chat</span> with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={ images.email } alt="email" />
          <a href="mailto:choaib3elmadi@gmail.com" className="p-text">choaib3elmadi@gmail.com</a>
        </div>

        <div className="app__footer-card">
          <img src={ images.mobile } alt="mobile" />
          <a href="tel: +212 643241400" className="p-text">+212-6 43 24 14 00</a>
        </div>
      </div>

      { !isFormSubmit ?
      <form className="app__footer-form app__flex" onSubmit={ handleSubmit }>
          <div className="app__flex">
            <input 
              className="p-text" 
              type="text" 
              placeholder="Your Name" 
              name="name" 
              value={ name } 
              onChange={ handleChangeInput }
              required
            />
          </div>
          <div className="app__flex">
            <input 
              className="p-text" 
              type="email" 
              placeholder="Your Email" 
              name="email" 
              value={ email } 
              onChange={ handleChangeInput }
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              name="message"
              placeholder="Your Message"
              value={ message }
              onChange={ handleChangeInput }
              required
            />
          </div>
          <button 
            type='submit' 
            className='p-text'
          >
              { loading ? 'SENDING ...' : 'Send Message' }
          </button>
      </form>
    : <div>
      <h3 className="head-text"><span>Thanks</span> for getting in <span>Touch</span></h3>
    </div>  
  }
    </>
  );
}

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "Contact",
  "app__whitebg"
);