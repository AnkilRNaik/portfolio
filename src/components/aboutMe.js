import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header.js';
import '../styles/aboutMe.css';

const aboutMe = () => {
  const message = "Please come back at a later point...I am building something exciting";
  ReactDOM.render(
    <div>
      <Header />
      <p className="aboutMeMsg">{message}</p>
    </div>,
    document.getElementById('root')
  );
}

export default aboutMe;