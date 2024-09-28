import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import '../styles/CareerCoach.css'; // Ensure your CSS file is correctly imported
import coachIcon from '../images/tech8.avif'; // Add an image for the career coach

const CareerCoach = () => {
  const [text, setText] = useState('');
  const [responses, setResponses] = useState([]);

  // Speech recognition hooks
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  // Update the text state with the current transcript in real-time
  useEffect(() => {
    setText(transcript);
  }, [transcript]);

  // Check if the browser supports speech recognition
  if (!browserSupportsSpeechRecognition) {
    return <p>Your browser does not support speech recognition.</p>;
  }

  const handleSpeechToText = () => {
    SpeechRecognition.startListening({ continuous: true, interimResults: true });
  };

  const handleStopSpeechToText = () => {
    SpeechRecognition.stopListening();
  };

  const handleSubmit = async () => {
    if (text.trim() === '') return; // Prevent submitting empty messages
    setResponses((prev) => [...prev, { type: 'user', text }]);

    try {
      const response = await fetch('http://127.0.0.1:5001/careercoach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      // Log the backend response for debugging
      console.log('Career chatbot prediction result:', data);

      const predictedResponses = data.responses;

      // Select a random response from the predicted responses
      const randomResponse = predictedResponses[Math.floor(Math.random() * predictedResponses.length)];

      // Add bot's response to the chat
      setResponses((prev) => [...prev, { type: 'bot', text: randomResponse }]);

      setText(''); // Clear the text input
      resetTranscript(); // Reset the speech recognition transcript
    } catch (error) {
      console.error('Error:', error);
      setResponses((prev) => [
        ...prev,
        { type: 'bot', text: 'Sorry, there was an error. Please try again.' },
      ]);
    }
  };

  const handleGuideClick = () => {
    alert('This is the Career Coach chatbot. Use the voice-to-text feature to speak your queries, or type them directly for career advice and guidance.');
  };

  return (
    <div className="career-coach">
      <div className="sidebar">
        <img src={coachIcon} alt="Coach Icon" className="coach-icon" />
        <h1 className="coach-title">Career Coach</h1>
        <button onClick={handleSpeechToText} className="btn btn-success">
          {listening ? 'Listening...' : 'Start Speaking'}
        </button>
        <button onClick={handleStopSpeechToText} className="btn btn-danger">Stop</button>
        <button onClick={handleGuideClick} className="btn btn-guide">User Guide</button>
      </div>
      <div className="chat2-container">
        <div className="chat-box">
          {responses.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.type}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Ask me about your career..."
          />
          <button onClick={handleSubmit} className="btn-submit">Send</button>
        </div>
      </div>
    </div>
  );
};

export default CareerCoach;
