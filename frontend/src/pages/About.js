// About.js

import React from 'react';
import './About.css'; // Import CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-image-container">
          <img className="about-image" src="https://www.royalenfield.com/content/dam/royal-enfield/usa/motorcycles/meteor/colours/studio-shots/fireball-red/01-red.png" alt="Royal Enfield Motorcycle" />
        </div>
        <div className="about-content">
          <h2 className="about-heading">Welcome to the World of Royal Enfield</h2>
          <p className="about-description">With a legacy dating back to 1901, Royal Enfield has stood the test of time, captivating riders with its distinctive design, powerful performance, and unparalleled reliability.</p>
          <button className="about-button">Explore More</button>
        </div>
      </div>

      <div className="about-card">
        <div className="about-image-container">
          <img className="about-image" src="https://www.royalenfield.com/content/dam/royal-enfield/india/motorcycles/meteor/colours/studio-shots/fireball-yellow/01-yellow.png" alt="Adventure Motorcycle" />
        </div>
        <div className="about-content">
          <h2 className="about-heading">Experience the Spirit of Adventure</h2>
          <p className="about-description">Embark on a journey like never before with Royal Enfield. Our motorcycles are built to conquer any terrain and challenge, allowing you to explore the world with confidence and style.</p>
          <button className="about-button">Discover More</button>
        </div>
      </div>

      <div className="about-card">
        <div className="about-image-container">
          <img className="about-image" src="https://motobike.in/wp-content/uploads/2021/08/Royal-Enfield-Meteor-350-Fireball-Matt-Green.png" alt="Freedom Motorcycle" />
        </div>
        <div className="about-content">
          <h2 className="about-heading">Discover Your Freedom</h2>
          <p className="about-description">Freedom is not just a word; it's a way of life. At Royal Enfield, we believe in empowering individuals to chase their dreams, break barriers, and carve their path.</p>
          <button className="about-button">Join Us</button>
        </div>
      </div>

      <div className="about-card">
        <div className="about-image-container">
          <img className="about-image" src=
          "https://www.royalenfield.com/content/dam/royal-enfield/usa/motorcycles/meteor/colours/studio-shots/marine-blue/01-marine.png" alt="Lifestyle Collection" />
        </div>
        <div className="about-content">
          <h2 className="about-heading">Embrace the Royal Enfield Lifestyle</h2>
          <p className="about-description">Experience the essence of Royal Enfield beyond the motorcycle. Our lifestyle collection offers a range of apparel, accessories, and gear inspired by the spirit of adventure and exploration.</p>
          <button className="about-button">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default About;
