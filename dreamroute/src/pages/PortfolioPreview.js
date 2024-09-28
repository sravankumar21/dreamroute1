import React from 'react';
import '../styles/Resume1.css'; 

const PortfolioPreview = ({ portfolioData }) => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        {/* Display personal information */}
        <div className="portfolio-personal-info">
          <h1>{portfolioData.name}</h1>
          <p>Email: {portfolioData.email}</p>
          <p>Phone: {portfolioData.phone}</p>
          <p>Address: {portfolioData.address}</p>
          <p>LinkedIn: <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer">{portfolioData.linkedin}</a></p>
          <p>Portfolio: <a href={portfolioData.portfolioWebsite} target="_blank" rel="noopener noreferrer">{portfolioData.portfolioWebsite}</a></p>
        </div>
        {/* Profile Picture */}
        <div className="portfolio-photo">
          {portfolioData.photo && <img src={portfolioData.photo} alt="Profile" />}
        </div>
      </div>

      {/* Divider */}
      <hr className="section-divider" />

      {/* Experience Section */}
      <div className="portfolio-section">
        <h3>Experience</h3>
        <div>{portfolioData.experience}</div>
      </div>

      {/* Projects Section */}
      <div className="portfolio-section">
        <h3>Projects</h3>
        {portfolioData.projects && portfolioData.projects.map((project, index) => (
          <div key={index}>
            <h4>{project.title}</h4>
            <p><strong>Key Skills:</strong> {project.skills}</p>
            <p><strong>Project Link:</strong> <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="portfolio-section">
        <h3>Skills</h3>
        <p>{portfolioData.skills}</p>
      </div>
    </div>
  );
};

export default PortfolioPreview;
