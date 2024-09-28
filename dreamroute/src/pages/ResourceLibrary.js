import React, { useState } from 'react';
import { Dropdown, Button, Card, Row, Col } from 'react-bootstrap';
import '../styles/ResourceLibrary.css'; // Custom CSS for styling

// Import images
import striverImg from '../images/striver.webp';
import apnaCollegeImg from '../images/apnacollegeofficial.webp';
import abdulBariImg from '../images/abdulBari.webp';
import teluskoImg from '../images/telusuko.webp';
import codeHelpImg from '../images/codeHelp.webp';
import freeCodeCampImg from '../images/freeCodeCamp.webp';
import traversyImg from '../images/traversy.webp';
import courseraImg from '../images/coursera.webp';
import topcoderImg from '../images/topcoder.webp';
import netNinjaImg from '../images/netNinja.webp';
import pythonImg from '../images/python.webp';
import javaImg from '../images/java.webp';
import gateImg from '../images/gate.webp';
import codesignalImg from '../images/codesignal.webp';
import futureImg from '../images/future.webp';
import scalerImg from '../images/scaler.webp';
import brocodeImg from '../images/brocode.webp';
import academindImg from '../images/academind.webp';
import dbmsImg from '../images/dbms.webp';
import webImg from '../images/web.webp';
import hackerRankImg from '../images/hackerrank.webp'; 
import leetcodeImg from '../images/leetcode.webp'; 
import harryImg from '../images/harry.webp';
import geeksImg from '../images/geeks.webp';
import compImg from '../images/comp.webp';
import nesoImg from '../images/neso.webp';
import udemyImg from '../images/udemy.webp';
import java1Img from '../images/java1.webp';
import w3schoolsImg from '../images/w3schools.webp';
import techwithtemImg from '../images/techwithtem.webp';
import codechefImg from '../images/codechef.webp'
import knowImg from '../images/know.webp';
import osImg from '../images/os.webp';
import codeImg from '../images/code.webp';
import proImg from '../images/pro.webp';
import guruImg from '../images/guru.webp';
import khanImg from '../images/khan.webp';
import studyImg from '../images/study.webp';
import dwideviImg from '../images/dwidevi.webp';
import henryImg from '../images/henry.webp';
import edxImg from '../images/edx.webp';
import mitImg from '../images/mit.webp';
import os1Img from '../images/os1.webp';
import os2Img from '../images/os2.webp';
import visualgoImg from '../images/visualgo.webp';
import princeImg from '../images/prince.webp';
import tutorialsImg from '../images/tutorials.webp';
import programwithmoshImg from '../images/programwithmosh.webp';
import certificationImg from '../images/certification.webp'; // Add a certification image

