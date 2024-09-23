import React from 'react';
import '../css/Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Zomato" />
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search for restaurants, cuisine or a dish" />
      </div>
      <div className="navbar-links">
        <a href="#order-online">Order Online</a>
        <a href="#dining-out">Dining Out</a>
        <a href="#pro">Zomato Pro</a>
        <a href="#offers">Offers</a>
      </div>
      <div className="navbar-profile">
        <a href="#login">Login</a>
        <a href="#signup" className="signup">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
