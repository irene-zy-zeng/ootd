import "./Header.scss";
import {Link} from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {

    const [activePage, setActivePage] = useState('closet');
    const location = useLocation();

    useEffect(() => {
        const extractedItem = (location.pathname.split("/")[1]);
        extractedItem === "" ? setActivePage('closet') : setActivePage(extractedItem);
    }, [location]);

  return (
    <header className="header">
        <nav className="nav">
        <Link to="/"><img className="nav__logo" src={logo} alt="Logo"/></Link>
        <div className="nav__links">
            <Link to="/closet" className={`nav__link ${activePage === 'closet' ? 'nav__link--active' : ''}`}>
                <span className="nav__text">Closet</span>
            </Link>
            <Link to="/outfit" className={`nav__link ${activePage === 'outfit' ? 'nav__link--active' : ''}`}>
                <span className="nav__text">Outfit</span>
            </Link>
        </div>
        </nav>
    </header>
  )
}

export default Header
