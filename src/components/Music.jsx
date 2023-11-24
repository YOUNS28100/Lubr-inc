import useSound from "use-sound";
import { useEffect, useState } from "react";
import music from "../assets/musique.mp3";
import ayoub from "../assets/Lutins/ayoubfamily.gif";
import "../styles/App.css";

// datas des son/musiques
const sounds = [music];

function Music() {
  const [isPlaying, setIsPLaying] = useState(true);
  const [random, setRandom] = useState(0);
  const [speakerOn, setSpeakerOn] = useState(false);
  const [play, { stop }] = useSound(sounds[random], { volume: 0.1 });

  //Fonction Randomisation du son/musique lancé
  const generateRandom = () => {
    const random = Math.floor(Math.random() * sounds.length);
    setRandom(random);
  };

  const playMusic = () => {
    setIsPLaying(!isPlaying);
    if (isPlaying === false) {
      generateRandom();
      play();
      speakerOn ? setSpeakerOn(false) : "";
    } else {
      stop();
      !speakerOn ? setSpeakerOn(true) : "";
    }
  };

  useEffect(() => {
    play();
  }, [play]);

  return (
    <div>
      <button
        className="buttonMusic"
        type="button"
        onClick={() => {
          playMusic();
        }}
      >
        <img className="lutin" src={ayoub} alt="ayoub" />
      </button>
    </div>
  );
}
export default Music;
