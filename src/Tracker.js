import React, { useState, useEffect } from 'react';
import './Tracker.css';

const Tracker = () => {
  const [logs, setLogs] = useState([]);
  const [type, setType] = useState('Workout');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [weight, setWeight] = useState('');

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
      alert('Please fill in all fields.');
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
        <p>Total Workouts: {workoutCount}</p>
        <p>Total Meals: {mealCount}</p>
        <p>Average Weight: {averageWeight} kg</p>
      </div>
    );
  };

  return (
    <div className="tracker-container">
      <h1 id="track-title">Track Your Progress</h1>
      <form id="tracker-form">
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <select id="type" name="type" value={type} onChange={e => setType(e.target.value)}>
            <option value="Workout">Workout</option>
            <option value="Meal">Meal</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight (kg):</label>
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
          Add Log
        </button>
      </form>

      <div className="logs">
        <h2>Your Logs</h2>
        {logs.map((log, index) => (
          <div key={index} className="log-item">
            <p><strong>Type:</strong> {log.type}</p>
            <p><strong>Description:</strong> {log.description}</p>
            <p><strong>Date:</strong> {log.date}</p>
            <p><strong>Weight:</strong> {log.weight} kg</p>
            <button onClick={() => deleteLog(index)} className="delete-button">Delete</button>
          </div>
        ))}
      </div>

      <div className="analysis-section">
        <h2>Analysis</h2>
        {analyzeLogs()}
      </div>
    </div>
  );
};

export default Tracker;
