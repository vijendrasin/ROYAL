// Services.js

import React from 'react';
import './Services.css'; // Import CSS file for styling

const Services = () => {
  return (
    <div className="services-container">
      <div className="section-introduction">
        <h2>Welcome to Royal Enfield Services</h2>
        <p>Explore our range of services designed to enhance your Royal Enfield experience and keep your motorcycle in top condition.</p>
      </div>

      

      <div className="section-detailed-description">
        <div className="service-description">
          <img src="https://mir-s3-cdn-cf.behance.net/projects/404/a0d0e8194656155.Y3JvcCw1NTA0LDQzMDUsMCwxOTc1.jpg"          alt="Maintenance and Repairs" />
          <h3>Maintenance and Repairs</h3>
          <p>Our expert technicians provide comprehensive maintenance and repair services to keep your Royal Enfield motorcycle running smoothly. From routine oil changes to engine overhauls, we ensure your bike is always in peak condition.</p>
        </div>
        <div className="service-description">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b745b732608613.5605c24664ad4.jpg"          alt="Customization and Accessories" />
          <h3>Customization and Accessories</h3>
          <p>Personalize your Royal Enfield with our wide range of customization options and accessories. Whether you're looking to upgrade your exhaust system, add custom paintwork, or install new handlebars, we have everything you need to make your bike uniquely yours.</p>
        </div>
        <div className="service-description">
          <img src="https://enfieldriders.com/wp-content/uploads/2023/05/enfieldriders-home-final-1024x443.webp"alt="Rider Training and Events" />
          <h3>Rider Training and Events</h3>
          <p>Join us for rider training sessions and events designed to enhance your riding skills and connect with fellow Royal Enfield enthusiasts. From off-road adventure courses to group rides and rallies, there's something for every rider in our community.</p>
        </div>
        <div className="service-description">
          <img src="https://smcinsurance.com/SocialImages/ArticleImages/october-2023/Royal-Enfield-Insurance.jpg "
           alt="Insurance and Financing" />
          <h3>Insurance and Financing</h3>
          <p>Ensure peace of mind with our insurance and financing options tailored to Royal Enfield owners. Whether you're looking for comprehensive coverage or flexible financing plans, our team will help you find the right solution to protect your investment.</p>
        </div>
        <div className="service-description">
       <img src= "https://chatgen.ai/wp-content/uploads/2021/01/customer-service-process.png"></img>
          <h3>Customer Support and Assistance</h3>
          <p>Our dedicated customer support team is here to assist you with any questions or concerns you may have. Whether it's troubleshooting technical issues, ordering spare parts, or scheduling service appointments, we're committed to providing exceptional support every step of the way.</p>
        </div>
      </div>

      {/* Add more sections as needed */}
    </div>
  );
}

export default Services;
