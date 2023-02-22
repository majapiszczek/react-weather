import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          Coded by Maja Piszczek,{" "}
          <a
            href="https://github.com/majapiszczek/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            open source
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
