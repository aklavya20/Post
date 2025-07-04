import CounterGrandchild from "./CounterGrandchild";

const CounterChild = ({ Value, SetValue }) => {
  const Increment = () => {
    SetValue(Value + 1);
  };

  const Decrement = () => {
    Value > 0 ? SetValue(Value - 1) : SetValue(0);
  };

  return (
    <div>
      <button onClick={Increment}> Increment </button>
      <button onClick={Decrement}> Decrement </button>
      <br />
    </div>
  );
};

export default CounterChild;
