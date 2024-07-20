import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ setScrollToContact }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
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
        <li 
          className="services-menu"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <Link to="/services">Services</Link>
          {dropdownVisible && (
            <ul className="dropdown-menu">
              <li><Link to="/services/planworkout">Workout Plan</Link></li>
              <li><Link to="/services/plannutrition">Nutrition Plan</Link></li>
              <li><Link to="/services/tracker">Track Progress</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><button className="contact-button" onClick={handleContactClick}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
