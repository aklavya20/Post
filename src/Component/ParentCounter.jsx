import { useState } from "react";
import ChildColor from "./ChildCounter";

const ParentCounter = () => {
  const [counterValue, setCounterValue] = useState();
  function UpdateState(value) {
    setCounterValue(value);
  }
  return (
    <div>
      With Two SetState
      <h1>Counter:{counterValue}</h1>
      <ChildColor UpdateState={UpdateState} />
    </div>
  );
};

export default ParentCounter;
