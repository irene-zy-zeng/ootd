import "./Header.scss";
import {Link} from "react-router-dom";
import logo from "../../assets/logo/logo.svg";

const Header = () => {
  return (
    <header className="header">
        <Link to="/"><img className="header__logo" src={logo} alt="Logo"/></Link>
        <nav className="header__nav">
            <span>Closet</span>
            <span>Outfit</span>
        </nav>
      
    </header>
  )
}

export default Header
