import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

// Correctly import images
import coach1 from './images/coach1.PNG';
import coach2 from './images/coach2.PNG';
import coach3 from './images/coach3.PNG';

const translations = {
  en: {
    heroTitle: 'Your Fitness Journey Starts Here',
    heroSubtitle: 'Achieve your health and fitness goals with personalized plans, expert advice, and a supportive community at FitLife.',
    getStarted: 'Get Started',
    ourExperts: 'Our Experts',
    faq: 'Frequently Asked Questions',
    services: 'What services do you offer?',
    servicesAnswer: 'We offer a variety of services including personal training, group classes, and nutrition plans.',
    hours: 'What are your operating hours?',
    hoursAnswer: 'We are open 24 hours a day, 7 days a week.',
    saveData: 'How can I save my workout and meal logs?',
    saveDataAnswer: 'All data is stored locally, so when you close and re-open the website, your data will remain saved.',
    trainers: 'Are your personal trainers certified?',
    trainersAnswer: 'Yes, all our personal trainers are certified and have extensive experience in their respective fields.',
    contact: 'How can I contact you?',
    contactAnswer: 'You can contact us via phone at (613) 562-5700 or through our online reviews form.',
    contactUs: 'Contact Us',
    openHours: 'Open 24 hours',
    onlineTraining: 'Personal & group online training',
    phoneNumber: 'Phone Number: (613) 562-5700',
  },
  fr: {
    heroTitle: 'Votre parcours fitness commence ici',
    heroSubtitle: 'Atteignez vos objectifs de santé et de fitness avec des plans personnalisés, des conseils d\'experts et une communauté de soutien chez FitLife.',
    getStarted: 'Commencer',
    ourExperts: 'Nos Experts',
    faq: 'Questions Fréquemment Posées',
    services: 'Quels services offrez-vous?',
    servicesAnswer: 'Nous offrons une variété de services, y compris l\'entraînement personnel, les cours collectifs et les plans de nutrition.',
    hours: 'Quelles sont vos heures d\'ouverture?',
    hoursAnswer: 'Nous sommes ouverts 24 heures sur 24, 7 jours sur 7.',
    saveData: 'Comment puis-je enregistrer mes séances d\'entraînement et mes journaux alimentaires?',
    saveDataAnswer: 'Toutes les données sont stockées localement, donc lorsque vous fermez et rouvrez le site web, vos données resteront enregistrées.',
    trainers: 'Vos entraîneurs personnels sont-ils certifiés?',
    trainersAnswer: 'Oui, tous nos entraîneurs personnels sont certifiés et possèdent une vaste expérience dans leurs domaines respectifs.',
    contact: 'Comment puis-je vous contacter?',
    contactAnswer: 'Vous pouvez nous contacter par téléphone au (613) 562-5700 ou via notre formulaire de critiques en ligne.',
    contactUs: 'Contactez-nous',
    openHours: 'Ouvert 24 heures sur 24',
    onlineTraining: 'Entraînement en ligne personnel et collectif',
    phoneNumber: 'Numéro de téléphone : (613) 562-5700',
  },
};

const LandingPage = ({ scrollToContact, language }) => {
  const t = translations[language];

  useEffect(() => {
    if (scrollToContact) {
      document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
    }
  }, [scrollToContact]);

  return (
    <div className="landing-page">
      <section className="hero-section">
        <h1>{t.heroTitle}</h1>
        <p>{t.heroSubtitle}</p>
        
        <Link to="/services">
          <button className="cta-button">{t.getStarted}</button>
        </Link>
      </section>

      <section className="experts-section">
        <h2>{t.ourExperts}</h2>
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

      <section className="faq-section">
        <h2>{t.faq}</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h3>{t.services}</h3>
            <p>{t.servicesAnswer}</p>
          </div>
          <div className="faq-item">
            <h3>{t.hours}</h3>
            <p>{t.hoursAnswer}</p>
          </div>
          <div className="faq-item">
            <h3>{t.saveData}</h3>
            <p>{t.saveDataAnswer}</p>
          </div>
          <div className="faq-item">
            <h3>{t.trainers}</h3>
            <p>{t.trainersAnswer}</p>
          </div>
          <div className="faq-item">
            <h3>{t.contact}</h3>
            <p>{t.contactAnswer}</p>
          </div>
        </div>
      </section>

      <footer id="contact-section" className="contact-section">
        <h2>{t.contactUs}</h2>
        <p>{t.openHours}</p>
        <p>{t.onlineTraining}</p>
        <p>{t.phoneNumber}</p>
      </footer>
    </div>
  );
};

export default LandingPage;
