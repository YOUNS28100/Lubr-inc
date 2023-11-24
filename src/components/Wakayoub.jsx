import { useState } from "react";
import ayoubnormal from "../assets/ayoubnormal.png";
import "../styles/wakawaka.css";

function Wakayoub() {
  // pour le tape taupe
  const [score, setScore] = useState(0);
  const [isGoodId, setIsGoodId] = useState(null);
  const arrayademimole = [
    { id: 0, value: 0 },
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
    { id: 6, value: 6 },
    { id: 7, value: 7 },
    { id: 8, value: 8 },
  ];
  const randomDisplay = () => {
    let randomnumber2 = null;
    randomnumber2 = Math.floor(Math.random() * 9);
    setIsGoodId(randomnumber2);
  };
  const elfspawn = () => {
    //while (score < 30 || score >= -15) {

    // le timer aléatoire
    let randomnumber = null;
    randomnumber = Math.floor(Math.random() * 5);
    setTimeout(() => {
      randomDisplay();
    }, randomnumber * 1000);
  };
  const handleScore = (e) => {
    const id = e.target.id;
    // a verifier
    // voir si on peut vérifier le style visible/invisible par exemple ?
    if (score < 15 || score >= -5) {
      if (id) {
        setScore(score + 1);
        elfspawn();
      } else {
        setScore(score - 1);
        elfspawn();
      }
    } else if (score >= 15) {
      console.log("you win");
    } else console.log("you lose");
  };
  // on lance une boucle selon le timer ou un nombre de points à atteindre / ne pas atteindre (comme -43)

  return (
    <div className="waka">
      <div className="start-game">
        <p>Ton score : {score}</p>
        <button type="button" onClick={elfspawn} className="start-game-button">
          ON COMMENCE UNE NOUVELLE PARTIE OU TU VAS CODER DES ALGHOS ?
        </button>
      </div>
      <div className="game">
        {arrayademimole.map((darthmole) => (
          <button type="button" key={darthmole.value} onClick={handleScore}>
            <img
              src={ayoubnormal}
              alt=""
              className={isGoodId === darthmole.id ? "visible" : "invisible"}
              id={isGoodId === darthmole.id ? darthmole.value : null}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
export default Wakayoub;

// faire une boucle quand on commence le jeu pour aller jusqu'à un score de 10 pour commencer
// on sort à score +10 ou -3
