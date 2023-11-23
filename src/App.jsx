import Music from "./components/Music";
import { ToastContainer } from "react-toastify";
import { NavLink, Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.css";
import "./styles/snowflake.css";

import logo from "./assets/logo.png";

function App() {
  return (
    <div className="snowflakes" aria-hidden="true">
      <img src={logo} alt="logo" />
      <div className="nav">
        <NavLink to="/adventcalendar">Le calendrier</NavLink>
        <NavLink to="/game">Le jeu</NavLink>
      </div>
      <ToastContainer />
      <Music />
      <Outlet />
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
