import React from 'react';
import '../styles/header.css';

const Header = () => {
    return (
        <div className="header">
            <h1 className="pane">HOME</h1>
            <h1 className="pane">ABOUT ME</h1>
            <h1 className="pane">EXPERIENCE</h1>
            <h1 className="pane">EDUCATION</h1>
            <h1 className="pane">CONTACT</h1>
        </div>
    );
}

export default Header;