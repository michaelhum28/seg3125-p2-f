// Services.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = ({ language }) => {
  const text = {
    en: {
      workoutPlan: 'Workout Plan',
      nutritionPlan: 'Nutrition Plan',
      fullWorkoutPlan: 'Full Workout Plan / $199.99 CAD',
      fullNutritionPlan: 'Full Nutrition Plan / $149.99 CAD',
      customTraining: 'Custom training plan',
      cardioProtocol: 'Cardio protocol',
      supplementProtocol: 'Supplement protocol',
      progressTracker: 'Progress tracker and analysis',
      textSupport: '24/7 text support (UNLIMITED)',
      customMealPlan: 'Custom meal plan',
      macroIntake: 'Guidance on macro and micronutrient intake',
      quote: 'Fitness is not just about hitting the gym; it’s also about an inner happiness and an overall well-being.',
      trackProgress: 'Track Your Progress',
      monitorAchievements: 'Monitor your achievements and stay motivated',
      applyNow: 'Apply Now',
      startNow: 'Start Now'
    },
    fr: {
      workoutPlan: 'Plan d\'entraînement',
      nutritionPlan: 'Plan Nutritionnel',
      fullWorkoutPlan: 'Plan d\'entraînement complet / 199,99 $ CAD',
      fullNutritionPlan: 'Plan nutritionnel complet / 149,99 $ CAD',
      customTraining: 'Plan d\'entraînement personnalisé',
      cardioProtocol: 'Protocole cardio',
      supplementProtocol: 'Protocole de supplément',
      progressTracker: 'Suivi des progrès et analyse',
      textSupport: 'Support par texto 24/7 (ILLIMITÉ)',
      customMealPlan: 'Plan de repas personnalisé',
      macroIntake: 'Conseils sur l\'apport en macronutriments et micronutriments',
      quote: 'Le fitness ne consiste pas seulement à aller à la salle de sport; il s\'agit aussi d\'un bonheur intérieur et d\'un bien-être général.',
      trackProgress: 'Suivi de vos progrès',
      monitorAchievements: 'Suivez vos réalisations et restez motivé',
      applyNow: 'Postuler Maintenant',
      startNow: 'Commencez Maintenant'
    }
  };

  return (
    <div className="services-container">
      <div className="services">
        <div className="service">
          <h2>{text[language].workoutPlan}</h2>
          <h3>❚█══█❚</h3>
          <p>{text[language].fullWorkoutPlan}</p>
          <ul>
            <li>{text[language].customTraining}</li>
            <li>{text[language].cardioProtocol}</li>
            <li>{text[language].supplementProtocol}</li>
            <li>{text[language].progressTracker}</li>
            <li>{text[language].textSupport}</li>
          </ul>
          <Link to="/services/planworkout">
            <button>{text[language].applyNow}</button>
          </Link>
        </div>
        <div className="service">
          <h2>{text[language].nutritionPlan}</h2>
          <h3>🥗🍎🍞</h3>
          <p>{text[language].fullNutritionPlan}</p>
          <ul>
            <li>{text[language].customMealPlan}</li>
            <li>{text[language].supplementProtocol}</li>
            <li>{text[language].macroIntake}</li>
            <li>{text[language].progressTracker}</li>
            <li>{text[language].textSupport}</li>
          </ul>
          <Link to="/services/plannutrition">
            <button>{text[language].applyNow}</button>
          </Link>
        </div>
      </div>
      <div className="quote-banner">
        <p>"{text[language].quote}"</p>
      </div>
      <div className="track-progress">
        <div className="track-progress-card">
          <h2>{text[language].trackProgress}</h2>
          <h3>📝📊📈</h3>
          <p>{text[language].monitorAchievements}</p>
          <Link to="/services/tracker">
            <button className="track-progress-button">{text[language].startNow}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
