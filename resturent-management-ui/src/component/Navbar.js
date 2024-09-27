import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import '../css/Navbar.css'; // Import the CSS file for styling
import { LoginContext } from '../LoginContext';
const Navbar = () => {
 const {openLogin, setopenLogin} = useContext(LoginContext)
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to='/'>
          <img src="/logo.png" alt="brand Image" />
        </Link>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search for restaurants, cuisine or a dish" />
      </div>
      <div className="navbar-links">
        <Link to="#order-online">Order Online</Link>
        <Link to="#dining-out">Dining Out</Link>
        <Link to="#pro">Zomato Pro</Link>
        <Link to="#offers">Offers</Link>
      </div>
      <div className="navbar-profile">
        <a className='login' onClick={()=>{setopenLogin(!openLogin)}}>Login</a>
        <a href="#signup" className="signup">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
