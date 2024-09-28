import React from 'react';
import '../styles/Resume1.css';

const ResumePreview = ({ resumeData }) => {
  return (
    <div className="resume-container">
      <div className="resume-header">
        {/* Display personal information */}
        <div className="resume-personal-info">
          <h1>{resumeData.name}</h1>
          <p>Email: {resumeData.email}</p>
          <p>Phone: {resumeData.phone}</p>
          <p>Address: {resumeData.address}</p>
        </div>
        {/* Profile Picture */}
        <div className="resume-photo">
          {resumeData.photo && <img src={resumeData.photo} alt="Profile" />}
        </div>
      </div>

      {/* Divider */}
      <hr className="section-divider" />

      {/* Education Section */}
      <div className="resume-section">
        <h3>Education</h3>
        <div>{resumeData.education}</div>
      </div>

      {/* Projects Section */}
      <div className="resume-section">
        <h3>Projects</h3>
        {resumeData.projects && resumeData.projects.map((project, index) => (
          <div key={index}>
            <h4>{project.title}</h4>
            <p><strong>Key Skills:</strong> {project.skills}</p>
            <p><strong>Project Link:</strong> <a href={project.link}>{project.link}</a></p>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="resume-section">
        <h3>Skills</h3>
        <p>{resumeData.skills}</p>
      </div>
    </div>
  );
};

export default ResumePreview;
