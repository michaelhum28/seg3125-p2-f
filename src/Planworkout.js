import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Planworkout.css';

const Planworkout = ({ language }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        workoutPlan: '',
        intensityLevel: '',
        duration: '',
        lifeCircumstances: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send the data to a server
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            workoutPlan: '',
            intensityLevel: '',
            duration: '',
            lifeCircumstances: '',
        });
        // Navigate to the confirmation page
        navigate('/confirm');
    };

    const text = {
        en: {
            title: 'Personal Goals and Life Circumstances Form',
            name: 'Name:',
            email: 'Email:',
            workoutPlan: 'Workout Plan:',
            intensityLevel: 'Intensity Level:',
            duration: 'Duration:',
            additionalInfo: 'Additional information:',
            submit: 'Continue to payment →',
            selectPlan: 'Select Workout Plan',
            selectIntensity: 'Select Intensity Level',
            selectDuration: 'Select Duration',
            cardio: 'Cardio',
            strength: 'Strength Training',
            yoga: 'Yoga',
            low: 'Low',
            medium: 'Medium',
            high: 'High',
            lessThan30: '< 30 minutes',
            between30and60: '30 - 60 minutes',
            moreThan60: '> 60 minutes',
        },
        fr: {
            title: 'Formulaire d\'objectifs personnels et de circonstances de vie',
            name: 'Nom:',
            email: 'Email:',
            workoutPlan: 'Plan d\'entraînement:',
            intensityLevel: 'Niveau d\'intensité:',
            duration: 'Durée:',
            additionalInfo: 'Informations supplémentaires:',
            submit: 'Continuer vers le paiement →',
            selectPlan: 'Sélectionnez le plan d\'entraînement',
            selectIntensity: 'Sélectionnez le niveau d\'intensité',
            selectDuration: 'Sélectionnez la durée',
            cardio: 'Cardio',
            strength: 'Entraînement de force',
            yoga: 'Yoga',
            low: 'Bas',
            medium: 'Moyen',
            high: 'Élevé',
            lessThan30: '< 30 minutes',
            between30and60: '30 - 60 minutes',
            moreThan60: '> 60 minutes',
        },
    };

    const t = text[language];

    return (
        <div className="plan-container">
            <h2>{t.title}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">{t.name}</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">{t.email}</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="workoutPlan">{t.workoutPlan}</label>
                    <select
                        id="workoutPlan"
                        name="workoutPlan"
                        value={formData.workoutPlan}
                        onChange={handleChange}
                        required
                    >
                        <option value="">{t.selectPlan}</option>
                        <option value="Cardio">{t.cardio}</option>
                        <option value="Strength Training">{t.strength}</option>
                        <option value="Yoga">{t.yoga}</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="intensityLevel">{t.intensityLevel}</label>
                    <select
                        id="intensityLevel"
                        name="intensityLevel"
                        value={formData.intensityLevel}
                        onChange={handleChange}
                        required
                    >
                        <option value="">{t.selectIntensity}</option>
                        <option value="Low">{t.low}</option>
                        <option value="Medium">{t.medium}</option>
                        <option value="High">{t.high}</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="duration">{t.duration}</label>
                    <select
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                    >
                        <option value="">{t.selectDuration}</option>
                        <option value="<30 mins">{t.lessThan30}</option>
                        <option value="30-60 mins">{t.between30and60}</option>
                        <option value=">60 mins">{t.moreThan60}</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="lifeCircumstances">{t.additionalInfo}</label>
                    <textarea
                        id="lifeCircumstances"
                        name="lifeCircumstances"
                        value={formData.lifeCircumstances}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">{t.submit}</button>
            </form>
        </div>
    );
};

export default Planworkout;
