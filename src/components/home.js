import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/header.js';
import '../styles/home.css';
import profileImage from '../images/ankil.jpeg';

const Home = () => {
    const message = "Hello! My name is...Ankil Naik.";
    return ReactDOM.render(
        <div>
          <Header />
          <div className="home">
            <img src={profileImage} className="img"></img>
            <p className="msg">{message}</p>
        </div>
        </div>,
        document.getElementById('root')
      );

}

export default Home;