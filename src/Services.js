import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <div className="services">
        <div className="service">
          <h2>Workout Plan</h2>
          <h3>❚█══█❚</h3>
          <p>Full Workout Plan / $199.99 CAD</p>
          <ul>
            <li>Custom training plan</li>
            <li>Cardio protocol</li>
            <li>Supplement protocol</li>
            <li>Progress tracker and analysis</li>
            <li>24/7 text support (UNLIMITED)</li>
          </ul>
          <Link to="/services/planworkout">
            <button>Apply Now</button>
          </Link>
        </div>
        <div className="service">
          <h2>Nutrition Plan</h2>
          <h3>🥗🍎🍞</h3>
          <p>Full Nutrition Plan / $149.99 CAD</p>
          <ul>
            <li>Custom meal plan</li>
            <li>Supplement protocol</li>
            <li>Guidance on macro and micronutrient intake</li>
            <li>Progress tracker and analysis</li>
            <li>24/7 text support (UNLIMITED)</li>
          </ul>
          <Link to="/services/plannutrition">
            <button>Apply Now</button>
          </Link>
        </div>
      </div>
      <div className="quote-banner">
        <p>"Fitness is not just about hitting the gym; it’s also about an inner happiness and an overall well-being."</p>
      </div>
      <div className="track-progress">
        <div className="track-progress-card">
          <h2>Track Your Progress</h2>
          <h3>📝📊📈</h3>
          <p>Monitor your achievements and stay motivated</p>
          <Link to="/services/tracker">
            <button className="track-progress-button">Start Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
