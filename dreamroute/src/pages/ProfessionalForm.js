import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ProfessionalForm.css';

const ProfessionalForm = () => {
  const [professional, setProfessional] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    expertise: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfessional({
      ...professional,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/professional-form', professional);
      console.log(response.data); // Example of using the response (e.g., to check the returned data)
      setMessage('Professional added successfully');
      setProfessional({ name: '', email: '', company: '', position: '', expertise: '' });
    } catch (error) {
      setMessage('Failed to add professional');
    }
  };
  

  return (
    <div className="professional-form-container">
      <h2>Add a Professional</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={professional.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={professional.email} onChange={handleChange} required />

        <label>Company:</label>
        <input type="text" name="company" value={professional.company} onChange={handleChange} required />

        <label>Position:</label>
        <input type="text" name="position" value={professional.position} onChange={handleChange} required />

        <label>Expertise:</label>
        <input type="text" name="expertise" value={professional.expertise} onChange={handleChange} required />

        <button type="submit">Add Professional</button>
      </form>
    </div>
  );
};

export default ProfessionalForm;
