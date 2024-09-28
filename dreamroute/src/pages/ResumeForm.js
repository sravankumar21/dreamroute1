import React from 'react';

const ResumeForm = ({ resumeData, handleInputChange, handlePhotoUpload }) => {
  return (
    <div className="resume-form">
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={resumeData.name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={resumeData.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={resumeData.phone}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <label>Address</label>
        <textarea
          name="address"
          value={resumeData.address}
          onChange={handleInputChange}
        ></textarea>
      </div>

      {/* Profile Picture Upload */}
      <div className="form-group">
        <label>Upload Photo</label>
        <input type="file" onChange={handlePhotoUpload} />
      </div>

      {/* Education Input */}
      <div className="form-group">
        <label>Education</label>
        <textarea
          name="education"
          value={resumeData.education}
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
          value={resumeData.projects[0].title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="project1.skills"
          placeholder="Key Skills"
          value={resumeData.projects[0].skills}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="project1.link"
          placeholder="Project Link"
          value={resumeData.projects[0].link}
          onChange={handleInputChange}
        />
        <textarea
          name="project1.description"
          placeholder="Description"
          value={resumeData.projects[0].description}
          onChange={handleInputChange}
        ></textarea>
      </div>

      {/* Skills Input */}
      <div className="form-group">
        <label>Skills</label>
        <textarea
          name="skills"
          value={resumeData.skills}
          onChange={handleInputChange}
        ></textarea>
      </div>
    </div>
  );
};

export default ResumeForm;
