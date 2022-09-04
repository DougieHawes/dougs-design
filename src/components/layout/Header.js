import { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Header = () => {
  const [menuOpen, toggleMenu] = useState(false);

  return (
    <header className="header">
      <h1 className="title">
        <Link to="/">Doug's Design</Link>
      </h1>
      <div className="menu-container" onClick={() => toggleMenu(!menuOpen)}>
        <div className={`menu-icon ${menuOpen && "menu-icon-open"}`}>
          <div className="menu-bar bar1"></div>
          <div className="menu-bar bar2"></div>
          <div className="menu-bar bar3"></div>
        </div>
        <div className={`menu-body ${menuOpen && "menu-body-open"}`}>
          <h2 className="menu-title">EFFECTS</h2>
          <Link to="/effect1">Effect1</Link>
          <h2 className="menu-title">UTILITIES</h2>
          <Link to="/buttons">Buttons</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
