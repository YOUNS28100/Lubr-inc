import { useState } from "react";
import data from "../data.json";

export default function AdventCalendar() {
  const [isLined, setIsLined] = useState([]);
  // const today = new Date().getDate(); // Fonction prenant la date du jour.

  const openWindow = (e) => {
    const value = e.target.id;
    if (isLined.includes(value)) {
      setIsLined([...isLined]);
    } else {
      setIsLined([...isLined, value]);
    }

    //   if (!isLined.includes(value)) {
    //   }
    // } else {
    //   toast.error(`Qui ? Qui ? MAIS QUIIIIII ??`, {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    // }
  };
  return (
    <div className="intro">
      <div className="list">
        <ul>
          {data.map((n) => (
            <li
              className={isLined.includes(`lutin_${n.id}`) ? "line" : ""}
              key={n.id}
              onClick={openWindow}>
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
