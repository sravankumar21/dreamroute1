import React, { useState } from 'react';
import '../styles/Quiz.css'; // Ensure this is the correct path to your CSS file

const ScienceTrivia = () => {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [message, setMessage] = useState('');

  const questions = [
    {
      question: 'What is the chemical symbol for water?',
      options: ['H2O', 'O2', 'CO2', 'NaCl'],
      answer: 'H2O',
    },
    {
      question: 'What planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
      answer: 'Mars',
    },
  ];

  const handleOptionClick = (option) => {
    if (option === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
      setMessage('Correct!');
    } else {
      setMessage('Incorrect! The correct answer was ' + questions[currentQuestionIndex].answer);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setMessage('Quiz finished! Your score is: ' + score);
    }
  };

  return (
    <div className="quiz-container science-trivia-container">
      <h1 className="title">Science Trivia</h1>
      {currentQuestionIndex < questions.length ? (
        <div>
          <h2 className="question">{questions[currentQuestionIndex].question}</h2>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <button key={index} onClick={() => handleOptionClick(option)} className="submit-button">
              {option}
            </button>
          ))}
          <p className="feedback">{message}</p>
        </div>
      ) : (
        <h2 className="end-message">Final Score: {score}</h2>
      )}
    </div>
  );
};

export default ScienceTrivia;
