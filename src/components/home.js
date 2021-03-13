import React from 'react';
import '../styles/home.css';
import profileImage from '../images/ankil.jpeg';

const Home = () => {
    const message = "Hello! My name is...Ankil Naik.";
    return (
        <div className="home">
            <img src={profileImage} className="img"></img>
            <p className="msg">{message}</p>
        </div>
    );
}

export default Home;