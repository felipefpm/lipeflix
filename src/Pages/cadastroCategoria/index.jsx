import React, { useState } from "react";
import { Link } from "react-router-dom";

import FormField from "../../Components/FormField";
import Tempalte from "../../Components/TemplateDefault";

function CadastroCategoria() {
  const [categoria, setCategoria] = useState([]);
  const [nomeCategoria, setNomeCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [cor, setCor] = useState("");

  function save(e) {
    e.preventDefault()

    setDescricao(descricao)
    setCor(cor)
    setCategoria([
      ...categoria, 
      nomeCategoria
    ])
  }

  return (
    <Tempalte>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={save}>
        <FormField 
        placeholder="Nome da Categoria"
        type="text"
        value={nomeCategoria}
        onChange={(e) => setNomeCategoria(e.target.value)}
        />
        
        <FormField 
        placeholder="Descrição"
        type="textarea"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        />

        <FormField 
        type="color"
        value={cor}
        onChange={(e) => setCor(e.target.value)}
        />

        <button>Cadastrar</button>
      </form>

      <ul>
        {categoria.map(categoria => {
          return <li key={categoria}>{categoria}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </Tempalte>
  );
}

export default CadastroCategoria;
