import useSound from "use-sound";
import { useState } from "react";
import music from "../assets/musique.mp3";
import speaker from "../assets/speaker.png";
import speakerMute from "../assets/speakermute.png";
import "../styles/Music.css";

// datas des son/musiques
const sounds = [music];

function Music() {
  const [isPlaying, setIsPLaying] = useState(false);
  const [random, setRandom] = useState(0);
  const [speakerOn, setSpeakerOn] = useState(false);
  const [play, { stop }] = useSound(sounds[random], { volume: 0.3 });

  //Fonction Randomisation du son/musique lancé
  const generateRandom = () => {
    const random = Math.floor(Math.random() * sounds.length);
    setRandom(random);
  };

  //Fonction play &
  const playMusic = () => {
    setIsPLaying(!isPlaying);
    if (isPlaying === false) {
      generateRandom();
      play();
      setSpeakerOn(!speakerOn);
    } else {
      stop();
      setSpeakerOn(!speakerOn);
    }
  };

  return (
    <div className="container">
      <button
        id="button"
        type="button"
        onClick={() => {
          playMusic();
        }}
      >
        <img src={speakerOn ? speaker : speakerMute} alt="logo speaker" />
      </button>
    </div>
  );
}
export default Music;
