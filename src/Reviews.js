//change the already made reviews??
//no bc then would have to change the new reviews to french/english as wel on change

// Reviews.js
import React, { useState } from 'react';
import './Reviews.css';

const Reviews = ({ language }) => {
  const initialReviews = [
    {
      id: 1,
      name: 'John Doe',
      plan: 'Workout',
      rating: 5,
      email: 'john@example.com',
      review: 'Great plan. would reccomend.',
      isNew: false,
    },
    {
      id: 2,
      name: 'Jane Smith',
      plan: 'Nutrition',
      rating: 4,
      email: 'jane@example.com',
      review: 'Very good service.',
      isNew: false,
    },
  ];

  const [reviews, setReviews] = useState(initialReviews);
  const [name, setName] = useState('Anonymous');
  const [plan, setPlan] = useState('Workout');
  const [rating, setRating] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');
  const [error, setError] = useState('');

  const addReview = () => {
    if (!rating || !review || !email) {
      setError('Veuillez remplir tous les champs requis');
      return;
    }

    const newReview = {
      id: Date.now(), // Unique ID based on timestamp
      name,
      plan,
      rating: parseInt(rating),
      email,
      review,
      isNew: true, // Mark the review as new
    };

    setReviews([newReview, ...reviews]);

    // Clear the form fields
    setName('Anonymous');
    setPlan('Workout');
    setRating('');  
    setEmail('');
    setReview('');
    setError('');
  };

  const deleteNewReview = (id) => {
    setReviews(reviews.filter(review => review.id !== id || !review.isNew));
  };

  const text = {
    en: {
      title: 'Reviews',
      subtitle: 'Check out our latest reviews',
      feedback: 'Your feedback shapes our future',
      leaveReview: 'Leave us a review!',
      error: 'Please fill in all required fields',
      name: 'Name:',
      plan: 'Plan:',
      rating: 'Rating:',
      email: 'Email:',
      review: 'Review:',
      submit: 'Submit',
      workout: 'Workout',
      nutrition: 'Nutrition',
      delete: 'Delete',
    },
    fr: {
      title: 'Avis',
      subtitle: 'Découvrez nos derniers avis',
      feedback: 'Vos commentaires façonnent notre avenir',
      leaveReview: 'Laissez-nous un avis!',
      error: 'Veuillez remplir tous les champs requis',
      name: 'Nom:',
      plan: 'Plan:',
      rating: 'Note:',
      email: 'Email:',
      review: 'Avis:',
      submit: 'Soumettre',
      workout: 'Entraînement',
      nutrition: 'Nutrition',
      delete: 'Supprimer',
    }
  };

  const t = text[language];

  return (
    <div className="reviews-container">
      <h1>{t.title}</h1>
      <p>{t.subtitle}</p>
      <p>{t.feedback}</p>
      <div id="reviews-list">
        {reviews.map(review => (
          <div key={review.id} className="review-item">
            <div className="review-details">
              <p><strong>{t.name} </strong>{review.name}</p>
              <p><strong>{t.plan} </strong>{review.plan}</p>
              <p><strong>{t.rating} </strong>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
            </div>
            <div className="review-text">
              <p>{review.review}</p>
            </div>
            {review.isNew && (
              <button className="delete-button" onClick={() => deleteNewReview(review.id)}>{t.delete}</button>
            )}
          </div>
        ))}
      </div>

      <div className="review-form-container">
        <h2>{t.leaveReview}</h2>
        {error && <p className="error">{t.error}</p>}
        <form id="review-form">
          <div className="form-group">
            <label htmlFor="name">{t.name}</label>
            <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="plan">{t.plan}</label>
            <select id="plan" name="plan" value={plan} onChange={e => setPlan(e.target.value)}>
              <option value="Workout">{t.workout}</option>
              <option value="Nutrition">{t.nutrition}</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="rating">{t.rating}</label>
            <input type="number" id="rating" name="rating" min="1" max="5" value={rating} onChange={e => setRating(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t.email}</label>
            <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="review">{t.review}</label>
            <textarea id="review" name="review" value={review} onChange={e => setReview(e.target.value)}></textarea>
          </div>
          <button type="button" onClick={addReview}>{t.submit}</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
