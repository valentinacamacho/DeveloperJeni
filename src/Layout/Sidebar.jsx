import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Layout/StyleSidebar.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Sidebar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <span onClick={toggleMenu}>
        <HiOutlineMenuAlt3 className="menu-toggle" />
      </span>
      <div className={`Navbar-Vertical ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          {/* <li>
            <a><Link to="/Home">Home</Link></a>
          </li> */}
          <li>
            <a><Link to="/Aboutme">Sobre mi</Link></a>
          </li>
          <li>
            <a><Link to="/Services">servicios</Link></a>
          </li>
          <li>
            <a><Link to="/Proyects">Proyectos</Link></a>
          </li>
          <li>
            <a><Link to="/Skills">Habilidades</Link></a>
          </li>
          <li>
            <a><Link to="/Contact">Contactame</Link></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
