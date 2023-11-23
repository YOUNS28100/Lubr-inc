import "./App.css";
import logo from "./assets/logo.png";
import data from "./data.json";

function App() {
  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="presents">
        {data.map((l) => (
          <div className="present" key={l.id}>
            <img src={l.picture} alt={`lutin${l.id}`} />
            {l.id}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
