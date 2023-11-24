import Music from "./components/Music";
import { ToastContainer } from "react-toastify";
import { NavLink, Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.css";
import "./styles/snowflake.css";
import Moon from "./components/Moon";
import logo from "./assets/logo.png";

function App() {
  return (
    <div className="snowflakes" aria-hidden="true">
      <img src={logo} alt="logo" className="logo" />
      <div className="nav">
        <NavLink to="/adventcalendar">Le calendrier</NavLink>
        <NavLink to="/game">Le jeu</NavLink>
      </div>
      <ToastContainer />
      <Moon />
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
      <Music />
    </div>
  );
}

export default App;
