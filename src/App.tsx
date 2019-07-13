import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createContainer, useContainer } from "./lib/react-hook-container";

const useTest = (initState: number) => {
  const [a, setA] = useState(initState);
  const [b, setB] = useState<number>(2);

  return { a, setA, b, setB };
};

const TestContainer = createContainer(useTest);

const TestA = () => {
  const test = useContainer(TestContainer);
  console.log("TestA", test);
  return <div>TestA:{test.a}</div>;
};

const TestB = () => {
  const test = useContainer(TestContainer);
  console.log("TestB", test);
  return <div>TestB:{test.b}</div>;
};

const App: React.FC = () => {
  return (
    <div className="App">
      <TestContainer.Provider initialState={5}>
        <TestA />
        <TestB />
      </TestContainer.Provider>
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
