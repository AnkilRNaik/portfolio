import React from 'react';
import '../styles/header.css';
import aboutMe from './aboutMe';
import Home from './home';

const Header = () => {
    return (
        <div className="header">
            <a href="#" className="href" onClick={Home}><h1 className="pane">HOME</h1></a>
            <a href="#" className="href" onClick={aboutMe}><h1 className="pane">ABOUT ME</h1></a>
            <a href="#" className="href"><h1 className="pane">EXPERIENCE</h1></a>
            <a href="#" className="href"><h1 className="pane">EDUCATION</h1></a>
            <a href="#" className="href"><h1 className="pane">CONTACT</h1></a>
        </div>
    );
}

export default Header;