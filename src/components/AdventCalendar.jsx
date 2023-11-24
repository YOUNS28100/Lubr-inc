import { useState } from "react";
//import { toast } from "react-toastify/dist/components";
import data from "../data.json";
import "../styles/adventcalender.css";
import son1 from "../assets/audio/1.mp3";
import son2 from "../assets/audio/2.mp3";
import son3 from "../assets/audio/3.mp3";
import son4 from "../assets/audio/4.mp3";
import son5 from "../assets/audio/5.mp3";

export default function AdventCalendar() {
  const [isLined, setIsLined] = useState([]);
  // const today = new Date().getDate(); // Fonction prenant la date du jour.
  const [count, setCount] = useState(1);
  //const noOpen = () => {};
  //const [couldOpen, setCouldOpen] = useState(noOpen);

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
    const numberValue = parseInt(value.slice(6), 10);
    const randomSound = getRandomSound();
    if (count === numberValue) {
      if (isLined.includes(value)) {
        setIsLined([...isLined]);
      } else {
        setIsLined([...isLined, value]);
        setCount(count + 1);
        if (randomSound) {
          randomSound.play();
        }
      }
    } else {
      // toast.error(`Qui ? Qui ? MAIS QUIIIIII ??`, {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
    }
  };

  console.log(count);
  return (
    <div className="calendar">
      <div className="count">
        On est le {count}
        {count === 1 ? "er" : ""} décembre, il est temps douvrir le bon paquet !
      </div>
      <div className="presents">
        {data.map((l) => (
          <div
            className={
              isLined.includes(`lutin_${l.id}`) ? "window-clicked" : "window"
            }
            key={l.id}>
            <button type="button" onClick={openWindow}>
              {isLined.includes(`lutin_${l.id}`) ? (
                <></>
              ) : (
                <div className="cover">
                  <p>{l.id}</p>
                </div>
              )}
              {isLined.includes(`lutin_${l.id}`) ? (
                <img src={l.picture} alt={l.name} id={`lutin_${l.id}`} />
              ) : (
                <img src={l.gift} alt="cadeau" id={`lutin_${l.id}`} />
              )}
            </button>
          </div>
        ))}
      </div>
      <div>
        <ul className="list">
          {data.map((n) => (
            <li
              className={isLined.includes(`lutin_${n.id}`) ? "line" : ""}
              id={n.id % 2 === 0 ? "red" : "green"}
              key={n.id}
              onClick={openWindow}>
              {n.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// {
//   "id": 25,
//   "name": "Lutin Ayoub",
//   "picture": "src/assets/Lutins/25.jpg",
//   "gift": "src/assets/gift2.png"
// }