// Sample data for resources
const resources = {
  youtube: {
    dsa: [
      { title: 'DSA by Striver', description: 'Comprehensive DSA tutorial by Striver.', image: striverImg, link: 'https://youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&si=HocgNVhLVIUC192U' },
      { title: 'DSA by Apna College', description: 'Learn DSA with Apna College.', image: apnaCollegeImg, link: 'https://youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&si=5LTwvdgGSbcNFvyz' },
      { title: 'DSA by Abdul Bari', description: 'DSA made easy by Abdul Bari.', image: abdulBariImg, link: 'https://youtube.com/playlist?list=PLAXnLdrLnQpRcveZTtD644gM9uzYqJCwr&si=VYtJmvLPt_uYiy9h' },
      { title: 'DSA by Telusko', description: 'Master DSA with Telusko.', image: teluskoImg, link: 'https://www.youtube.com/telusko' },
      { title: 'DSA by CodeHelp', description: 'CodeHelp DSA tutorial.', image: codeHelpImg, link: 'https://www.youtube.com/channel/UCldyi11QYNXYXiLjVbyw5dA' },
      { title: 'DSA by Harry', description: 'Code with Harry DSA.', image: harryImg, link: 'https://www.codewithharry.com/videos/data-structures-and-algorithms-in-hindi-1/' }
    ],
    OperatingSystem: [
      { title: 'OS by Neso', description: 'OS by Neso Academy.', image: nesoImg, link: 'https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O' },
      { title: 'OS by computerphile', description: 'Learn OS with computerphile.', image: compImg, link: 'https://youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&si=5LTwvdgGSbcNFvyz' },
      { title: 'OS by freecodecamp', description: 'OS by freecodecamp.', image: freeCodeCampImg, link: 'https://www.youtube.com/watch?v=yK1uBHPdp30' },
      { title: 'OS by KnowledgebyGate', description: 'OS by KnowledgebyGate.', image: knowImg, link: 'https://www.youtube.com/watch?v=xw_OuOhjauw&list=PLmXKhU9FNesSFvj6gASuWmQd23Ul5omtD' },
      { title: 'OS by Gate Smashers', description: 'OS-GateSmashers.', image: osImg, link: 'https://www.youtube.com/watch?v=bkSWJJZNgf8&list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p' },
    ],
    DataBases: [
      { title: 'DBMS by Neso', description: 'Dbms by Neso Academy.', image: nesoImg, link: 'https://www.youtube.com/watch?v=6Iu45VZGQDk&list=PLBlnK6fEyqRi_CUQ-FXxgzKQ1dwr_ZJWZ' },
      { title: 'DBMS by Gate Smashers', description: 'DBMS-GateSmashers.', image: osImg, link: 'https://www.youtube.com/watch?v=kBdlM6hNDAE&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y' },
      { title: 'DBMS by KnowledgebyGate', description: 'DBMS by KnowledgebyGate.', image: knowImg, link: 'https://www.youtube.com/watch?v=YRnjGeQbsHQ&list=PLmXKhU9FNesR1rSES7oLdJaNFgmuj0SYV' },
    ],
    
    Java: [
      { title: 'Java by Apna College', description: 'Learn Java with Apna College.', image: apnaCollegeImg, link: 'https://www.youtube.com/watch?v=yRpLlJmRo2w&list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop' },
      { title: 'Java by Telusko', description: 'Master Java with Telusko.', image: teluskoImg, link: 'https://www.youtube.com/watch?v=bm0OyhwFDuY&list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5' },
      { title: 'Java by Neso', description: 'Java by Neso Academy.', image: nesoImg, link: 'https://www.youtube.com/watch?v=VHbSopMyc4M&list=PLBlnK6fEyqRjKA_NuK9mHmlk0dZzuP1P5' },
      { title: 'Java by Harry', description: 'Code with Harry Java.', image: harryImg, link: 'https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q' },
      { title: 'Java by BroCode', description: 'Code with BroCode.', image: brocodeImg, link: 'https://www.youtube.com/watch?v=NBIUbTddde4&list=PLZPZq0r_RZOMhCAyywfnYLlrjiVOkdAI1' }
    ],
    Python: [
      { title: 'Python by Telusko', description: 'Master Python with Telusko.', image: teluskoImg, link: 'https://www.youtube.com/watch?v=QXeEoD0pB3E&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3' },
      { title: 'Python by Harry', description: 'Code with Harry Python.', image: harryImg, link: 'https://www.youtube.com/watch?v=7wnove7K-ZQ&list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg' },
      { title: 'Python by Apna College', description: 'Learn Python with Apna College.', image: apnaCollegeImg, link: 'https://www.youtube.com/watch?v=ERCMXc8x7mc' },
      { title: 'Python ', description: 'Master Python with Programming with Mosh.', image: programwithmoshImg, link: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc' },
    ],
    webDevelopment: [
      { title: 'Web Development by FreeCodeCamp', description: 'Complete web development tutorial.', image: freeCodeCampImg, link: 'https://www.youtube.com/freecodecamp' },
      { title: 'Web Development by Traversy Media', description: 'Modern web development by Traversy Media.', image: traversyImg, link: 'https://www.youtube.com/traversymedia' },
      { title: 'Web Development by Net Ninja', description: 'Web development tutorials by Net Ninja.', image: netNinjaImg, link: 'https://www.youtube.com/thenetninja' },
      { title: 'Web Development by w3schools', description: 'Web development by w3schools.', image: w3schoolsImg, link: 'https://www.w3schools.com/' },
      { title: 'Web Development by techwithtem', description: 'Web development by techwithtem.', image: techwithtemImg, link: 'https://www.youtube.com/c/TechWithTim' },
      { title: 'web development' , description: 'WebDevelopment tutorials by academind.', image: academindImg, link: 'https://academind.com/tutorials/web-development-roadmap-2024https://www.youtube.com/academind'}
    ],
    SoftSkills: [
      { title: 'SoftSkills by Tutorialspoint', description: 'SoftSkills.', image: tutorialsImg, link: 'https://www.youtube.com/watch?v=ADJAcyTq1us&list=PLWPirh4EWFpFIElSxplDlEhRDZHkBD-0n' },

    ],
    CreativeWriting: [
      { title: 'CreativeWriting', description: 'CreativeWriting by HenryHarvin.', image: henryImg, link: 'https://www.youtube.com/watch?v=gZKx6ZWEjIg&list=PL28eq_nhJTOc1hnhMocQslC8vZPz5_zwa' },
    ],
    Enterpreneurship: [
      { title: 'Enterpreneurship by Tutorialspoint', description: 'Enterpreneurship.', image: tutorialsImg, link: 'https://www.youtube.com/watch?v=vuS_3YrkHB0&list=PLWPirh4EWFpFdjXD-sMiUb_Pf9LiIlhGI' },
      { title: 'Enterpreneurship by Dwidevi', description: 'Enterpreneurship.', image: dwideviImg, link: 'https://www.youtube.com/watch?v=rA4uKIy5gO0&list=PLsh2FvSr3n7fQlIDbfKutmSL26TsWitGQ' },
    ],
  },
  tutorials: {
    python: [
      { title: 'GeeksforGeeks', description: 'Tutorials on Python.', image: geeksImg, link: 'https://www.geeksforgeeks.org/python-programming-language/' },
      { title: 'TutorialsPoint', description: 'Tutorials on Python.', image: tutorialsImg, link: 'https://www.tutorialspoint.com/python/index.htm' },
      { title: 'W3Schools', description: 'Tutorials on Python.', image: w3schoolsImg, link: 'https://www.w3schools.com/python/' },
      { title: 'Real Python', description: 'Tutorials on Python.', image: pythonImg, link: 'https://realpython.com/' },
      { title: 'Programiz', description: 'Tutorials on Python.', image: proImg, link: 'https://www.programiz.com/python-programming' },
      { title: 'The Python Tutorial', description: 'Tutorials on Python.', image: pythonImg, link: 'https://docs.python.org/3/tutorial/index.html' },
    ],
    DSA: [
      { title: 'Geeks for Geeks', description: 'Tutorials on various DS and algorithms.', image: geeksImg, link: 'https://www.geeksforgeeks.org/data-structures/'},
      { title: 'TutorialsPoint', description: 'Tutorials on various DS and algorithms.', image: tutorialsImg, link: 'https://www.tutorialspoint.com/data_structures_algorithms/index.htm'},
      { title: 'Java Tpoint', description: 'Tutorials on various DS and algorithms.', image: javaImg, link: 'https://www.javatpoint.com/data-structure-tutoria'},
      { title: 'CodeChef', description: 'Tutorials on various DS and algorithms.', image: codechefImg, link: 'https://www.codechef.com/certification/data-structures-and-algorithms/prepare'},
      { title: 'Coursera', description: 'Tutorials on various DS and algorithms.', image: courseraImg, link: 'https://www.coursera.org/specializations/data-structures-algorithms'},
      { title: 'TopCoder', description: 'Tutorials on various DS and algorithms.', image: topcoderImg, link: 'https://www.topcoder.com/community/data-science/data-science-tutorials/data-structures'},
    ],
    Java: [
      { title: 'GeeksforGeeks', description: 'Tutorials on Java.', image: geeksImg, link: 'https://www.geeksforgeeks.org/java/'},
      { title: 'TutorialsPoint', description: 'Tutorials on Java.', image: tutorialsImg, link: 'https://www.tutorialspoint.com/java/index.htm'},
      { title: 'JavaTpoint', description: 'Tutorials on Java.', image: javaImg, link: 'https://www.javatpoint.com/java-tutorial'},
      { title: 'W3Schools', description: 'Tutorials on Java.', image: w3schoolsImg, link: 'https://www.w3schools.com/java/'},
      { title: 'Programiz', description: 'Tutorials on Java.', image: proImg, link: 'https://www.programiz.com/java-programming'},
      { title: 'Java Beginners Tutorial', description: 'Tutorials on Java.', image: java1Img, link: 'https://beginnersbook.com/java-tutorial-for-beginners-with-examples/'},
    ],
    OperatingSystem: [
      { title: 'GeeksforGeeks', description: 'Tutorials on OperatingSystem.', image: geeksImg, link: 'https://www.geeksforgeeks.org/operating-systems/'},
      { title: 'TutorialsPoint', description: 'Tutorials on OperatingSystem.', image: tutorialsImg, link: 'https://www.tutorialspoint.com/operating_system/index.htm'},
      { title: 'Studytonight', description: 'Tutorials on OperatingSystem.', image: studyImg, link: 'https://www.studytonight.com/operating-system/'},
      { title: 'JavaTpoint', description: 'Tutorials on OperatingSystem.', image: javaImg, link: 'https://www.javatpoint.com/os-tutorial'},
      { title: 'Gate Vidyalay', description: 'Tutorials on OperatingSystem.', image:gateImg, link: 'https://www.gatevidyalay.com/operating-system/'},
      { title: 'Scaler Topics', description: 'Tutorials on OperatingSystem.', image: scalerImg, link: 'https://www.scaler.com/topics/operating-system/'},
    ],
    DataBases: [
      { title: 'GeeksforGeeks', description: 'Tutorials on DataBases.', image: geeksImg, link: 'https://www.geeksforgeeks.org/dbms/'},
      { title: 'TutorialsPoint', description: 'Tutorials on DataBases.', image: tutorialsImg, link: 'https://www.tutorialspoint.com/dbms/index.htm'},
      { title: 'JavaTpoint', description: 'Tutorials on DataBases.', image: javaImg, link: 'https://www.javatpoint.com/dbms-tutorial'},
      { title: 'Studytonight', description: 'Tutorials on DataBases.', image: studyImg, link: 'https://www.studytonight.com/dbms/'},
      { title: 'Khan Academy', description: 'Tutorials on DataBases.', image: khanImg, link: 'https://www.khanacademy.org/computing/computer-programming/sql'},
      { title: 'Guru99', description: 'Tutorials on DataBases.', image: guruImg, link: 'https://www.guru99.com/sql.html'},
    ],
    WebDevelopment: [
      { title: 'freeCodeCamp', description: 'Tutorials on Webdevelopment.', image: freeCodeCampImg, link: 'https://www.freecodecamp.org/learn/responsive-web-design/'},
      { title: 'W3Schools', description: 'Tutorials on Webdevelopment.', image: w3schoolsImg, link: 'https://www.w3schools.com/whatis/'},
      { title: 'JavaTpoint', description: 'Tutorials on Webdevelopment.', image: javaImg, link: 'https://www.javatpoint.com/web-development-tutorial'},
      { title: 'Coursera', description: 'Tutorials on Webdevelopment.', image: courseraImg, link: 'https://www.coursera.org/specializations/web-design'},
    ],
    SoftSkills: [
      { title: 'Coursera', description: 'Tutorials on SoftSkills.', image: courseraImg, link: 'https://www.coursera.org/specializations/career-success'},
      { title: 'edX', description: 'Tutorials on SoftSkills.', image: edxImg, link: 'https://www.edx.org/course/essential-soft-skills-for-career-development'},
      { title: 'FutureLearn', description: 'Tutorials on SoftSkills.', image: futureImg, link: 'https://www.futurelearn.com/subjects/business-and-management-courses/soft-skills'},
    ],
    CreativeWriting: [
      { title: 'Coursera', description: 'Tutorials on CreativeWriting.', image: courseraImg, link: 'https://www.coursera.org/specializations/creative-writing'},
      { title: 'edX', description: 'Tutorials on CreativeWriting.', image: edxImg, link: 'https://www.edx.org/course/how-to-write-a-novel-writing-the-draft'},
      { title: 'FutureLearn', description: 'Tutorials on CreativeWriting.', image: futureImg, link: 'https://www.futurelearn.com/courses/start-writing-fiction'},
    ],
    Enterpreneurship: [
      { title: 'Coursera', description: 'Tutorials on EnterpreneurShip.', image: courseraImg, link: 'https://www.coursera.org/specializations/wharton-entrepreneurship'},
      { title: 'edX', description: 'Tutorials on EnterpreneurShip.', image: edxImg, link: 'https://www.edx.org/course/becoming-an-entrepreneur'},
      { title: 'FutureLearn', description: 'Tutorials on EnterpreneurShip.', image: futureImg, link: 'https://www.futurelearn.com/courses/digital-marketing-for-business'},
      { title: 'Udemy', description: 'Tutorials on EnterpreneurShip.', image: udemyImg, link: 'https://www.udemy.com/course/how-to-start-a-business/'},
    ],
    
    
  },
  documents: {
    DataBases: [
      { title: 'Database Management', description: 'Document of DB by DMIT OpenCourseWare.', image: mitImg, link: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-830-database-systems-fall-2010/lecture-notes/' },
      { title: 'Database Management', description: 'Database System Concepts.', image: dbmsImg, link: 'https://codex.cs.yale.edu/avi/db-book/slides-dir/index.html' },
    ],
    dsa: [
      { title: 'DSA', description: 'Document of DSA by VisuAlgo.', image: visualgoImg, link: 'https://visualgo.net/en' },
      { title: 'DSA', description: 'Document of DSA by MIT OpenCourseWare.', image: mitImg, link: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-notes/' },
      { title: 'DSA', description: 'Document of DSA by Princeton University.', image: princeImg, link: 'https://algs4.cs.princeton.edu/home/' },
    ],
    WebDevelopment: [
      { title: 'WD', description: 'Document of WebDevelopment.', image: w3schoolsImg, link: 'https://www.w3schools.com/css/' },
      { title: 'WD', description: 'Document of WebDevelopment.', image: webImg, link: 'https://developers.google.com/web/fundamentals/design-and-ux/responsive' },
    ],
    Python: [
      { title: 'Python', description: 'Document of Official Python.', image: pythonImg, link: 'https://docs.python.org/3/' },
      { title: 'Python', description: 'Document of Python.', image: pythonImg, link: 'https://realpython.com/' },
    ],
    java: [
      { title: 'Java', description: 'Document of Java.', image: javaImg, link: 'http://math.hws.edu/javanotes/' },
      { title: 'Java', description: 'Document of Java.', image: javaImg, link: 'https://cheatography.com/davechild/cheat-sheets/java/' },
    ],
    OperatingSystem: [
      { title: 'OS', description: 'Document of OS by ThreePecies of OS.', image: os1Img, link: 'https://pages.cs.wisc.edu/~remzi/OSTEP/' },
      { title: 'OS', description: 'Document of OS by Operating System Concepts.', image: os2Img, link: 'http://codex.cs.yale.edu/avi/os-book/OS9/slide-dir/' },
      
    ],
    
  },
  practice: [
    { title: 'HackerRank', description: 'Practice coding problems on HackerRank.', image: hackerRankImg, link: 'https://www.hackerrank.com' },
    { title: 'LeetCode', description: 'Solve coding challenges on LeetCode.', image: leetcodeImg, link: 'https://leetcode.com' },
    { title: 'CodeChef', description: 'Solve coding challenges on codechef.', image: codeImg, link: 'https://www.codechef.com/' },
    { title: 'CodeSignal', description: 'Solve coding challenges on CodeSignal.', image: codesignalImg, link: 'https://codesignal.com/' }
  ],
  certifications: [  // New certifications section
    { title: 'Coursera', description: 'Get certified in Coursera in various subjects.', image: certificationImg, link: 'https://www.coursera.org/professional-certificates' },
    { title: 'edX', description: 'Become a certified by edX in various subjects.', image: certificationImg, link: 'https://www.edx.org/' },
    { title: 'LinkedIn Learning', description: 'Get certified in Linkedin in various subjects.', image: certificationImg, link: 'https://www.linkedin.com/learning/' },
    // Add other certification resources here...
  ],
};

const ResourceLibrary = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  const handleDropdownClick = (category, subCategory) => {
    setActiveCategory(category);
    setActiveSubCategory(subCategory);
  };

  return (
    <div className="resource-library">
    <h1 className="library-heading">Resource Library</h1>
    <div className="resource-buttons">
        <Dropdown>
          <Dropdown.Toggle variant="primary">YouTube</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleDropdownClick('youtube', 'dsa')}>DSA</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('youtube', 'OperatingSystem')}>OperatingSystem</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('youtube', 'DataBases')}>DataBases</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('youtube', 'Java')}>Java</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('youtube', 'Python')}>Python</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('youtube', 'webDevelopment')}>Web Development</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('youtube', 'SoftSkills')}>SoftSkills</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('youtube', 'CreativeWriting')}>Creative Writing</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('youtube', 'Enterpreneurship')}>Enterpreneurship</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="primary">Tutorials</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleDropdownClick('tutorials', 'DSA')}>DSA</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('tutorials', 'OperatingSystem')}>OperatingSystem</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('tutorials', 'DataBases')}>DataBases</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('tutorials', 'Java')}>Java</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('tutorials', 'python')}>Python</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('tutorials', 'WebDevelopment')}>WebDevelopment</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('tutorials', 'SoftSkills')}>SoftSkills</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('tutorials', 'CreativeWriting')}>Creative Writing</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('tutorials', 'Enterpreneurship')}>Enterpreneurship</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="primary">Documents</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleDropdownClick('documents', 'dsa')}>DSA</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('documents', 'OperatingSystem')}>OperatingSystem</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('documents', 'DataBases')}>DataBases</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('documents', 'java')}>Java</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('documents', 'Python')}>Python</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDropdownClick('documents', 'WebDevelopment')}>WebDevelopment</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="primary">Practice</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleDropdownClick('practice')}>Practice Platforms</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="primary">Certifications</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleDropdownClick('certifications')}>Certifications</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="resource-cards">
    {/* Display resources based on active category and subcategory */}
    {activeCategory && activeSubCategory && (
      <Row>
        {resources[activeCategory][activeSubCategory].map((resource, index) => (
          <Col key={index} md={4}> {/* 3 cards per row */}
            <Card className="resource-card">
              <Card.Img variant="top" src={resource.image} alt={resource.title} />
              <Card.Body>
                <Card.Title>{resource.title}</Card.Title>
                <Card.Text>{resource.description}</Card.Text>
                <Button variant="primary" href={resource.link} target="_blank">
                  Learn
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    )}
    {activeCategory === 'practice' && (
      <Row>
        {resources.practice.map((platform, index) => (
          <Col key={index} md={4}> {/* 3 cards per row */}
            <Card className="resource-card">
              <Row>
                <Col md={4}>
                  <Card.Img variant="top" src={platform.image} alt={platform.title} />
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>{platform.title}</Card.Title>
                    <Card.Text>{platform.description}</Card.Text>
                    <Button variant="primary" href={platform.link} target="_blank">
                      Go
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    )}
    {activeCategory === 'certifications' && (
      <Row>
        {resources.certifications.map((certification, index) => (
          <Col key={index} md={4}> {/* 3 cards per row */}
            <Card className="resource-card">
              <Card.Img variant="top" src={certification.image} alt={certification.title} />
              <Card.Body>
                <Card.Title>{certification.title}</Card.Title>
                <Card.Text>{certification.description}</Card.Text>
                <Button variant="primary" href={certification.link} target="_blank">
                  Enroll
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    )}
  </div>
</div>
  );
};

export default ResourceLibrary;
