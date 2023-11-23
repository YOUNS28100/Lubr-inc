import { useEffect, useState } from "react";
import ayoubnormal from "../assets/ayoubnormal.png";
import "../styles/Wakayoub.css";

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
  const handleScore = () => {
    // a verifier
    // voir si on peut vérifier le style visible/invisible par exemple ?
    setScore(score + 1);
  };
  // on lance une boucle selon le timer ou un nombre de points à atteindre / ne pas atteindre (comme -43)
  const elfspawn = () => {
    // while (score < 30 || score >= -15) {
    // le timer aléatoire
    let randomnumber = null;
    randomnumber = Math.floor(Math.random() * 5);
    setTimeout(() => {}, randomnumber);
    let randomnumber2 = null;
    randomnumber2 = Math.floor(Math.random() * 9);
    console.log(randomnumber2);
    setIsGoodId(randomnumber2);
  };
  return (
    <div>
      <button type="button">{score}</button>
      <button type="button" onClick={elfspawn}>
        ON COMMENCE UNE NOUVELLE PARTIE OU TU VAS CODER DES ALGHOS ?
      </button>
      {arrayademimole.map((darthmole) => (
        <button type="button" key={darthmole.value} onClick={handleScore}>
          PROUT
          <img
            src={ayoubnormal}
            alt=""
            className={isGoodId === darthmole.id ? "visible" : "invisible"}
          />
        </button>
      ))}
    </div>
  );
}
export default Wakayoub;

// il faut un score qui s'affiche
// il peut aller en neg ou pos
// cliquer sur un lutin = +1 , cliquer sur un bouton vide = -1
// faire une boucle quand on commence le jeu pour aller jusqu'à un score de 10 pour commencer
// on sort à score +10 ou -3
// quand je click sur un ayoub il doit disparaitre à nouveau (logique, on tape dessus)
