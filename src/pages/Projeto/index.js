// import logo from './logo.svg';
import "./styles.css";
import Navbar from '../../components/Navbar';


function Projeto() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <p>Projeto de Portfolio - MySite Projetos</p>
        <Navbar />

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default Projeto;