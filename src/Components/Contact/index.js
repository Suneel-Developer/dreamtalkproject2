import React from 'react';
import './contact.css'

const Contact = () => {
  return (
    <div className='contact_container'>
      <div className="contact">
        <h1>What are you waiting for?</h1>
        <div className="input_filed">
            <input type="text" placeholder='Name *' />
            <input type="email" placeholder='Email *' />
        </div>
        <textarea  cols="30" rows="10">Enter a few keywords, click generate then send</textarea>
      </div>
    </div>
  );
}

export default Contact;
