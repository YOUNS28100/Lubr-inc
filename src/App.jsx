import Music from "./components/Music";
import { useState } from "react";
import "./styles/App.css";
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
    <div className="snowflakes" aria-hidden="true">
      <div className="intro">
        {" "}
        <div className="logo">
          <img src={logo} alt="logo" />
          <ul>
            {data.map((n) => (
              <li
                className={isLined.includes(`lutin_${n.id}`) ? "line" : ""}
                id={`lutin_${n.id}`}
                key={n.id}
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
              className="present"
              onClick={openWindow}
              key={l.id}
            >
              <img src={l.picture} alt={l.name} id={`lutin_${l.id}`} />
              {l.id}
            </button>
          ))}
        </div>
      </div>
<<<<<<< HEAD
      <div className="presents">
        {data.map((l) => (
          <div className="book" key={l.id}>
            <img src={l.picture} alt={`lutin${l.id}`} />
            <div className="cover">
              <p>{l.id}</p>
            </div>
          </div>
        ))}
      </div>
    </>
=======
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
>>>>>>> 3dfcc174b56c55835f219dbac7f9a9e08ee790f5
  );
}

export default App;
