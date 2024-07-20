import React, { useState } from 'react';
import './Reviews.css';

const Reviews = () => {
  const initialReviews = [
    {
      id: 1,
      name: 'John Doe',
      plan: 'Workout',
      rating: 5,
      email: 'john@example.com',
      review: 'This plan is amazing! Highly recommend it to everyone.',
      isNew: false,
    },
    {
      id: 2,
      name: 'Jane Smith',
      plan: 'Nutrition',
      rating: 4,
      email: 'jane@example.com',
      review: 'Good value for the price. Satisfied with the service.',
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
      setError('Please fill in all required fields');
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

  return (
    <div className="reviews-container">
      <h1>Reviews</h1>
      <p>Check out our latest reviews</p>
      <p>Your feedback shapes out future</p>
      <div id="reviews-list">
        {reviews.map(review => (
          <div key={review.id} className="review-item">
            <div className="review-details">
              <p><strong>Name: </strong>{review.name}</p>
              <p><strong>Plan: </strong>{review.plan}</p>
              <p><strong>Rating: </strong>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
            </div>
            <div className="review-text">
              <p>{review.review}</p>
            </div>
            {review.isNew && (
              <button className="delete-button" onClick={() => deleteNewReview(review.id)}>Delete</button>
            )}
          </div>
        ))}
      </div>

      <div className="review-form-container">
        <h2>Leave us a review!</h2>
        {error && <p className="error">{error}</p>}
        <form id="review-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="plan">Plan:</label>
            <select id="plan" name="plan" value={plan} onChange={e => setPlan(e.target.value)}>
              <option value="Workout">Workout</option>
              <option value="Nutrition">Nutrition</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="rating">Rating:</label>
            <input type="number" id="rating" name="rating" min="1" max="5" value={rating} onChange={e => setRating(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="review">Review:</label>
            <textarea id="review" name="review" value={review} onChange={e => setReview(e.target.value)}></textarea>
          </div>
          <button type="button" onClick={addReview}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
