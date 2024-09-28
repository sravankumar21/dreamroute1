import React, { useRef } from 'react';
import '../styles/MockInterviewPage.css';
import aiimage from '../images/futuristic-robot-listening-music-headphones.jpg';

const InterviewPage = () => {
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
                    <textarea rows="4" placeholder="Enter skills you are expertise in "></textarea>

                    <button 
        type="button" 
        onClick={startInterview} 
        className="enable-media-btn unique-button">
        Enable Webcam & Microphone
    </button>
                    <button type="button" onClick={startInterview}  className="start-interview-btn unique-button">
                        Start Interview
                    </button>

                    <video ref={videoRef} width="400" controls autoPlay className="video-interview"></video>
                    <div id="errorMsg" className="error-message"></div>
                </div>

                <div className="right-side">
                    <h2>AI: Opti</h2>
                    <img src={aiimage} alt="AI" className="ai-image" />
                    <textarea className="ai-question-box" value="Ex question: What are the key responsibilities of a Data Scientist?" readOnly />
                </div>
            </div>
        </div>
    );
};

export default InterviewPage;
