import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/components/home.js';
import AboutMe from './components/aboutMe.js';
import Experience from './components/experience.js';
import Education from './components/education';
import Header from './components/header.js';
import Contact from './components/contact.js';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="*" element={<Home />} />
        <Route exact path="portfolio/about-me" element={<AboutMe />} />
        <Route exact path="portfolio/experience" element={<Experience />} />
        <Route exact path="portfolio/education" element={<Education />} />
        <Route exact path="portfolio/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;