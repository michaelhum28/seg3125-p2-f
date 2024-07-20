import React, { useState, useEffect } from 'react';
import './Tracker.css';

const Tracker = () => {
  const [logs, setLogs] = useState([]);
  const [type, setType] = useState('Workout');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

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
    const newLog = { type, description, date };
    setLogs([...logs, newLog]);
    setType('Workout');
    setDescription('');
    setDate('');
  };

  const analyzeLogs = () => {
    const workoutCount = logs.filter(log => log.type === 'Workout').length;
    const mealCount = logs.filter(log => log.type === 'Meal').length;

    return (
      <div className="analysis">
        <p>Total Workouts: {workoutCount}</p>
        <p>Total Meals: {mealCount}</p>
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
        <button type="button" onClick={addLog} className="tracker-button">Add Log</button>
      </form>

      <div className="logs">
        <h2>Your Logs</h2>
        {logs.map((log, index) => (
          <div key={index} className="log-item">
            <p><strong>Type:</strong> {log.type}</p>
            <p><strong>Description:</strong> {log.description}</p>
            <p><strong>Date:</strong> {log.date}</p>
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
