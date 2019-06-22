import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createContainer } from "./lib/react-hook-container";

const useA = (initState: number) => {
  const [a, setA] = useState(initState);
  return { a, setA };
};

const useB = () => {
  const [b, setB] = useState<number | null>(null);
  return { b, setB };
};

const AContainer = createContainer(useA);

const BContainer = createContainer(useB);

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
};

export default App;
