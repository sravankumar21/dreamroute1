import React, { useState, useEffect } from 'react';
import '../styles/Quiz.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [feedback, setFeedback] = useState('');
  const [showAnswers, setShowAnswers] = useState(false);
  
  // Cybersecurity-related questions
  const questions = [
    { question: 'What does the acronym "VPN" stand for?', answer: 'Virtual Private Network' },
    { question: 'What is the primary purpose of a firewall?', answer: 'To block unauthorized access' },
    { question: 'What does "phishing" refer to?', answer: 'A method of trying to gather personal information' },
    { question: 'What is two-factor authentication (2FA)?', answer: 'A security process that requires two different forms of identification' },
    { question: 'What is malware?', answer: 'Malicious software designed to harm or exploit any programmable device' },
    { question: 'What does "DDoS" stand for?', answer: 'Distributed Denial of Service' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : clearInterval(timer)));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = () => {
    if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
      setScore(score + 1);
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect! The correct answer is: ' + questions[currentQuestion].answer);
    }
    setUserAnswer('');
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleSkip = () => {
    setUserAnswer('');
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
  };

  return (
    <div className="Appquiz">
      <h1 className="title1">Cybersecurity Quiz</h1>
      <div className="timer">Time Left: {timeLeft}s</div>
      {currentQuestion < questions.length && timeLeft > 0 ? (
        <div>
          <div className="question">{questions[currentQuestion].question}</div>
          <div className="answer-input-container">
            <textarea
              className="answer-input"
              value={userAnswer}
              onChange={handleAnswerChange}
              placeholder="Type your answer here..."
              rows={3} // Adjust the number of rows to control height
            />
            <div className="button-container">
              <button className="submit-button" onClick={handleSubmit}>
                Submit
              </button>
              <button className="skip-button" onClick={handleSkip}>
                Skip
              </button>
            </div>
          </div>
          {feedback && <div className="feedback">{feedback}</div>}
        </div>
      ) : (
        <div className="end-message">
          Quiz Over! Your score: {score}/{questions.length}
          <div className="final-actions">
            <button onClick={handleShowAnswers} className="show-answers-button">
              Show Correct Answers
            </button>
          </div>
        </div>
      )}
      {showAnswers && (
        <div className="answers-view">
          <h2>Correct Answers:</h2>
          {questions.map((q, index) => (
            <div key={index} className="unanswered-question">
              Q: {q.question} <br />
              A: {q.answer}
            </div>
          ))}
          <button onClick={() => setShowAnswers(false)} className="hide-answers-button">
            Hide Answers
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
