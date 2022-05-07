import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header.js';
import '../styles/aboutMe.css';
import { aboutMeText } from '../content/aboutMe.json';
import img from '../images/recommendations.png';

const AboutMe = () => {
  ReactDOM.render(
    <div>
      <Header />
      <p className="aboutMeMsg">{aboutMeText}</p>
      <img src={img} className="borderImg" />
      <a href="" target="_blank" className="buttonH"><h3 className="h">Click to see my Resume</h3></a>
    </div>,
    document.getElementById('root')
  );
}

export default AboutMe;