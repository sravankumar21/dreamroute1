import React from 'react';
import { Link } from 'react-router-dom';
import GamingFeatureImage1 from '../images/blog1.png'; // Adjust the path accordingly
import GamingFeatureImage2 from '../images/blog1.png'; // Adjust the path accordingly
import GamingFeatureImage3 from '../images/blog1.png'; // Adjust the path accordingly
import GamingFeatureImage4 from '../images/blog1.png'; // Adjust the path accordingly
import '../styles/Gamification.css';

const Gamification = () => {
  // Array of card data
  const cards = [
    {
      title: 'Hacker Quiz Game',
      description: 'Brace Yourself for Cybersecurity Challenge',
      image: GamingFeatureImage1,
      route: '/hacker-quiz',
    },
    {
      title: 'Science Trivia',
      description: 'Challenge your knowledge with science questions.',
      image: GamingFeatureImage2,
      route: '/science-quiz',
    },
    {
      title: 'Typing Mastery',
      description: 'Improve your typing skills with fun exercises.',
      image: GamingFeatureImage3,
      route: '/typing-quiz',
    },
    {
      title: 'Vocabulary Builder',
      description: 'Enhance your vocabulary through engaging quizzes.',
      image: GamingFeatureImage4,
      route: '/vocab-quiz',
    },
  ];

  return (
    <div className="gamification-container">
      <h1>Gamification Features</h1>
      <div className="card-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.image} alt={card.title} className="card-image" />
            <h2 className="card-title">{card.title}</h2>
            <p className="card-description">{card.description}</p>
            <Link to={card.route}>
              <button className="card-button">Start</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gamification;
