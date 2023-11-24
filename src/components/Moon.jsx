import { useState } from "react";
import ayoub from "../assets/ayoub.png";
import "../styles/moon.css";
import lala from "../assets/audio/lalalalalalalaaaaaa.mp3";
import useSound from "use-sound";

function Moon() {
  const [scope, setScope] = useState(true);
  const [play] = useSound(lala, { volume: 0.1 });

  const handleClick = () => {
    setScope(!scope);
    scope == true ? play() : "";
  };

  return (
    <section className={scope ? "moon" : "visible"}>
      <button onClick={handleClick} type="button">
        <img src={ayoub} alt="Ayoub, el hijo de la luna" />
      </button>
    </section>
  );
}

export default Moon;
