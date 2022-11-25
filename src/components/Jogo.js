export default function Jogo(props) {
  function escolhePalavra(array) {
    let randomElement = array[Math.floor(Math.random() * array.length)];
    props.setPalavraSorteada(randomElement.split(""));
    let numChar = randomElement.length;
    let palavraArray = Array(numChar).fill("_");
    props.setPalavra(palavraArray);
    props.setLetraEstado("");
    props.setDisable(false)
  }
  
  console.log(props.palavraSorteada);
  console.log(props.palavra);
  let imgString = `assets/forca${props.contadorErro}.png`

  return (
    <div className="top">
      <div className="img-forca">
        <img src={imgString}></img>
      </div>
      <div className="top-right">
        <button
          onClick={() => escolhePalavra(props.palavrasArr)}
          className="botao-palavra"
        >
          Escolher Palavra
        </button>
        <p className={props.ganhou}>{props.palavra.join(' ')}</p>
      </div>
    </div>
  );
}
