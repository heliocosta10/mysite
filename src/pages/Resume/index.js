// import logo from './logo.svg';
import React from "react";
import "./styles.css";
import Navbar from "../../components/Navbar";
import fotoskills from "../../assets/img/skills.svg";

function AppHome() {
  return (
    <div>
      <Navbar />
      <div className="Container">
        <div>
          <img id="perfil" src={fotoskills} alt="my" />
        </div>
        <div className="titulo">
          <h1>Helio Costa</h1>
          <h3>Desenvolvedor de Software</h3>
          <p>
            Sou Desenvolvedor a mais de 5 anos como Full Stack, gosto muito de
            trabalhar no Fronte-End como no Back-End e Mobile, sou formado pelo
            IFPB no curso Técnico em Informática na área de Desenvolvimento
            de Softwares, estou cursando Análise e Desenvolvimento de Sistemas
            na Universidade Unicesumar.
          </p>
        </div>
      </div>
    </div>
  );
}


export default AppHome;
