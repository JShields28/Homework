import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AnotherRoundButton from "./components/AnotherRoundButton";
import Routes from "./Routes";
import RandomFact from "./components/RandomFact/RandomFact";
require("dotenv").config();

function App() {
  const debugMode = true;

  return (
    <div className="App">
      <h1>Google-Fu</h1>
      <Routes debug={debugMode} />
    </div>
  );
}

export default App;
