import React, { useState, useEffect } from "react";
import "./Form.css";
interface DadosFormulario {
  [key: string]: string;
}
interface FormularioProps {
  onDadosChange: (dados: DadosFormulario) => void;
}

//Componente Formulário
const Formulario: React.FC<FormularioProps> = ({ onDadosChange }) => {
  /**/
  /* Dados salvos di Formulaário */
  const dadosSalvos = JSON.parse(localStorage.getItem("dadosFormulario") || "{}");

  /* Imagem de perfil */
  const [imagemPerfil, setImagemPerfil] = useState(localStorage.getItem("imagemPerfil") || "https://via.placeholder.com/100");

  /* checkbox formulario exibir ocultar */
  const [mostrarDadosPessoais, setMostrarDadosPessoais] = useState(true);
  const [mostrarSobreMim, setMostrarSobreMim] = useState(true);
  const [mostrarEperienciaProfissional, setMostrarEperienciaProfissional] = useState(true);

  const [dados, setDados] = useState({
    nome: dadosSalvos.nome || "Seu Nome Completo",
    imagemPerfil: imagemPerfil || "https://via.placeholder.com/100",
    email: dadosSalvos.email || "seu@email.com",
    tel: dadosSalvos.tel || "(00) 0000-0000",
    imagem: dadosSalvos.imagem || "https://via.placeholder.com/100",
    nascimento: dadosSalvos.nascimento || "00/00/0000",
    sexo: dadosSalvos.sexo,
    nascionalidade: dadosSalvos.nascionalidade || "",
    endereco: dadosSalvos.endereco || "",
    sobremim: dadosSalvos.sobremim || "",
    mostrarFormPessoal: dadosSalvos.mostrarFormPessoal || "checked",
  });

  useEffect(() => {
    localStorage.setItem("dadosFormulario", JSON.stringify(dados));
    onDadosChange(dados);
  }, [dados, onDadosChange]);

  /* Handle para Formulaário */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setDados((prevState) => ({ ...prevState, [name]: value }));

    onDadosChange(dados);
  };
  /* Handle para Imagem de perfil */
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        localStorage.setItem("imagemPerfil", base64String);
        setImagemPerfil(base64String);
        window.location.reload();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCloseMenu = () => {
    const menuForm = document.getElementById("form-container");
    const menu = document.getElementById("menu");
    if (menu) {
      menu?.innerText === "⬅️" ? (menu.innerText = "➡️") : (menu.innerText = "⬅️");
    }

    if (menuForm && menuForm.style.left != "-240px") {
      menuForm.style.left = "-240px";
    } else if (menuForm) {
      menuForm.style.left = "0px";
    }
  };

  return (
    <div id="form-container" className="form-container">
      <form>
        <div id="menu" onClick={() => handleCloseMenu()}>
          ⬅️
        </div>
        <label>
          <h2>Dados Pessoais {mostrarDadosPessoais ? "⬆️" : "⬇️"} </h2>
          <input type="checkbox" name="checkPessoal" id="checkForm" value={dados.mostrarFormPessoal} onChange={() => setMostrarDadosPessoais(!mostrarDadosPessoais)} />
        </label>

        {mostrarDadosPessoais && (
          <div className="form-pessoal">
            <label>
              <input type="file" onChange={handleImageChange} accept="image/*" />
            </label>
            <label>
              Nome: <input type="text" name="nome" value={dados.nome} onChange={handleChange} />
            </label>

            <label>
              E-mail: <input type="email" name="email" value={dados.email} onChange={handleChange} />
            </label>
            <label>
              Telefone: <input type="tel" name="tel" value={dados.tel} onChange={handleChange} />
            </label>
            <label>
              Nascimento: <input type="date" name="nascimento" value={dados.nascimento} onChange={handleChange} />
            </label>
            <label>
              Sexo: <input type="text" name="sexo" value={dados.sexo} onChange={handleChange} />
            </label>
            <label>
              Nascionalidade: <input type="text" name="nascionalidade" value={dados.nascionalidade} onChange={handleChange} />
            </label>
            <label>
              Endereço: <input type="text" name="endereco" value={dados.endereco} onChange={handleChange} />
            </label>
          </div>
        )}
        <div className="form-sobre">
          <label>
            <h2>SOBRE MIM {mostrarSobreMim ? "⬆️" : "⬇️"} </h2>
            <input type="checkbox" name="checkPessoal" id="checkForm" value={dados.mostrarFormPessoal} onChange={() => setMostrarSobreMim(!mostrarSobreMim)} />
          </label>
          {mostrarSobreMim && (
            <textarea id="sobremim" name="sobremim" cols={5} value={dados.sobremim} onChange={handleChange}>
              {dados.sobremim}
            </textarea>
          )}
        </div>

        <label>
          <h2>Experiência Profissional {mostrarEperienciaProfissional ? "⬆️" : "⬇️"} </h2>
          <input type="checkbox" name="checkPessoal" id="checkForm" value={dados.mostrarFormPessoal} onChange={() => setMostrarEperienciaProfissional(!mostrarEperienciaProfissional)} />
        </label>
        <label>
          <h2>Dados Pessoais {mostrarDadosPessoais ? "⬆️" : "⬇️"} </h2>
          <input type="checkbox" name="checkPessoal" id="checkForm" value={dados.mostrarFormPessoal} onChange={() => setMostrarDadosPessoais(!mostrarDadosPessoais)} />
        </label>
        <label>
          <h2>Dados Pessoais {mostrarDadosPessoais ? "⬆️" : "⬇️"} </h2>
          <input type="checkbox" name="checkPessoal" id="checkForm" value={dados.mostrarFormPessoal} onChange={() => setMostrarDadosPessoais(!mostrarDadosPessoais)} />
        </label>
        <label>
          <h2>Dados Pessoais {mostrarDadosPessoais ? "⬆️" : "⬇️"} </h2>
          <input type="checkbox" name="checkPessoal" id="checkForm" value={dados.mostrarFormPessoal} onChange={() => setMostrarDadosPessoais(!mostrarDadosPessoais)} />
        </label>
        <label>
          <h2>Dados Pessoais {mostrarDadosPessoais ? "⬆️" : "⬇️"} </h2>
          <input type="checkbox" name="checkPessoal" id="checkForm" value={dados.mostrarFormPessoal} onChange={() => setMostrarDadosPessoais(!mostrarDadosPessoais)} />
        </label>
      </form>
    </div>
  );
};

