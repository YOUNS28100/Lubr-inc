function Wakayoub() {
  // pour le tape taupe
  // on veut créer un compteur de score qui
  // mets -1 si on click sur une div "vide"
  // mets +1 si on click sur un elfe lubrique/ ayoub
  // on mets en place un timer de Xsecondes si possible
  // on lance une boucle selon le timer ou un nombre de points à atteindre / ne pas atteindre (comme -43)
  // Chaque Xsecondes on a 1 DIV dont l'image change pour un ayoub/lutin lubrique
  // si je clique dessus elle redevient "vide" et je gagne +1 donc
  // on ne peut pas depasser les X ayoub à l'écran
  // OU on décide que si on a trop de ayoub > c'est perdu
  // un bouton pour relancer la machine
  // un meilleur score ! (local storage)
  // un ayoub shiny qui rapporte le double de points

  const tapetaupe = () => {
    console.info("remplissez moi");
  };
  return (
    <>
      <div onClick={tapetaupe()}>
        <img src="" alt="" />
      </div>
    </>
  );
}
export default Wakayoub;
