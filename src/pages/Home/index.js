// import logo from './logo.svg';
import React from "react";
import "./styles.css";
import Navbar from "../../components/Navbar";
import My from "../../assets/img/perfil.svg";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <div className="titulo">
          <h1>Helio Costa</h1>
          <h3>Desenvolvedor de Software</h3>
          <p>
            Sou Desenvolvedor a mais de 5 anos como Full Stack, gosto muito de
            trabalhar no fronte-End como no Back-End e Mobile, sou formado pelo
            IFPB no curso de técnico em Informática na área de Desenvolvimento
            de Softwares, estou cursando Análise e Desenvolvimento de Sistemas
            na Universidade Unicesumar.
          </p>
        </div>
        <div>
          <img id="perfil" src={My} alt="my" />
        </div>
      </div>
    </div>
  );
}

export default App;
