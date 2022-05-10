import React from 'react';
import '../styles/aboutMe.css';
import { aboutMeText } from '../content/aboutMe.json';
import img from '../images/recommendations.png';

function AboutMe() {
  return (
    <div>
      <p className="aboutMeMsg">{aboutMeText}</p>
      <img src={img} className="borderImg" />
      <a href="" target="_blank" className="buttonH"><h3 className="h">Click to see my Resume</h3></a>
    </div>
  );
}

export default AboutMe;