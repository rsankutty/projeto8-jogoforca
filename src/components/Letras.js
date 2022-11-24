export default function Letras(props) {
  const lettersArr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <div className="bottom">
      <div className="letters">
        {lettersArr.map((item) => (
          <button className={`letter ${props.letraEstado}`} >{item}</button>
        ))}
      </div>
    </div>
  );
}
