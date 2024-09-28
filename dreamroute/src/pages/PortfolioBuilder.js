import React, { useState, useRef } from 'react';
import PortfolioForm from './PortfolioForm';
import PortfolioPreview from './PortfolioPreview';
import { useReactToPrint } from 'react-to-print';
import '../styles/Resume1.css';  // Adjust the path if necessary

const PortfolioBuilder = () => {
  const [portfolioData, setPortfolioData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    linkedin: '',
    portfolioWebsite: '',
    experience: '',
    skills: '',
    projects: [{ title: '', skills: '', link: '', description: '' }],
  });

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPortfolioData({ ...portfolioData, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split('.');
    
    if (keys.length > 1) {
      setPortfolioData((prevState) => {
        const updatedProjects = [...prevState.projects];
        updatedProjects[0] = { ...updatedProjects[0], [keys[1]]: value };
        return { ...prevState, projects: updatedProjects };
      });
    } else {
      setPortfolioData({ ...portfolioData, [name]: value });
    }
  };

  const portfolioRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => portfolioRef.current,
  });

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left Side: Form */}
        <div className="col-md-6">
          <PortfolioForm portfolioData={portfolioData} handleInputChange={handleInputChange} handlePhotoUpload={handlePhotoUpload} />
        </div>
        {/* Right Side: Portfolio Preview */}
        <div className="col-md-6 portfolio-preview" ref={portfolioRef}>
          <PortfolioPreview portfolioData={portfolioData} />
        </div>
      </div>
      <button className="btn btn-primary mt-3" onClick={handlePrint}>
        Download as PDF
      </button>
    </div>
  );
};

export default PortfolioBuilder;
