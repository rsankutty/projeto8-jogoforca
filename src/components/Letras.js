export default function Letras() {
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
    <bottom>
      <letters>
        {lettersArr.map((item) => (
          <button className="letter disabled">{item}</button>
        ))}
      </letters>
    </bottom>
  );
}
