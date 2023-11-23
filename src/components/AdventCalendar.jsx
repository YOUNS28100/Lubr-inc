import { useState } from "react";
//import { toast } from "react-toastify/dist/components";
import data from "../data.json";
import "../styles/adventcalender.css";
import hat from "../assets/hat.png";

export default function AdventCalendar() {
  const [isLined, setIsLined] = useState([]);
  // const today = new Date().getDate(); // Fonction prenant la date du jour.
  const [count, setCount] = useState(1);
  //const noOpen = () => {};
  //const [couldOpen, setCouldOpen] = useState(noOpen);
  const openWindow = (e) => {
    const value = e.target.id;
    const numberValue = parseInt(value.slice(6), 10);
    if (count === numberValue) {
      if (isLined.includes(value)) {
        setIsLined([...isLined]);
      } else {
        setIsLined([...isLined, value]);
        setCount(count + 1);
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
      <div className="presents">
        {data.map((l) => (
          <div
            className={
              isLined.includes(`lutin_${l.id}`) ? "window-clicked" : "window"
            }
            key={l.id}>
            <button type="button" onClick={openWindow}>
              {isLined.includes(`lutin_${l.id}`) ? (
                <img src={l.picture} alt={l.name} id={`lutin_${l.id}`} />
              ) : (
                <img src={hat} alt="chapeau lutin" id={`lutin_${l.id}`} />
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
