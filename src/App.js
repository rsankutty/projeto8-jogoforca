import React from "react";

import Chute from "./components/Chute";
import Jogo from "./components/Jogo";
import Letras from "./components/Letras";
import palavras from "./palavras";

function App() {
  const [palavra, setPalavra] = React.useState("");
  const [letraEstado, setLetraEstado] = React.useState("disabled");

  return (
    <>
      <main>
        <Jogo
          palavrasArr={palavras}
          palavra={palavra}
          setPalavra={setPalavra}
          setLetraEstado={setLetraEstado}
        />
        <Letras letraEstado={letraEstado}/>
        <Chute />
      </main>
    </>
  );
}

export default App;
