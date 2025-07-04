import React, { useState } from "react";

const ChildCounter = ({ UpdateState }) => {
  const [counter, setState] = useState(0);
  UpdateState(counter);
  return (
    <div className="">
      <button onClick={() => setState(counter + 1)}>Increment</button>
      <button onClick={() => setState(counter - 1)}>Decrement</button>
    </div>
  );
};

export default ChildCounter;
