import React, { useState } from 'react';
import './Reviews.css';

const Reviews = () => {
  const initialReviews = [
    {
      name: 'John Doe',
      plan: 'Workout',
      rating: 5,
      email: 'john@example.com',
      review: 'This plan is amazing! Highly recommend it to everyone.'
    },
    {
      name: 'Jane Smith',
      plan: 'Nutrition',
      rating: 4,
      email: 'jane@example.com',
      review: 'Good value for the price. Satisfied with the service.'
    },
  ];

  const [reviews, setReviews] = useState(initialReviews);
  const [name, setName] = useState('Anonymous');
  const [plan, setPlan] = useState('Workout');
  const [rating, setRating] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');

  const addReview = () => {
    const newReview = {
      name,
      plan,
      rating: parseInt(rating),
      email,
      review,
    };

    setReviews([...reviews, newReview]);

    // Clear the form fields
    setName('Anonymous');
    setPlan('Workout');
    setRating('');
    setEmail('');
    setReview('');
  };

  return (
    <div className="reviews-container">
      <h1>Reviews</h1>
      <p>Check out our latest reviews</p>
      <div id="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <div className="review-details">
              <p><strong>Name: </strong>{review.name}</p>
              <p><strong>Plan: </strong>{review.plan}</p>
              <p><strong>Rating: </strong>{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
            </div>
            <div className="review-text">
              <p>{review.review}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="review-form-container">
        <h2>Leave us a review!</h2>
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
