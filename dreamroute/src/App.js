import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../src/pages/Home';
import Profile from '../src/pages/Profile';
import Dashboard from '../src/pages/Dashboard';
import AdminSkillEvaluator from './pages/AdminSkillEvaluator';
import ExamPage from './pages/ExamPage';
import StudentSkillEvaluator from './pages/StudentSkillEvaluator';
import JobRoleRecommendation from './pages/JobRoleRecommendation';
import CareerRoadmap from './pages/CareerRoadmap';
import QuickRevision from './pages/QuickRevision';
import AdminCreateOpportunity from './pages/AdminCreateOpportunity';
import Opportunities from './pages/Opportunities';
import ResumeBuilder from './pages/ResumeBuilder';
import CareerCoach from './pages/CareerCoach';
import InterviewPreparation from './pages/InterviewPreparation';
import About from './components/About';
import CareerRoadmapGraphView from './pages/CareerRoadmapGraphView';
import SignInPage from './pages/SigninPage';
import BlogPage from './pages/BlogPage';
import ResourceLibrary from './pages/ResourceLibrary';
import ResumeBuilder1 from './pages/ResumeBuilder1';
import MockInterviewPage from './pages/MockInterviewPage'
import ProfessionalMock from './pages/ProfessionalMock';
import PortfolioBuilder from './pages/PortfolioBuilder';
import ProfessionalForm from './pages/ProfessionalForm';
import FeedbackList from './pages/FeedbackList';
import Hackerquiz from './pages/Quiz'
import Gamification from './pages/Gamification';
import ScienceTrivia from './pages/ScienceTrivia';
import VocabularyBuilder from './pages/VocabularyBuilder';
import TypingMastery from './pages/TypingMastery';
import Network from './pages/Network';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignInPage />} />
          
          {/* Previously protected routes, now accessible to all */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/admindashboard" element={<Dashboard />} />
          <Route path="/adminskillsadd" element={<AdminSkillEvaluator />} />
          <Route path="/student-skill-evaluator" element={<StudentSkillEvaluator />} />
          <Route path="/exam/:domain" element={<ExamPage />} />
          <Route path="/career-coach" element={<CareerCoach />} />
          <Route path="/interview-prep" element={<InterviewPreparation />} />
          <Route path="/resume-enhancer" element={<ResumeBuilder />} />
          <Route path="/resume-builder" element={<ResumeBuilder1 />} />
          <Route path="/path-finder" element={<CareerRoadmap />} />
          <Route path="/job-matcher" element={<JobRoleRecommendation />} />
          <Route path="/quick-revision" element={<QuickRevision />} />
          <Route path="/adminjobadd" element={<AdminCreateOpportunity />} />
          <Route path="/find-opportunity" element={<Opportunities />} />
          <Route path="/graphview" element={<CareerRoadmapGraphView />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/resource-library" element={<ResourceLibrary />} />
          <Route path="/mock-interview" element={<MockInterviewPage/>} />
          <Route path="/pro-mock-interview" element={<ProfessionalMock/>} />
          <Route path="/portfolio-builder" element={<PortfolioBuilder />} />
          <Route path="/professional-form" element={<ProfessionalForm />} />
          <Route path="/feedback-list" element={<FeedbackList />} />
          <Route path="/hacker-quiz" element={<Hackerquiz />} />
          <Route path="/gamification" element={<Gamification />} />
          <Route path="/science-quiz" element={<ScienceTrivia />} />
          <Route path="/typing-quiz" element={<TypingMastery />} />
          <Route path="/vocab-quiz" element={<VocabularyBuilder />} />
          <Route path="/network" element={<Network />} />
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
