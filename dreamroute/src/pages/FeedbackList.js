import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/FeedbackList.css';

const FeedbackList = ({ professionalId }) => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/feedback/${professionalId}`);
        setFeedback(response.data);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };

    fetchFeedback();
  }, [professionalId]);

  return (
    <div className="feedback-list-container">
      <h2>Feedback & Reviews</h2>
      {feedback.length === 0 ? (
        <p>No feedback available</p>
      ) : (
        <ul>
          {feedback.map((item) => (
            <li key={item._id}>
              <p><strong>Reviewer:</strong> {item.reviewerName}</p>
              <p><strong>Message:</strong> {item.feedbackMessage}</p>
              <p><strong>Rating:</strong> {item.rating} / 5</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackList;
