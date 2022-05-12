import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
    return (
        <div className="header">
            <Link exact to="/header" className="href"><h1 className="pane">HOME</h1></Link>
            <Link to="/about-me" className="href"><h1 className="pane">ABOUT ME</h1></Link>
            <Link to="/experience" className="href"><h1 className="pane">EXPERIENCE</h1></Link>
            <Link to="/education" className="href"><h1 className="pane">EDUCATION</h1></Link>
            <Link to="/contact" className="href"><h1 className="pane">CONTACT</h1></Link>
        </div>
    );
}

export default Header;