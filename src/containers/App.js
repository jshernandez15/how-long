import Timer from "../components/timer/Timer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>How long have I been?</h1>
        <Timer initialTime="2021-02-17 16:00:00" />
      </header>
    </div>
  );
};

export default App;
