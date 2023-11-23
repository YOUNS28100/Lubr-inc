import { useState } from "react";
import data from "../data.json";
import son1 from "../assets/audio/1.mp3";
import son2 from "../assets/audio/2.mp3";
import son3 from "../assets/audio/3.mp3";
import son4 from "../assets/audio/4.mp3";
import son5 from "../assets/audio/5.mp3";

export default function AdventCalendar() {
  const [isLined, setIsLined] = useState([]);
  const [incrementValue, setIncrementValue] = useState(0);

  const getRandomSound = () => {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    switch (randomNumber) {
      case 1:
        return new Audio(son1);
      case 2:
        return new Audio(son2);
      case 3:
        return new Audio(son3);
      case 4:
        return new Audio(son4);
      case 5:
        return new Audio(son5);
      default:
        return null;
    }
  };

  const openWindow = (e) => {
    const value = e.target.id;
    const randomSound = getRandomSound();
    if (isLined.includes(value)) {
      setIsLined([...isLined]);
    } else {
      setIsLined([...isLined, value]);
      setIncrementValue(incrementValue + 1);
      if (randomSound) {
        randomSound.play();
      }
    }
  };
  return (
    <div className="intro">
      <div className="compteur">
        On est le {incrementValue}, il est temps douvrir le bon paquet !
      </div>
      <div className="list">
        <ul>
          {data.map((n) => (
            <li
              className={isLined.includes(`lutin_${n.id}`) ? "line" : ""}
              key={n.id}
              onClick={openWindow}
            >
              {n.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="presents">
        {data.map((l) => (
          <div className="book" key={l.id}>
            <button type="button" onClick={openWindow}>
              <img src={l.picture} alt={l.name} id={`lutin_${l.id}`} />
              <div className="cover">
                <p>{l.id}</p>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
