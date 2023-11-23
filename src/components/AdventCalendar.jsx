import { useState } from "react";
import data from "../data.json";
import "../styles/adventcalender.css";
import hat from "../assets/hat.png";
import son1 from "../assets/audio/1.mp3";
import son2 from "../assets/audio/2.mp3";
import son3 from "../assets/audio/3.mp3";
import son4 from "../assets/audio/4.mp3";
import son5 from "../assets/audio/5.mp3";

export default function AdventCalendar() {
  const [isLined, setIsLined] = useState([]);
  const today = new Date().getDate(); // Utilise la date actuelle
  const [showAlert, setShowAlert] = useState(false);

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
    // Supposons que l'ID de chaque case est de la forme "lutin_X"
    const id = e.currentTarget.id;
    const numberValue = parseInt(id.replace("lutin_", ""), 10); // Extrait le nombre de l'ID pour coller les numéros de case au jour du mois.

    if (today === numberValue) {
      setShowAlert(false);
      if (!isLined.includes(id)) {
        setIsLined([...isLined, id]);
        const randomSound = getRandomSound();
        if (randomSound) {
          randomSound.play();
        }
      }
    } else {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  };

  return (
    <div className="calendar">
      {showAlert && (
        <div className="custom-alert">
          Oups ! Vous ne pouvez ouvrir que la case du jour actuel !
        </div>
      )}
      <div>
        <ul className="list">
          {data.map((n) => (
            <li
              className={isLined.includes(`lutin_${n.id}`) ? "line" : ""}
              id={`lutin_${n.id}`}
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
          <div
            className={
              isLined.includes(`lutin_${l.id}`) ? "window-clicked" : "window"
            }
            key={l.id}
          >
            <button type="button" onClick={openWindow} id={`lutin_${l.id}`}>
              {isLined.includes(`lutin_${l.id}`) ? (
                <img src={l.picture} alt={l.name} />
              ) : (
                <img src={hat} alt="chapeau lutin" />
              )}
              {isLined.includes(`lutin_${l.id}`) ? (
                <></>
              ) : (
                <div className="cover">
                  <p>{l.id}</p>
                </div>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
