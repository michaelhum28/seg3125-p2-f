import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ setScrollToContact }) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    setScrollToContact(true);
    navigate('/');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav className="navbar">
      <button className="navbar-brand" onClick={handleLogoClick}>FitLife</button>
      <ul className="navbar-menu">
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><button className="contact-button" onClick={handleContactClick}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
