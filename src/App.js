import React from "react";

import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";

function App() {
  const [palavraSorteada, setPalavraSorteada] = React.useState("");
  const [palavra, setPalavra] = React.useState([]);
  const [letraEstado, setLetraEstado] = React.useState("disabled");
  const [letrasClicadas, setLetrasClicadas] = React.useState([]);
  const [contadorErro, setContadorErro] = React.useState(0);
  const [disable, setDisable] = React.useState(true);
  const [endGame, setEndGame] = React.useState(false);
  const [ganhou, setGanhou] = React.useState("");
  const [chute, setChute] = React.useState("");

  return (
    <main>
      <Jogo
        palavrasArr={palavras}
        palavra={palavra}
        palavraSorteada={palavraSorteada}
        contadorErro={contadorErro}
        ganhou={ganhou}
        endGame={endGame}
        setPalavra={setPalavra}
        setLetraEstado={setLetraEstado}
        setPalavraSorteada={setPalavraSorteada}
        setDisable={setDisable}
        setLetrasClicadas={setLetrasClicadas}
        setContadorErro={setContadorErro}
        setEndGame={setEndGame}
        setGanhou={setGanhou}
        setChute={setChute}
      />
      <Letras
        letraEstado={letraEstado}
        setLetraEstado={setLetraEstado}
        palavra={palavra}
        setPalavra={setPalavra}
        palavraSorteada={palavraSorteada}
        letrasClicadas={letrasClicadas}
        setLetrasClicadas={setLetrasClicadas}
        setContadorErro={setContadorErro}
        contadorErro={contadorErro}
        disable={disable}
        setEndGame={setEndGame}
        setDisable={setDisable}
        setGanhou={setGanhou}
      />
      <Chute
        chute={chute}
        setChute={setChute}
        setGanhou={setGanhou}
        palavraSorteada={palavraSorteada}
        setPalavra={setPalavra}
        setLetraEstado={setLetraEstado}
        setDisable={setDisable}
        setEndGame={setEndGame}
        setContadorErro={setContadorErro}
        disable={disable}
      />
    </main>
  );
}

export default App;
