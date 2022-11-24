

export default function Jogo(props) {
  
  function escolhePalavra(array){
    let randomElement = array[Math.floor(Math.random() * array.length)];
    console.log(randomElement)
    let numChar = randomElement.length
    console.log(numChar)
    let palavraArray= Array(numChar).fill('_')
    {props.setPalavra(palavraArray.join(' '))}
    {props.setLetraEstado('')}
  }



  return (
    <div className="top">
      <div className="img-forca">
        <img src="assets/forca0.png"></img>
      </div>
      <div className="top-right">
        <button onClick={()=> escolhePalavra(props.palavrasArr)} className="botao-palavra">Escolher Palavra</button>
        <p>{props.palavra}</p>
      </div>
    </div>
  );
}
