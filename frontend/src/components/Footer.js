import React from 'react';
import './Footer.css'; // Import the CSS file for styling

// Import FontAwesome modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>Royal Enfield is a legendary motorcycle manufacturer known for its .With a rich heritage spanning over a century, Royal Enfield continues to inspire riders worldwide.</p>
        </div>
        <br></br>
        <div className="footer-column">
        <div>

        </div>
          <h3>Services</h3>
          <ul>
            <li>Motorcycle Sales</li>
            <li>Service & Maintenance</li>
            <li>Accessories & Gear</li>
            <li>Customization</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <p><FontAwesomeIcon icon={faEnvelope} /> Email: vijendrass2002@gmail.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> Phone: +7976948218</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Address: Pawan Putra Dcolony -96,Sirsi-Road, Jaipur, Rajasthan.</p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li><a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Royal Enfield. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
