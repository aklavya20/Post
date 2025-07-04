import { useState } from "react";
import CounterChild from "./CounterChild";
import CounterGrandchild from "./CounterGrandchild";
import CounterContext from "./CounterContext";

const CounterParent = () => {
  const [counter, setCounter] = useState(0);
  const Name = "Aklavya";
  return (
    <div>
      With One SetState
      <h1>Counter: {counter}</h1>
      <CounterChild Value={counter} SetValue={setCounter} />
      <CounterContext.Provider value={Name}>
        <CounterGrandchild />
      </CounterContext.Provider>
    </div>
  );
};

export default CounterParent;
