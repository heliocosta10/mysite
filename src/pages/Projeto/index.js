// import logo from './logo.svg';
import React from "react";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import "./styles.css";
import Navbar from "../../components/Navbar";
import foto from "../../assets/img/softwre2.jpeg";

Modal.setAppElement("#root");

function PaginaProjeto() {
  const [dados, setDados] = useState([]);
  const [spinner, setSpinner] = useState("block");
  const [modalIsOpen, setIsOpen] = useState(false);

  // const tr = document.querySelector("tr");

  function getApiGitHub() {
    fetch("https://api.github.com/users/heliocosta10/repos")
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }

        var data = await res.json();
        setDados(data);
        setSpinner("none");
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    getApiGitHub();
  }, []);

  // Modal
  function openModalSS() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Navbar />
      <div className="Container-Projeto">
        <div>
          <h1>Front-End / Mobile / Brack-End</h1>
        </div>
        <div className="dados">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <h2>Projeto</h2>
            <hr />
            <p>
              We maintain that accessibility is a key component of any modern
              web application. As such, we have created this modal in such a way
              that it fulfills the accessibility requirements of the modern web.
              We seek to keep the focus on accessibility while providing a
              functional, capable modal component for general use.
            </p>

            <hr />

            <div id="botaomodal">
              <button onClick={closeModal}>Fechar</button>
            </div>
          </Modal>

          <div class="spinner" style={{ display: `${spinner}` }}></div>

          <table>
            <tr>
              {dados.length
                ? dados.map((item) => (
                    <div>
                      <img src={foto} alt="foto" />
                      <h3>{item.name.toUpperCase()}</h3>
                      <h4>
                        Data Criação:
                        {Intl.DateTimeFormat("pt-BR").format(
                          new Date(item.created_at)
                        )}
                      </h4>
                      <p id="botaodadosmodal" onClick={openModalSS}>
                        Sobre o Projeto
                      </p>
                    </div>
                  ))
                : null}
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PaginaProjeto;
