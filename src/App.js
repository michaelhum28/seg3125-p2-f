import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Services from './Services';
import Reviews from './Reviews';
import Planworkout from './Planworkout';
import Plannutrition from './Plannutrition';
import Confirm from './Confirm';
import Tracker from './Tracker';
import './App.css';

const About = () => <h1>About Page</h1>;

function App() {
  const [scrollToContact, setScrollToContact] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'fr' : 'en'));
  };

  useEffect(() => {
    if (scrollToContact) {
      document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
      setScrollToContact(false);
    }
  }, [scrollToContact]);

  return (
    <Router basename="/seg3125-p2-f">
      <Navbar setScrollToContact={setScrollToContact} toggleLanguage={toggleLanguage} language={language} />
      <Routes>
        <Route path="/" element={<LandingPage scrollToContact={scrollToContact} language={language} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/planworkout" element={<Planworkout />} />
        <Route path="/services/plannutrition" element={<Plannutrition />} />
        <Route path="/services/tracker" element={<Tracker />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </Router>
  );
}

export default App;
