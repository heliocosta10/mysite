import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/img/dev.svg";

function NavBar() {
  return (
    <div className="menu">
      <img src={logo} alt="Logo" />
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/resume">SOBRE</Link>
          </li>
          <li>
            <Link to="/skills">SKILLS</Link>
          </li>
          <li>
            <Link to="/projeto">PROJETOS</Link>
          </li>
          <li>
            {/* <Link to="/contact">CERTIFICADOS</Link> */}
            <Link to="/contact">CONTATO</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
