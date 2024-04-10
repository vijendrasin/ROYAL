// Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useSelector } from 'react-redux'; // Import useSelector from react-redux
import './Navbar.css';

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.items); // Get cart items from Redux store

  // Check if there are items in the cart to determine whether to show the notification
  const showNotification = cartItems.length > 0;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <div className="navbar-logo">
            <Link to="/"> {/* Use Link component to navigate to home */}
              <img className="navbar-logo-img" src='https://fbi.cults3d.com/uploaders/16694038/illustration-file/ea3603c4-2822-4083-8e1b-fb15d8940352/60e156139802c05830c85389f2ee3584.png' alt="Logo" />
            </Link>
          </div>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" className="navbar-link">About</Link>
            </li>
            <li className="navbar-item">
              <Link to="/services" className="navbar-link">Services</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="navbar-link">Contact</Link>
            </li>
            <li className="navbar-item">
              <Link to="/productcard" className="navbar-link">Bike</Link>
            </li>
            <li className="navbar-item">
              <Link to="/signup" className="navbar-link">Signup</Link>
            </li>
          </ul>
        </div>
        <form className="navbar-search" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
          <Link to="/cart" className="navbar-cart"> {/* Link to cart */}
            <img className="navbar-cart-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5MMEZL8zXC3lgImdpaKJhFPMGq-6Fjm5SnCEGtSTVo4UE4G1l--yDGcuSQ0pswMiCP4E&usqp=CAU" alt="Cart" />
            {showNotification && <div className="notification-badge">{cartItems.length}</div>} {/* Show notification badge with the number of items in the cart */}
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
