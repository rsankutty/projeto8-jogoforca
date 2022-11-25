import React from "react";

import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";

function App() {
  const [palavraSorteada, setPalavraSorteada] = React.useState("");
  const [palavra, setPalavra] = React.useState([]);
  const [letraEstado, setLetraEstado] = React.useState("disabled");
  const [arrayResposta, setArrayResposta] = React.useState([]);
  const [letrasClicadas, setLetrasClicadas] = React.useState([]);
  const [contadorErro, setContadorErro] = React.useState(0);
  const [disable, setDisable] = React.useState(true);

  return (
    <main>
      <Jogo
        palavrasArr={palavras}
        palavra={palavra}
        setPalavra={setPalavra}
        setLetraEstado={setLetraEstado}
        setPalavraSorteada={setPalavraSorteada}
        palavraSorteada={palavraSorteada}
        contadorErro = {contadorErro}
        setDisable = {setDisable}
      />
      <Letras
        arrayResposta={arrayResposta}
        letraEstado={letraEstado}
        palavra={palavra}
        setPalavra={setPalavra}
        palavraSorteada={palavraSorteada}
        letrasClicadas={letrasClicadas}
        setLetrasClicadas={setLetrasClicadas}
        setContadorErro={setContadorErro}
        contadorErro = {contadorErro}
        disable ={disable}
        
      />
      <Chute />
    </main>
  );
}

export default App;