//componente de Visualização
const Curriculo: React.FC<{ dados: DadosFormulario }> = ({ dados }) => {
  const [imagemPerfil, setImagemPerfil] = useState<string>("https://via.placeholder.com/100");

  useEffect(() => {
    const imagemPerfilAtual = localStorage.getItem("imagemPerfil");
    if (imagemPerfilAtual) {
      setImagemPerfil(imagemPerfilAtual);
    }
  }, []);

  return (
    <div className="curriculo-container">
      <div className="cv-header">
        <img src={imagemPerfil} alt="Perfil" className="cv-header-logo" />

        <h1 className="cv-header-name">{dados.nome}</h1>
        <div className="cv-header-dados">
          {dados.nascimento && (
            <p>
              <b>Data de Nascimento: </b> {dados.nascimento}
            </p>
          )}
          {dados.nascionalidade && (
            <p>
              <b>| Nascionalidade: </b> {dados.nascionalidade}
            </p>
          )}
          {dados.sexo && (
            <p>
              <b>| Sexo: </b> {dados.sexo}
            </p>
          )}
          {dados.tel && (
            <p>
              <b>| Telefone: </b> {dados.tel}
            </p>
          )}
          {dados.email && (
            <p>
              <b>| E-mail: </b>
              {dados.email}
            </p>
          )}
          {dados.site && (
            <p>
              <b>Site: </b> {dados.site}
            </p>
          )}
          {dados.endereco && (
            <p>
              <b>| Endereço: </b> {dados.endereco}
            </p>
          )}
        </div>
      </div>
      <div className="cv-body">
        <div className="cv-sobremim">
          <h2>SOBRE MIM</h2>
          <p>{dados.sobremim}</p>
        </div>

        <div className="cv-experiencia-profissional">
          <h2>EXPERIÊNCIA PROFISSIONAL</h2>
          <p>{""}</p>
        </div>
        <div className="cv-sobremim">
          <h2>EDUCAÇÃO E FORMAÇÃO</h2>
          <p>{dados.sobremim}</p>
        </div>
        <div className="cv-sobremim">
          <h2>COMPETÊNCIAS LINGUÍSTICAS</h2>
          <p>{dados.sobremim}</p>
        </div>
        <div className="cv-sobremim">
          <h2>COMPETÊNCIAS DIGITAIS</h2>
          <p>{dados.sobremim}</p>
        </div>
        <div className="cv-sobremim">
          <h2>INFORMAÇÕES ADICIONAIS</h2>
          <p>{dados.sobremim}</p>
        </div>
      </div>
    </div>
  );
};

//componente principal
const App: React.FC = () => {
  const [imagemPerfil, setImagemPerfil] = useState<string>(localStorage.getItem("imagemPerfil") || "https://via.placeholder.com/100");

  const [dadosCurriculo, setDadosCurriculo] = useState<DadosFormulario>({
    nome: "",
    email: "",
    nascimento: "",
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="app">
      <div className="app-container">
        <Formulario onDadosChange={setDadosCurriculo} />
        <Curriculo dados={dadosCurriculo} />
      </div>
      <button id="btn-imprimir" onClick={handlePrint}>
        Imprimir Currículo
      </button>
    </div>
  );
};

export default App;
