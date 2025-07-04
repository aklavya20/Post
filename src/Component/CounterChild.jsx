const CounterChild = ({ Value, SetValue }) => {
  const Increment = () => {
    SetValue(Value + 1);
  };

  const Decrement = () => {
    Value > 0 ? SetValue(Value - 1) : SetValue(0);
  };

  return (
    <div>
      <button className="border rounded-lg px-2 py-1 ml-4" onClick={Increment}>
        Increment
      </button>

      <button className="border rounded-lg px-2 py-1 ml-4" onClick={Decrement}>
        Decrement
      </button>
      <br />
    </div>
  );
};

export default CounterChild;
