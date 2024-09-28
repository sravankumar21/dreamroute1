import React, { useState } from 'react';
import '../styles/Quiz.css'; // Ensure this is the correct path to your CSS file

const VocabularyBuilder = () => {
  const [selectedWord, setSelectedWord] = useState('');
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');

  const words = [
    { word: 'Cryptography', definition: 'The art of writing or solving codes.' },
    { word: 'Phishing', definition: 'A method of trying to gather personal information.' },
    { word: 'Malware', definition: 'Malicious software designed to harm or exploit any programmable device.' },
  ];

  const handleWordClick = (word) => {
    if (selectedWord === '') {
      setSelectedWord(word);
    } else {
      if (word === selectedWord) {
        setScore(score + 1);
        setMessage('Correct!');
      } else {
        setMessage('Try again!');
      }
      setSelectedWord('');
    }
  };

  return (
    <div className="quiz-container vocabulary-builder-container">
      <h1 className="title">Vocabulary Builder</h1>
      <div className="words">
        {words.map((item, index) => (
          <div key={index} className="word" onClick={() => handleWordClick(item.word)}>
            {item.word}
          </div>
        ))}
      </div>
      <p className="feedback">{message}</p>
      <h2 className="score">Score: {score}</h2>
    </div>
  );
};

export default VocabularyBuilder;
