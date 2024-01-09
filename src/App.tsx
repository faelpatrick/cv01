import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Formulario from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gerador de Curriculo Versão 1.0</h1>
      </header>
      <Formulario />
    </div>
  );
}

export default App;
