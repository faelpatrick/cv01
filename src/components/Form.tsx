import React, { useState } from "react";
import "./Form.css";
interface DadosFormulario {
  [key: string]: string;
}

interface FormularioProps {
  onDadosChange: (dados: DadosFormulario) => void;
}

//Componente Formulário
const Formulario: React.FC<FormularioProps> = ({ onDadosChange }) => {
  const [dados, setDados] = useState({
    nome: "Seu Nome Completo",
    email: "seu@email.com",
    nascimento: "00/00/0000",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDados((prevState) => ({ ...dados, [name]: value }));
    onDadosChange(dados);
  };

  return (
    <div className="form-container">
      <form>
        <label>
          Nome: <input type="text" name="nome" value={dados.nome} onChange={handleChange} />
        </label>
        <label>
          Email: <input type="email" name="email" value={dados.email} onChange={handleChange} />
        </label>
        <label>
          Nascimento: <input type="date" name="nascimento" value={dados.nascimento} onChange={handleChange} />
        </label>
      </form>
    </div>
  );
};

//componente de Visualização
const Curriculo: React.FC<{ dados: DadosFormulario }> = ({ dados }) => {
  return (
    <div className="curriculo-container">
      <div className="cv-header">
        <img src="https://via.placeholder.com/100" alt="Logo" className="cv-header-logo" />
        <h1 className="cv-header-name">{dados.nome}</h1>
        <div className="cv-header-dados">
          <p>
            <b>Data de Nascimento: </b> {dados.nascimento}
          </p>
          
          <p>
            <b>| Nascionalidade: </b> {dados.nascimento}
          </p>
          
          <p>
            <b>| Email: </b>
            {dados.email}
          </p>
        </div>
      </div>
    </div>
  );
};

//componente principal
const App: React.FC = () => {
  const [dadosCurriculo, setDadosCurriculo] = useState<DadosFormulario>({
    nome: "",
    email: "",
    nascimento: "",
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="app-container">
      <Formulario onDadosChange={setDadosCurriculo} />
      <Curriculo dados={dadosCurriculo} />
      <button onClick={handlePrint}>Imprimir Currículo</button>
    </div>
  );
};

export default App;
