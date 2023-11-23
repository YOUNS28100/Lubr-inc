import { NavLink } from "react-router-dom";
import "../styles/homepage.css";

export default function HomePage() {
  return (
    <div className="choice">
      <button type="button">
        <NavLink to="/adventcalendar">LE Calendrier de l&apos;avent</NavLink>
      </button>
      <button type="button">
        <NavLink to="/game">LE jeu qui déchire</NavLink>
      </button>
    </div>
  );
}
