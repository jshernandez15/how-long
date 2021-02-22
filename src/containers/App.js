import Timer from "../components/timer/Timer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>¿Cuánto llevamos juntos?</h1>
        <Timer initialTime="2020-10-03 07:00:00" />
      </header>
    </div>
  );
};

export default App;
