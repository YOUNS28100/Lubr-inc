import { useState } from "react";
import ayoubdore from "../assets/ayoubdore.png";
import ayoubnormal from "../assets/ayoubnormal.png";

function Wakayoub() {
  // pour le tape taupe
  const [score, setScore] = useState(0);
  const [isElfed, setIsElfed] = useState(true);
  const [isayoubgolden, setIsAyoubGolden] = useState(ayoubdore);
  // pour mettre le score a jour, on sait cibler l'id il faut regarder ensuite si l'image d'ayoub est présente
  const tapetaupe = (event) => {
    console.log(event.target.id);
    event.target.id ? setScore(score + 1) : setScore(score - 1);
  };
  // on créé un tableau de longueur égale au nombre de trous pour les taupes, pour mapper dessus et avoir plus de facilité
  const arraymole = [
    { id: "0", value: "0" },
    { id: "1", value: "1" },
    { id: "2", value: "2" },
    { id: "3", value: "3" },
    { id: "4", value: "4" },
    { id: "5", value: "5" },
    { id: "6", value: "6" },
    { id: "7", value: "7" },
    { id: "8", value: "8" },
  ];
  // fonction aléatoire entre 1 et max
  const randomnumberget = (max) => {
    1 + Math.floor(Math.random() * max);
  };
  // let pour mettre de l'aléatoire dans le timer
  let timesetout = "";
  // on mets en place un timer de Xsecondes
  // on lance une boucle selon le timer ou un nombre de points à atteindre / ne pas atteindre (comme -43)
  const elfspawn = () => {
    while (score < 30 || score >= -15) {
      // le timer aléatoire
      timesetout = randomnumberget(5);
      const timer = setTimeout(() => {}, timesetout);
      //

      //je dois faire apparaitre un ayoub taupe dans une des divs mais au hasard

      // je dois réussir à différencier chaque div
      // ensuite lancer un nombre aléatoire
      // verifier si j'ai un ayoub sur cette div
      // si c'est le cas je relance le numéro aléatoire
      // si c'est bon je mets mon ayoub et je repars de l'étape du timer (boucle donc)

      console.log("non");
    }
  };
  // Chaque Xsecondes on a 1 DIV dont l'image change pour un ayoub/lutin lubrique
  // si je clique dessus elle redevient "vide" et je gagne +1 donc
  // on ne peut pas depasser les X ayoub à l'écran
  // OU on décide que si on a trop de ayoub > c'est perdu
  // un bouton pour relancer la machine
  // un meilleur score ! (local storage)
  // un ayoub shiny qui rapporte le double de points
  // a chaque fois qu'un ayoub apparait il lance une alerte avec un message rigolo comme "termine ton CSS"

  return (
    <>
      {arraymole.map((darthmole) => {
        <button type="button" onClick={tapetaupe()}>
          <img
            src={isElfed ? "ayoubnormal" : ""}
            alt=""
            id={`mole${darthmole.value}`}
            key={darthmole.value}
          />
        </button>;
      })}
    </>
  );
}
export default Wakayoub;
