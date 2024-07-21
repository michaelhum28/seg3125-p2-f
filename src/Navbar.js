// Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ setScrollToContact, toggleLanguage, language }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const handleContactClick = () => {
    setScrollToContact(true);
    navigate('/');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const text = {
    en: {
      home: 'FitLife 🏠︎',
      services: 'Services',
      workoutPlan: 'Workout Plan',
      nutritionPlan: 'Nutrition Plan',
      tracker: 'Track Progress',
      reviews: 'Reviews',
      contact: 'Contact',
      language: 'Français',
    },
    fr: {
      home: 'FitLife 🏠︎',
      services: 'Services',
      workoutPlan: 'Plan d\'entraînement',
      nutritionPlan: 'Plan Nutritionnel',
      tracker: 'Suivi des Progrès',
      reviews: 'Avis',
      contact: 'Contact',
      language: 'English',
    },
  };

  return (
    <nav className="navbar">
      <button className="navbar-brand" onClick={handleLogoClick}>{text[language].home}</button>
      <ul className="navbar-menu">
        <li 
          className="services-menu"
          onMouseEnter={() => setDropdownVisible(true)}
          onMouseLeave={() => setDropdownVisible(false)}
        >
          <Link to="/services">{text[language].services}</Link>
          {dropdownVisible && (
            <ul className="dropdown-menu">
              <li><Link to="/services/planworkout">{text[language].workoutPlan}</Link></li>
              <li><Link to="/services/plannutrition">{text[language].nutritionPlan}</Link></li>
              <li><Link to="/services/tracker">{text[language].tracker}</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/reviews">{text[language].reviews}</Link></li>
        <li><button className="contact-button" onClick={handleContactClick}>{text[language].contact}</button></li>
      </ul>
      <button className="language-toggle" onClick={toggleLanguage}>
        {text[language].language}
      </button>
    </nav>
  );
};

export default Navbar;
