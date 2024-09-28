import React, { useRef } from 'react';
import '../styles/MockInterviewPage.css';
import aiImage from '../images/aioptiproimage.avif'; // Ensure this is the correct path for your image

const ProfessionalMock = () => {
    const videoRef = useRef(null);

    const startInterview = () => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then(stream => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                }
            })
            .catch(err => {
                console.error('Error accessing webcam and microphone:', err);
                alert('Error accessing webcam and microphone: ' + err.message);
            });
    };

    return (
        <div className="mock-interview-container">
            <nav className="unique-navbar">
                <ul className="unique-navbar-list">
                    <li className="unique-nav-item active">
                        <a className="unique-nav-link" href="/">Home</a>
                    </li>
                    <li className="unique-nav-item">
                        <a className="unique-nav-link" href="/">Previous Interviews</a>
                    </li>
                    <li className="unique-nav-item disabled">
                        <a className="unique-nav-link" href="/">Progress</a>
                    </li>
                    <li className="unique-nav-item">
                        <a className="unique-nav-link" href="/">How it works?</a>
                    </li>
                </ul>
            </nav>

            <div className="flex-container">
                <div className="left-side">
                    <h2>Job Description</h2>
                    <textarea rows="6" placeholder="Enter job description"></textarea>

                    <h2>Skills</h2>
                    <textarea rows="4" placeholder="Enter your skills"></textarea>
                    
                    <h2>Experience</h2>
                    <textarea rows="4" placeholder="Enter your experience"></textarea>

                    <button type="button" onClick={startInterview} className="enable-media-btn unique-button">
                        Enable Webcam & Microphone
                    </button>
                    
                    <button type="button" className="start-interview-btn unique-button">
                        Start Interview
                    </button>

                    {/* Move the video element below the buttons */}
                    <h2>Video Interview</h2>
                    <video ref={videoRef} width="400" controls autoPlay></video>
                    <div id="errorMsg" className="error-message"></div>
                </div>

                <div className="right-side">
                    <h2>AI: Opti Pro</h2>
                    <img src={aiImage} alt="AI: Opti Pro" className="ai-image" />
                    <textarea className="ai-question-box" value="Ex question: What is diffing?" readOnly />
                </div>
            </div>
        </div>
    );
};

export default ProfessionalMock;
