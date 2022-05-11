import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../src/components/home.js';
import AboutMe from './components/aboutMe.js';
import Experience from './components/experience.js';
import Header from './components/header.js';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;