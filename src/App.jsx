import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import data from "./data.json";

function App() {
  const [isLined, setIsLined] = useState([]);
  const openWindow = (e) => {
    const value = e.target.id;
    console.log(typeof value);
    if (isLined.includes(value)) {
      setIsLined([...isLined]);
    } else {
      setIsLined([...isLined, value]);
    }
  };
  console.log(isLined);

  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" />
        <ul>
          {data.map((n) => (
            <li
              className={isLined.includes(`lutin_${n.id}`) ? "line" : ""}
              id={`lutin_${n.id}`}
              key={n.id}>
              {n.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="presents">
        {data.map((l) => (
          <button
            type="button"
            className="present"
            onClick={openWindow}
            key={l.id}>
            <img src={l.picture} alt={l.name} id={`lutin_${l.id}`} />
            {l.id}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;
