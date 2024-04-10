import React, { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha'; // Import the reCAPTCHA component
import './Contact.css'; // Import CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    file: '',
  });
  const [captchaValue, setCaptchaValue] = useState(null); // State for storing captcha value

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'file' ? files[0] : value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      // Check if captcha is filled
      alert('Please complete the CAPTCHA.');
      return;
    }
    
    try {
      const formDataWithFile = new FormData();
      for (let key in formData) {
        formDataWithFile.append(key, formData[key]);
      }
      formDataWithFile.append('captcha', captchaValue);
  
      console.log('Form Data with File:', formDataWithFile); // Log FormData before sending
  
      const response = await axios.post('http://localhost:8000/contact/contact', formDataWithFile, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      console.log('Form submission successful:', response.data);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        file: null,
      });
      // Add code to handle success
    } catch (error) {
      console.error('Form submission failed:', error.message);
      // Add code to handle error
    }
  };
  
  const handleCaptchaChange = (value) => {
    console.log(value);
    setCaptchaValue(value); // Set captcha value when changed
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="file">File</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleChange}
          />
        </div>
        <ReCAPTCHA
          sitekey="6LcExbYpAAAAALNcETzzHavFyrwdf2MDDmspCt9t" // Use the provided site key here
          onChange={handleCaptchaChange} // Handle captcha value change
        />
        <button type="submit" className="submit-button" >Submit</button>
      </form>
    </div>
  );
};

export default Contact;
