import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AdminSkillEvaluator.css';

const AdminSkillEvaluator = () => {
  const [form, setForm] = useState({
    domain: '',
    domainType: '',
    skillLevel: 'beginner',
    mode: 'manual',
    question: '',
    options: ['', '', '', ''],
    correctAnswer: '',
    generatedQuestions: [],
  });

  const domains = [
    { name: 'Web Development', type: 'tech' },
    { name: 'Digital Marketing', type: 'non-tech' },
    { name: 'Operating Systems', type: 'tech' },
    { name: 'Database Management System', type: 'tech' },
    { name: 'Data Structures and Algorithms', type: 'tech' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...form.options];
    newOptions[index] = value;
    setForm({ ...form, options: newOptions });
  };

  const handleGenerateQuestions = async () => {
    if (form.domain && form.skillLevel) {
      try {
        const response = await axios.post('http://localhost:4000/api/generate-questions', {
          domain: form.domain,
          domainType: form.domainType,
          skillLevel: form.skillLevel,
          count: 5,
        });

        if (response.data && response.data.questions) {
          setForm({ ...form, generatedQuestions: response.data.questions });
        } else {
          alert('No questions generated.');
        }
      } catch (error) {
        console.error('Error generating questions:', error);
        alert('An error occurred while generating questions. Please try again.');
      }
    } else {
      alert('Please select a domain and skill level.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.mode === 'auto' && form.generatedQuestions.length > 0) {
      for (let question of form.generatedQuestions) {
        await axios.post('http://localhost:4000/api', {
          domain: form.domain,
          domainType: form.domainType,
          question: question.question,
          options: question.options,
          correctAnswer: question.correctAnswer,
          skillLevel: form.skillLevel,
          mode: form.mode,
        });
      }
      alert('Generated questions added successfully!');
      resetForm();
    } else if (form.mode === 'manual') {
      await axios.post('http://localhost:4000/api/questions', {
        domain: form.domain,
        domainType: form.domainType,
        question: form.question,
        options: form.options,
        correctAnswer: form.correctAnswer,
        skillLevel: form.skillLevel,
        mode: form.mode,
      });
      alert('Question added successfully!');
      resetForm();
    } else {
      alert('Please generate questions before submitting.');
    }
  };

  const resetForm = () => {
    setForm({
      domain: '',
      domainType: '',
      skillLevel: 'beginner',
      mode: 'manual',
      question: '',
      options: ['', '', '', ''],
      correctAnswer: '',
      generatedQuestions: [],
    });
  };

  return (
    <div className="admin-skill-evaluator">
      <h1>Admin Skill Evaluator</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Domain:</label>
          <select name="domain" value={form.domain} onChange={handleChange} required>
            <option value="">Select a domain</option>
            {domains.map((domain, index) => (
              <option key={index} value={domain.name}>{domain.name}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Domain Type:</label>
          <select name="domainType" value={form.domainType} onChange={handleChange} required>
            <option value="">Select domain type</option>
            <option value="tech">Tech</option>
            <option value="non-tech">Non-Tech</option>
          </select>
        </div>
        <div className="form-group">
          <label>Skill Level:</label>
          <select name="skillLevel" value={form.skillLevel} onChange={handleChange} required>
            <option value="beginner">Beginner</option>
            <option value="pro">Pro</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <div className="form-group">
          <label>Mode:</label>
          <select name="mode" value={form.mode} onChange={handleChange}>
            <option value="manual">Manual</option>
            <option value="auto">Automatic</option>
          </select>
        </div>

        {form.mode === 'manual' && (
          <>
            <div className="form-group">
              <label>Question:</label>
              <input type="text" name="question" value={form.question} onChange={handleChange} required />
            </div>
            {form.options.map((option, index) => (
              <div className="form-group" key={index}>
                <label>Option {index + 1}:</label>
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  required
                />
              </div>
            ))}
            <div className="form-group">
              <label>Correct Answer:</label>
              <input type="text" name="correctAnswer" value={form.correctAnswer} onChange={handleChange} required />
            </div>
          </>
        )}

        <button type="button" onClick={handleGenerateQuestions} className="generate-button">Generate Questions</button>
        <button type="submit" className="submit-button">Add Generated Questions</button>
      </form>

      {form.mode === 'auto' && form.generatedQuestions.length > 0 && (
        <div className="generated-questions">
          <h2>Generated Questions:</h2>
          <ul>
            {form.generatedQuestions.map((question, index) => (
              <li key={index}>{question.question}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminSkillEvaluator;
