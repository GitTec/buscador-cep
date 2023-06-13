import { useState } from "react"
import { FiSearch } from 'react-icons/fi';
import "./styles.css";

function App() {

  const [input, setInput] = useState('')

  function handleSearch() {
    alert("VALOR DO INPUT " + input)
  }
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu cep. . . "
          value={input}
          onChange={(e) => {
            setInput(e.target.value)
          }}
        />

        <button className="buttonSeacrh" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF" />
        </button>
      </div>

      <main className="main">
        <h2>CEP: 63360000</h2>

        <span>Rua dos alfeneiros</span>
        <span>Complemento: harry potter</span>
        <span>rua dos bruxos</span>
        <span>Sao Paulo - SP</span>
      </main>
    </div>
  );
}

export default App;
