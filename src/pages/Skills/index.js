// import logo from './logo.svg';
import React from "react";
import "./styles.css";
import Navbar from "../../components/Navbar";
import html from "../../assets/ic-liguagens/html5 1.svg";
import css from "../../assets/ic-liguagens/css-3 1.svg";
import js from "../../assets/ic-liguagens/js 1.svg";
import ts from "../../assets/ic-liguagens/cmais.svg";

import Reactjs from "../../assets/ic-liguagens/reactjs.svg";
import React_nr from "../../assets/ic-liguagens/react-native.svg";
import bootstrap from "../../assets/ic-liguagens/bootstrap 1.svg";

import nodejs from "../../assets/ic-liguagens/nodejs 1.svg";
import php from "../../assets/ic-liguagens/php 1.svg";
import java from "../../assets/ic-liguagens/java 1.svg";
import tCmais from "../../assets/ic-liguagens/cmais.svg";

function PaginaSobre() {
  return (
    <div>
      <Navbar />
      <div className="Container-Sobre">
        <div className="titulo">
          <h1>HARD SKILLS</h1>
        </div>

        <div className="hardskill">
          <div>
            <div className="cards">
              <img src={html} alt="html" />
              <h5>HTML5</h5>
            </div>
            <div className="cards">
              <img src={css} alt="html" />
              <h5>CSS</h5>
            </div>
            <div className="cards">
              <img src={js} alt="html" />
              <h5>JAVASCRIPT</h5>
            </div>
            <div className="cards">
              <img src={ts} alt="html" />
              <h5>TYPESCRIPT</h5>
            </div>
          </div>

          <div>
            <div className="cards">
              <img src={Reactjs} alt="React" />
              <h5>REACT</h5>
            </div>
            <div className="cards">
              <img src={React_nr} alt="Rn" />
              <h5>REACT NATIVE</h5>
            </div>
            <div className="cards">
              <img src={bootstrap} alt="BOOTSTRAP" />
              <h5>BOOTSTRAP</h5>
            </div>
          </div>

          <div>
            <div className="cards">
              <img src={nodejs} alt="Nodejs" />
              <h5>NODEJS</h5>
            </div>
            <div className="cards">
              <img src={php} alt="php" />
              <h5>PHP</h5>
            </div>
            <div className="cards">
              <img src={java} alt="java" />
              <h5>JAVA</h5>
            </div>
            <div className="cards">
              <img src={tCmais} alt="tCmais" />
              <h5>C</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaSobre;
