import { Fragment } from "react";
import "../styles/confetti.css";

let count = 200;
let points = [];

function Confetti({ open }) {
  let confetti = generatePoints();

  function generatePoints() {
    points = [];

    for (let i = 0; i < count; i++) {
      points.push(<p className={`${open ? "animated" : ""}`} key={i} />);
    }
    return points;
  }

  return (
    <Fragment>
      <div className={`confetti ${open ? "animated" : ""}`}>
        {confetti.map((c) => c)}
      </div>
    </Fragment>
  );
}

export default Confetti;
