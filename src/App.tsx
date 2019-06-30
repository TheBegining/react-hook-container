import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createContainer, useContainer } from "./lib/react-hook-container";

const useA = (initState: number) => {
  const [a, setA] = useState(initState);
  return { a, setA };
};

const useB = () => {
  const [b, setB] = useState<number>(2);
  return { b, setB };
};

function A() {}

A();

const AContainer = createContainer(useA);

const BContainer = createContainer(useB);

const TestA = () => {
  const test = useContainer(AContainer);
  console.log("TestA", test);
  return <div>TestA</div>;
};

const TestB = () => {
  const test = useContainer(BContainer);
  console.log("TestB", test);
  return <div>TestB</div>;
};

const App: React.FC = () => {
  return (
    <div className="App">
      <AContainer.Provider>
        <div>
          <TestA />
        </div>
      </AContainer.Provider>
      <BContainer.Provider>
        <TestB />
      </BContainer.Provider>
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
