// src/Plannutrition.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Plannutrition.css';

const Plannutrition = () => {
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

    return (
        <div className="plan">
            <h2>Nutrition Plan Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Dietary Focus:</label>
                    <select
                        name="dietaryFocus"
                        value={formData.dietaryFocus}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Dietary Focus</option>
                        <option value="Protein">Protein</option>
                        <option value="Carbs">Carbs</option>
                        <option value="Fats">Fats</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Exercise Frequency:</label>
                    <select
                        name="exerciseFrequency"
                        value={formData.exerciseFrequency}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Exercise Frequency</option>
                        <option value="Daily">Daily</option>
                        <option value="3-5 days a week">3 - 5 days a week</option>
                        <option value="1-2 times a week">1 - 2 times a week</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Duration:</label>
                    <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Duration</option>
                        <option value="< 4 months">&lt; 4 months</option>
                        <option value="4 - 12 months">4 - 12 months</option>
                        <option value="> 12 months">&gt; 12 months</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Additional information:</label>
                    <textarea
                        name="lifeCircumstances"
                        value={formData.lifeCircumstances}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Continue to payment →</button>
            </form>
        </div>
    );
};

export default Plannutrition;
