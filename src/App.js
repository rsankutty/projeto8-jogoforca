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
  const [ganhou, setGanhou] = React.useState("");
  const [chute, setChute] = React.useState("");
  const [dataTest, setDataTest] = React.useState("");

  return (
    <main>
      <Jogo
        dataTest={dataTest}
        palavrasArr={palavras}
        palavra={palavra}
        palavraSorteada={palavraSorteada}
        contadorErro={contadorErro}
        ganhou={ganhou}
        setDataTest={setDataTest}
        setPalavra={setPalavra}
        setLetraEstado={setLetraEstado}
        setPalavraSorteada={setPalavraSorteada}
        setDisable={setDisable}
        setLetrasClicadas={setLetrasClicadas}
        setContadorErro={setContadorErro}
        setGanhou={setGanhou}
        setChute={setChute}
      />
      <Letras
        letraEstado={letraEstado}
        palavra={palavra}
        palavraSorteada={palavraSorteada}
        letrasClicadas={letrasClicadas}
        contadorErro={contadorErro}
        disable={disable}
        setLetraEstado={setLetraEstado}
        setPalavra={setPalavra}
        setLetrasClicadas={setLetrasClicadas}
        setContadorErro={setContadorErro}
        setDisable={setDisable}
        setGanhou={setGanhou}
      />
      <Chute
        chute={chute}
        disable={disable}
        palavraSorteada={palavraSorteada}
        setChute={setChute}
        setGanhou={setGanhou}
        setPalavra={setPalavra}
        setLetraEstado={setLetraEstado}
        setDisable={setDisable}
        setContadorErro={setContadorErro}
      />
    </main>
  );
}

export default App;
