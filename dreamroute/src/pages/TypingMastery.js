import React, { useState, useEffect } from 'react';
import '../styles/Quiz.css'; // Ensure this is the correct path to your CSS file

const TypingMastery = () => {
  const [textToType, setTextToType] = useState('Type this text to master your typing skills.');
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    if (userInput === textToType) {
      setFeedback('Great job! You typed it correctly!');
    } else if (userInput.length === textToType.length) {
      setFeedback('Almost there! Keep practicing.');
    } else {
      setFeedback('');
    }
  }, [userInput, textToType]);

  const handleStartAgain = () => {
    setUserInput('');
    setFeedback('');
  };

  return (
    <div className="quiz-container typing-mastery-container">
      <h1 className="title">Typing Mastery</h1>
      <p>{textToType}</p>
      <textarea
        className="typing-area"
        value={userInput}
        onChange={handleChange}
        rows={4}
      />
      <p className="typing-feedback">{feedback}</p>
      <button className="start-button" onClick={handleStartAgain}>
        Start Again
      </button>
    </div>
  );
};

export default TypingMastery;
