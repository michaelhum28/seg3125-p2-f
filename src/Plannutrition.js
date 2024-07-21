import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Plannutrition.css';

const Plannutrition = ({ language }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        dietaryFocus: '',
        exerciseFrequency: '',
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
            dietaryFocus: '',
            exerciseFrequency: '',
            duration: '',
            lifeCircumstances: '',
        });
        // Navigate to the confirmation page
        navigate('/confirm');
    };

    const text = {
        en: {
            title: 'Nutrition Plan Form',
            name: 'Name:',
            email: 'Email:',
            dietaryFocus: 'Dietary Focus:',
            exerciseFrequency: 'Exercise Frequency:',
            duration: 'Duration:',
            additionalInfo: 'Additional information:',
            submit: 'Continue to payment →',
            selectFocus: 'Select Dietary Focus',
            selectFrequency: 'Select Exercise Frequency',
            selectDuration: 'Select Duration',
            protein: 'Protein',
            carbs: 'Carbs',
            fats: 'Fats',
            daily: 'Daily',
            threeToFive: '3 - 5 days a week',
            oneToTwo: '1 - 2 times a week',
            lessThan4: '< 4 months',
            between4and12: '4 - 12 months',
            moreThan12: '> 12 months',
        },
        fr: {
            title: 'Formulaire de plan nutritionnel',
            name: 'Nom:',
            email: 'Email:',
            dietaryFocus: 'Focalisation alimentaire:',
            exerciseFrequency: 'Fréquence d\'exercice:',
            duration: 'Durée:',
            additionalInfo: 'Informations supplémentaires:',
            submit: 'Continuer vers le paiement →',
            selectFocus: 'Sélectionnez la focalisation alimentaire',
            selectFrequency: 'Sélectionnez la fréquence d\'exercice',
            selectDuration: 'Sélectionnez la durée',
            protein: 'Protéines',
            carbs: 'Glucides',
            fats: 'Lipides',
            daily: 'Quotidien',
            threeToFive: '3 - 5 jours par semaine',
            oneToTwo: '1 - 2 fois par semaine',
            lessThan4: '< 4 mois',
            between4and12: '4 - 12 mois',
            moreThan12: '> 12 mois',
        },
    };

    const t = text[language];

    return (
        <div className="plan">
            <h2>{t.title}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>{t.name}</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>{t.email}</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>{t.dietaryFocus}</label>
                    <select
                        name="dietaryFocus"
                        value={formData.dietaryFocus}
                        onChange={handleChange}
                        required
                    >
                        <option value="">{t.selectFocus}</option>
                        <option value="Protein">{t.protein}</option>
                        <option value="Carbs">{t.carbs}</option>
                        <option value="Fats">{t.fats}</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>{t.exerciseFrequency}</label>
                    <select
                        name="exerciseFrequency"
                        value={formData.exerciseFrequency}
                        onChange={handleChange}
                        required
                    >
                        <option value="">{t.selectFrequency}</option>
                        <option value="Daily">{t.daily}</option>
                        <option value="3-5 days a week">{t.threeToFive}</option>
                        <option value="1-2 times a week">{t.oneToTwo}</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>{t.duration}</label>
                    <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                    >
                        <option value="">{t.selectDuration}</option>
                        <option value="< 4 months">{t.lessThan4}</option>
                        <option value="4 - 12 months">{t.between4and12}</option>
                        <option value="> 12 months">{t.moreThan12}</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>{t.additionalInfo}</label>
                    <textarea
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

export default Plannutrition;
