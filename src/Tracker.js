// Tracker.js
import React, { useState, useEffect } from 'react';
import './Tracker.css';

const Tracker = ({ language }) => {
  const [logs, setLogs] = useState([]);
  const [type, setType] = useState('Workout');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [weight, setWeight] = useState('');

  const text = {
    en: {
      title: 'Track Your Progress',
      type: 'Type:',
      workout: 'Workout',
      meal: 'Meal',
      description: 'Description:',
      date: 'Date:',
      weight: 'Weight (kg):',
      addLog: 'Add Log',
      yourLogs: 'Your Logs',
      analysis: 'Analysis',
      totalWorkouts: 'Total Workouts:',
      totalMeals: 'Total Meals:',
      averageWeight: 'Average Weight:',
      delete: 'Delete',
      alert: 'Please fill in all fields.',
    },
    fr: {
      title: 'Suivez vos progrès',
      type: 'Type:',
      workout: 'Entraînement',
      meal: 'Repas',
      description: 'Description:',
      date: 'Date:',
      weight: 'Poids (kg):',
      addLog: 'Ajouter une entrée',
      yourLogs: 'Vos entrées',
      analysis: 'Analyse',
      totalWorkouts: 'Total des entraînements:',
      totalMeals: 'Total des repas:',
      averageWeight: 'Poids moyen:',
      delete: 'Supprimer',
      alert: 'Veuillez remplir tous les champs.',
    }
  };

  useEffect(() => {
    const storedLogs = JSON.parse(localStorage.getItem('logs'));
    if (storedLogs) {
      setLogs(storedLogs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('logs', JSON.stringify(logs));
  }, [logs]);

  const addLog = () => {
    if (!description || !date || !weight) {
      alert(text[language].alert);
      return;
    }

    const newLog = { type, description, date, weight };
    setLogs([...logs, newLog]);
    setType('Workout');
    setDescription('');
    setDate('');
    setWeight('');
  };

  const deleteLog = (index) => {
    const updatedLogs = logs.filter((_, i) => i !== index);
    setLogs(updatedLogs);
  };

  const analyzeLogs = () => {
    const workoutCount = logs.filter(log => log.type === 'Workout').length;
    const mealCount = logs.filter(log => log.type === 'Meal').length;
    const averageWeight = logs.length ? (logs.reduce((total, log) => total + parseFloat(log.weight), 0) / logs.length).toFixed(2) : 0;

    return (
      <div className="analysis">
        <p>{text[language].totalWorkouts} {workoutCount}</p>
        <p>{text[language].totalMeals} {mealCount}</p>
        <p>{text[language].averageWeight} {averageWeight} kg</p>
      </div>
    );
  };

  return (
    <div className="tracker-container">
      <h1 id="track-title">{text[language].title}</h1>
      <form id="tracker-form">
        <div className="form-group">
          <label htmlFor="type">{text[language].type}</label>
          <select id="type" name="type" value={type} onChange={e => setType(e.target.value)}>
            <option value="Workout">{text[language].workout}</option>
            <option value="Meal">{text[language].meal}</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">{text[language].description}</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">{text[language].date}</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight">{text[language].weight}</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={e => setWeight(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={addLog}
          className="tracker-button"
          disabled={!description || !date || !weight}
        >
          {text[language].addLog}
        </button>
      </form>

      <div className="logs">
        <h2>{text[language].yourLogs}</h2>
        {logs.map((log, index) => (
          <div key={index} className="log-item">
            <p><strong>{text[language].type}</strong> {log.type}</p>
            <p><strong>{text[language].description}</strong> {log.description}</p>
            <p><strong>{text[language].date}</strong> {log.date}</p>
            <p><strong>{text[language].weight}</strong> {log.weight} kg</p>
            <button onClick={() => deleteLog(index)} className="delete-button">{text[language].delete}</button>
          </div>
        ))}
      </div>

      <div className="analysis-section">
        <h2>{text[language].analysis}</h2>
        {analyzeLogs()}
      </div>
    </div>
  );
};

export default Tracker;
