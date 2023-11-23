import React, { useState } from "react";
import Music from "./components/Music";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.css";
import logo from "./assets/logo.png";
import data from "./data.json";

function App() {
  const [isLined, setIsLined] = useState([]);
  const today = new Date().getDate(); // Fonction prenant la date du jour.

  const openWindow = (e) => {
    const value = parseInt(e.target.id.split("_")[1], 10);

    if (value === today) {
      if (!isLined.includes(value)) {
        setIsLined([...isLined, value]);
      }
    } else {
      toast.error(`Qui ? Qui ? MAIS QUIIIIII ??`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="snowflakes" aria-hidden="true">
      <ToastContainer />
      <div className="intro">
        <div className="logo">
          <img src={logo} alt="logo" />
          <ul>
            {data.map((n) => (
              <li
                className={isLined.includes(n.id) ? "line" : ""}
                id={`lutin_${n.id}`}
                key={n.id}
                onClick={openWindow}
              >
                {n.name}
              </li>
            ))}
          </ul>
          <Music />
        </div>
        <div className="presents">
          {data.map((l) => (
            <button
              type="button"
              className={`present ${isLined.includes(l.id) ? "lined" : ""}`}
              onClick={openWindow}
              id={`lutin_${l.id}`}
              key={l.id}
            >
              <img src={l.picture} alt={l.name} />
              {l.id}
            </button>
          ))}
        </div>
      </div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
      <div className="snowflake">❅</div>
      <div className="snowflake">❆</div>
      <div className="snowflake">❄</div>
    </div>
  );
}

export default App;
