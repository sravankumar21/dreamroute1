import React, { useState, useRef } from 'react';
import ResumeForm from './ResumeForm';
import ResumePreview from './ResumePreview';
import { useReactToPrint } from 'react-to-print';
import '../styles/Resume1.css'; // Adjust the path if necessary

const ResumeBuilder1 = () => {
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
    skills: '',
    projects: [{ title: '', skills: '', link: '', description: '' }],
  });

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setResumeData({ ...resumeData, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');
    
    if (keys.length > 1) {
      setResumeData((prevState) => {
        const updatedProjects = [...prevState.projects];
        updatedProjects[0] = { ...updatedProjects[0], [keys[1]]: value };
        return { ...prevState, projects: updatedProjects };
      });
    } else {
      setResumeData({ ...resumeData, [name]: value });
    }
  };

  const resumeRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left Side: Form */}
        <div className="col-md-6">
          <ResumeForm resumeData={resumeData} handleInputChange={handleInputChange} handlePhotoUpload={handlePhotoUpload} />
        </div>
        {/* Right Side: Resume Preview */}
        <div className="col-md-6 resume-preview" ref={resumeRef}>
          <ResumePreview resumeData={resumeData} />
        </div>
      </div>
      <button className="btn btn-primary mt-3" onClick={handlePrint}>
        Download as PDF
      </button>
    </div>
  );
};

export default ResumeBuilder1;
