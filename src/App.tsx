import React, { useState } from "react";
import "./App.css";
import {
  createContainer,
  useContainer,
  connect
} from "./lib/react-hook-container";

const useTest = () => {
  const [a, setA] = useState(6);
  const [b, setB] = useState(2);

  return { a, setA, b, setB };
};

const TestContainer = createContainer(useTest);

interface IProps {
  name: string;
}

interface IData {
  data: any;
  setData: any;
}

const useA = () => {
  const { a, setA } = useContainer(TestContainer);
  return { data: a, setData: setA };
};

const useB = () => {
  const { b, setB } = useContainer(TestContainer);
  return { data: b, setData: setB };
};

type IOwnProps = {
  data: any;
  setData: any;
};

const Show = ({ data, setData, name }: IOwnProps & IProps) => {
  const handleClick = () => {
    setData(Math.random());
  };
  console.log("show");
  return (
    <div>
      <div>data:{data}</div>
      <button onClick={handleClick}>{name}</button>
    </div>
  );
};

const ShowA = connect(useA)(Show);

const ShowB = connect(useB)(Show);

const TestA = () => {
  console.log("TestA");
  return <ShowA name={"testA"} />;
};

const TestB = () => {
  console.log("TestB");
  return <ShowB name={"testB"} />;
};

const App: React.FC = () => {
  return (
    <div className="App">
      <TestContainer.Provider>
        <TestA />
        <TestB />
        {/* <TestC /> */}
      </TestContainer.Provider>
    </div>
  );
};

export default App;
