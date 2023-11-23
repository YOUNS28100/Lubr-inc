import { useState } from "react";
import Music from "./components/Music";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.css";
import logo from "./assets/logo.png";
import data from "./data.json";

function App() {
  const [incrementValue, setIncrementValue] = useState(0);

  const handleClick = () => {
    setIncrementValue(incrementValue + 1);
  };

  const [isLined, setIsLined] = useState([]);

  // const today = new Date().getDate(); // Fonction prenant la date du jour.

  const openWindow = (e) => {
    // const value = parseInt(e.currentTarget.id.split("_")[1], 10);
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
    <div className="snowflakes" aria-hidden="true">
      <ToastContainer limit={5} />
      <div className="compteur">
        On est le {incrementValue}, il est temps douvrir le bon paquet !
      </div>
      <div className="intro">
        <div className="logo">
          <img src={logo} alt="logo" />
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
        <Music />
        <div className="presents">
          {data.map((l) => (
            <div className="book" key={l.id}>
              <button type="button" onClick={(openWindow, handleClick)}>
                <img src={l.picture} alt={l.name} id={`lutin_${l.id}`} />
                <div className="cover">
                  <p>{l.id}</p>
                </div>
              </button>
            </div>
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
      <img
        className="lutin"
        src="./src/assets/Lutins/Ayoublutin.gif"
        alt="Lutin Ayoub"
        id="lutin"
      />
    </div>
  );
}

export default App;
