import { useReducer } from "react";
import "../styles/teapot.css";

import bot from "../assets/basTheiere.png";
import top from "../assets/hautTheiere.png";
import ayoub from "../assets/ayoub.png";
import Confetti from "../components/Confetti";
import useSound from "use-sound";
import sound from "../assets/audio/confetti.mp3";

const init_state = {
  move: "move",
  jump: "",
  rotated: "",
  rotating: "",
};
export default function Teapot() {
  const [play] = useSound(sound, { volume: 0.3 });
  const [state, setState] = useReducer(
    (state, new_state) => ({
      ...state,
      ...new_state,
    }),
    init_state
  );

  const { move, rotating, rotated, jump } = state;

  function animate() {
    let isDone = rotated === "rotated" ? true : false;

    if (!isDone) {
      play();
      setState({ rotating: "rotating" });
      setTimeout(() => {
        setState({ jump: "jump" });
      }, 300);
      setTimeout(() => {
        setState({ rotated: "rotated" });
      }, 1000);
    } else {
      setState(init_state);
    }
    let moving = move === "move" ? "" : "move";
    setState({ move: moving });
  }

  return (
    <div className="teapot">
      <h1>Erreur 418 : Je suis une théière !</h1>
      <Confetti open={jump === "jump"} />
      <div className="img-container">
        <img className={`ayoub ${jump}`} src={ayoub} alt="ayoub" />
        <button className="bot" onClick={animate}>
          <img src={bot} alt="theiere" />
        </button>
        <img
          className={`top ${move} ${rotating} ${rotated}`}
          src={top}
          alt="theiere"
        />
      </div>
    </div>
  );
}
