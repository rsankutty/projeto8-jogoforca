
export default function Letras(props) {
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


function clickLetra(key){
  console.log(key)
  props.setLetrasClicadas([...props.letrasClicadas, key])
  if (props.palavraSorteada.includes(key)){
    let indexArr = []
    props.palavraSorteada.map((item,index)=>item==key?indexArr.push(index):'')
    let palavraAux = [...props.palavra]
    indexArr.map(item => palavraAux[item]=key)
    props.setPalavra(palavraAux)
    console.log(palavraAux)
  } else {
    let novoContador = props.contadorErro +1
    props.setContadorErro(novoContador)
  }
}
// console.log(props.arrayResposta)
  return (
    <div className="bottom">
      <div className="letters">
        {alfabeto.map((item) => (
          <button disabled={props.letrasClicadas.includes(item)?true:props.disable} onClick={()=>{clickLetra(item)}} key={item} className={`letter ${props.letraEstado} ${props.letrasClicadas.includes(item)? 'disabled':''}`}>{item.toUpperCase()}</button>
        ))}
      </div>
    </div>
  );
}
