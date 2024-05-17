// import logo from './logo.svg';
import React from "react";
import "./styles.css";
import Navbar from "../../components/Navbar";

function PaginaContact() {
  return (
    <div>
      <Navbar />
      <div className="Container-contact">
        <div>
          <h1>E-mail: helioocosta18@gmail.com</h1>
          <a
            href="mailto:helioocosta18@gmail.com"
            style={{ color: "#61dafb", padding: "10px 20px" }}
          >
             E-mail para Contato.
          </a>
        </div>
      </div>
    </div>
  );
}

export default PaginaContact;
