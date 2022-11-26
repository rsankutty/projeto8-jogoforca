export default function Chute(props) {
  function chuteInput(chute, arrPalavra) {
    let palavra = arrPalavra.join("");
    console.log(palavra);
    if (palavra == chute) {
      props.setGanhou("ganhou");
      props.setPalavra(props.palavraSorteada);
      props.setLetraEstado("disabled");
      props.setDisable(true);
      props.setEndGame(true);
      props.setChute("");
    } else {
      props.setGanhou("perdeu");
      props.setEndGame(true);
      props.setDisable(true);
      props.setPalavra(props.palavraSorteada);
      props.setLetraEstado("disabled");
      props.setChute("");
      props.setContadorErro(6);
    }
  }

  return (
    <div className="guess">
      <p>Já sei a palavra!</p>
      <input
        data-test="guess-input"
        disabled={props.disable}
        type="text"
        value={props.chute}
        onChange={(e) => props.setChute(e.target.value)}
      ></input>
      <button
        data-test="guess-button"
        disabled={props.disable}
        onClick={() => chuteInput(props.chute, props.palavraSorteada)}
      >
        Chutar
      </button>
    </div>
  );
}
