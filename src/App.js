import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="grid container grid-cols-12 gap-x-1 md:gap-x-2 lg:gap-x-3">
        <div>olar</div>
        <div>olar</div>
        <div>olar</div>
        <div>olar</div>
        <div>olar</div>
        <div>olar</div>
        <div>olar</div>
        <div>olar</div>
        <div>olar</div>
      </div>
    </div>
  );
}

export default App;
