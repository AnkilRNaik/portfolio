import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
    return (
        <div className="header">
            <Link to="portfolio/home" className="href"><h1 className="pane">HOME</h1></Link>
            <Link to="portfolio/about-me" className="href"><h1 className="pane">ABOUT ME</h1></Link>
            <Link to="portfolio/experience" className="href"><h1 className="pane">EXPERIENCE</h1></Link>
            <Link to="portfolio/education" className="href"><h1 className="pane">EDUCATION</h1></Link>
            <Link to="portfolio/contact" className="href"><h1 className="pane">CONTACT</h1></Link>
        </div>
    );
}

export default Header;