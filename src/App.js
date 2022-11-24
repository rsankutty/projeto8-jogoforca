import palavras from "./palavras";

function App() {
  return (
    <>
      <main>
        <top>
          <div className="img-forca">
            <img src="assets/forca0.png"></img>
          </div>
          <div className="top-right">
            <button className="chooseWord">Escolher Palavra</button>
            <p>_ _ _ _ _ _ _</p>
          </div>
        </top>
        <bottom>
          <letters>
            <button className="letter">A</button>
            <button className="letter">B</button>
            <button className="letter">C</button>
            <button className="letter">D</button>
            <button className="letter">E</button>
            <button className="letter">F</button>
            <button className="letter">G</button>
            <button className="letter">H</button>
            <button className="letter">I</button>
            <button className="letter">J</button>
            <button className="letter">A</button>
            <button className="letter">B</button>
            <button className="letter">C</button>
            <button className="letter">D</button>
            <button className="letter">E</button>
            <button className="letter">F</button>
            <button className="letter">G</button>
            <button className="letter">H</button>
            <button className="letter">I</button>
            <button className="letter">J</button>
            <button className="letter">E</button>
            <button className="letter">F</button>
            <button className="letter">G</button>
            <button className="letter">H</button>
            <button className="letter">I</button>
            <button className="letter">J</button>
          </letters>
        </bottom>
        <div className="guess">
          <p>Já sei a palavra!</p>
          <input></input>
          <button>Chutar</button>
        </div>
      </main>
    </>
  );
}

export default App;
