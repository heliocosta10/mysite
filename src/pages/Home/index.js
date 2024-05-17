import React from "react";
import "./styles.css";
import Navbar from "../../components/Navbar";
import My from "../../assets/img/perfil.svg";
import github from "../../assets/img/github.svg";
import Linkdin from "../../assets/img/linkedin.svg";
import { Link } from "react-router-dom";

function AppHome() {
  return (
    <div>
      <Navbar />
      <div className="ContainerHome">
        <div className="titulo">
          <h1>Helio Costa</h1>
          <h3>Desenvolvedor de Software</h3>
          <p>
          Olá, seja bem vindo(a)! Preparado(a) para uma experiēncia
          incrivel? Prazer, sou desenvolvedor Full Stack. Fique a vontade para
          conhecer melhor o meu trabalho.
            {/* Estou atualmente cursando Analise em Desenvolvimento de
            Sistemas para aprimorar minha habilidade técnica.
            Constantemente busco aprimorar minhas habilidades através
            do desenvolvimento de projetos empresarial e pessoais, visando expandir
            meu conhecimento e experiencia. Atuo tambem como
            Full Stack, oferecendo serviços de desenvolvimento Fronte-End
            como no Back-End e Mobile para diversas empresas e clientes. */}
          </p>

            <div className="botoesdiv">
          <Link >
            Baixar CV
          </Link>
          <Link to="/projeto">
            Meus Projetos
          </Link>
        </div>

        </div>

        <div>
          <img id="perfil" src={My} alt="my" />
        </div>
      </div>



      <div className="divictech">
        <a href="https://github.com/heliocosta10" target="_blank">

             <img className="ictech" src={github} alt="mytech" />
        </a>
        <a href="https://br.linkedin.com/in/helioocosta" target="_blank">
             <img className="ictech" src={Linkdin} alt="mytech" />

        </a>
      </div>

    </div>
  );
}


export default AppHome;
