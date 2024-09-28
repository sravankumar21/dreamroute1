import React from 'react';

const PortfolioForm = ({ portfolioData, handleInputChange, handlePhotoUpload }) => {
  return (
    <div className="portfolio-form">
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={portfolioData.name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={portfolioData.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={portfolioData.phone}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>Address</label>
        <textarea
          name="address"
          value={portfolioData.address}
          onChange={handleInputChange}
        ></textarea>
      </div>

      {/* LinkedIn Profile Input */}
      <div className="form-group">
        <label>LinkedIn Profile</label>
        <input
          type="url"
          name="linkedin"
          value={portfolioData.linkedin}
          onChange={handleInputChange}
        />
      </div>

      {/* Portfolio Website Input */}
      <div className="form-group">
        <label>Portfolio Website</label>
        <input
          type="url"
          name="portfolioWebsite"
          value={portfolioData.portfolioWebsite}
          onChange={handleInputChange}
        />
      </div>

      {/* Profile Picture Upload */}
      <div className="form-group">
        <label>Upload Photo</label>
        <input type="file" onChange={handlePhotoUpload} />
      </div>

      {/* Experience Input */}
      <div className="form-group">
        <label>Experience</label>
        <textarea
          name="experience"
          value={portfolioData.experience}
          onChange={handleInputChange}
        ></textarea>
      </div>

      {/* Projects Section */}
      <div className="form-group">
        <label>Project 1</label>
        <input
          type="text"
          name="project1.title"
          placeholder="Project Title"
          value={portfolioData.projects[0].title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="project1.skills"
          placeholder="Key Skills"
          value={portfolioData.projects[0].skills}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="project1.link"
          placeholder="Project Link"
          value={portfolioData.projects[0].link}
          onChange={handleInputChange}
        />
        <textarea
          name="project1.description"
          placeholder="Description"
          value={portfolioData.projects[0].description}
          onChange={handleInputChange}
        ></textarea>
      </div>

      {/* Skills Input */}
      <div className="form-group">
        <label>Skills</label>
        <textarea
          name="skills"
          value={portfolioData.skills}
          onChange={handleInputChange}
        ></textarea>
      </div>
    </div>
  );
};

export default PortfolioForm;
