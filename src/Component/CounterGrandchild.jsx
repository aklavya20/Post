import { useContext } from "react";
import CounterContext from "./CounterContext";
const CounterGrandchild = () => {
  const Name = useContext(CounterContext);

  return <div>CounterGrandchild: {Name} </div>;
};

export default CounterGrandchild;
