import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

// Correctly import images
import coach1 from './images/coach1.PNG';
import coach2 from './images/coach2.PNG';
import coach3 from './images/coach3.PNG';
// Import new images for the hero section
import heroImage1 from './images/gym1.jpg';
import heroImage2 from './images/gym2.jpg';

const LandingPage = ({ scrollToContact }) => {
  useEffect(() => {
    if (scrollToContact) {
      document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
    }
  }, [scrollToContact]);

  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="hero-images">
          <img src={heroImage1} alt="Hero Left" className="hero-image" />
          <img src={heroImage2} alt="Hero Right" className="hero-image" />
        </div>
        <h1>Your Fitness Journey Starts Here</h1>
        <p>
          Achieve your health and fitness goals with personalized plans, <br />
          expert advice, and a supportive community at FitLife.
        </p>
        
        <Link to="/services">
          <button className="cta-button">Get Started</button>
        </Link>
      </section>

      <section className="experts-section">
        <h2>Our Experts</h2>
        <div className="experts-container">
          <div className="expert-card">
            <div
              className="expert-image"
              style={{ backgroundImage: `url(${coach1})` }}
            ></div>
            <div className="expert-name">John Doe</div>
            <div className="expert-description">
              Certified personal trainer with over 10 years of experience in strength training and nutrition.
            </div>
            <div className="expert-specialization">Specialization: Strength Training</div>
          </div>
          <div className="expert-card">
            <div
              className="expert-image"
              style={{ backgroundImage: `url(${coach2})` }}
            ></div>
            <div className="expert-name">Michael Johnson</div>
            <div className="expert-description">
              Cardio and endurance coach with a focus on marathon training and cardiovascular health.
            </div>
            <div className="expert-specialization">Specialization: Cardio</div>
          </div>
          <div className="expert-card">
            <div
              className="expert-image"
              style={{ backgroundImage: `url(${coach3})` }}
            ></div>
            <div className="expert-name">Jane Smith</div>
            <div className="expert-description">
              Yoga and pilates instructor, specializing in flexibility and mindfulness techniques.
            </div>
            <div className="expert-specialization">Specialization: Yoga</div>
          </div>
        </div>
      </section>

      <footer id="contact-section" className="contact-section">
        <h2>Contact Us</h2>
        <p>Open 24 hours</p>
        <p>Personal & group online training</p>
        <p>Phone Number: (613) 562-5700</p>
      </footer>
    </div>
  );
};

export default LandingPage;
