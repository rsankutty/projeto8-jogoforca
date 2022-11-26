export default function Jogo(props) {
  const clearState = () => {
    if (props.endGame) {
      window.location.reload();
    } else {
      props.setPalavra([]);
      props.setLetraEstado("disabled");
      props.setPalavraSorteada("");
      props.setDisable(true);
      props.setLetrasClicadas([]);
      props.setContadorErro(0);
      props.setEndGame(false);
      props.setGanhou("");
      props.setChute("");
      props.setDataTest("");
    }
  };

  function escolhePalavra(array) {
    clearState();
    let randomElement = array[Math.floor(Math.random() * array.length)];
    props.setPalavraSorteada(randomElement.split(""));
    let numChar = randomElement.length;
    let palavraArray = Array(numChar).fill("_");
    props.setPalavra(palavraArray);
    props.setLetraEstado("");
    props.setDisable(false);
    console.log(randomElement);
    props.setDataTest(randomElement)
  }

  let imgString = `assets/forca${props.contadorErro}.png`;

  return (
    <div className="top">
      <div className="img-forca">
        <img data-test="game-image" src={imgString} alt=""></img>
      </div>
      <div className="top-right">
        <button
          data-test="choose-word"
          onClick={() => escolhePalavra(props.palavrasArr)}
          className="botao-palavra"
        >
          Escolher Palavra
        </button>
        <p
          data-test="word"
          data-answer={props.dataTest}
          className={props.ganhou}
        >
          {props.palavra.join(" ")}
        </p>
      </div>
    </div>
  );
}
