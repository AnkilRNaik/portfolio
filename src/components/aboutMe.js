import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header.js';
import '../styles/aboutMe.css';
import { aboutMeText } from '../content/aboutMe.json';
import img1 from '../images/Reco-1.png';

const aboutMe = () => {
  ReactDOM.render(
    <div>
      <Header />
      <p className="aboutMeMsg">{aboutMeText}</p>
      <img src={img1} className="img"></img>
    </div>,
    document.getElementById('root')
  );
}

export default aboutMe;