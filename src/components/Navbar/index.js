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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/resume">Sobre</Link>
          </li>
          <li>
            <Link to="/projeto">Projeto</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
