import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Planworkout.css';

const Planworkout = () => {
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

    return (
        <div className="plan-container">
            <h2>Personal Goals and Life Circumstances Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
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
                    <label htmlFor="email">Email:</label>
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
                    <label htmlFor="workoutPlan">Workout Plan:</label>
                    <select
                        id="workoutPlan"
                        name="workoutPlan"
                        value={formData.workoutPlan}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Workout Plan</option>
                        <option value="Cardio">Cardio</option>
                        <option value="Strength Training">Strength Training</option>
                        <option value="Yoga">Yoga</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="intensityLevel">Intensity Level:</label>
                    <select
                        id="intensityLevel"
                        name="intensityLevel"
                        value={formData.intensityLevel}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Intensity Level</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="duration">Duration:</label>
                    <select
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Duration</option>
                        <option value="<30 mins">&lt; 30 minutes</option>
                        <option value="30-60 mins">30 - 60 minutes</option>
                        <option value=">60 mins">&gt; 60 minutes</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="lifeCircumstances">Additional information:</label>
                    <textarea
                        id="lifeCircumstances"
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

export default Planworkout;
