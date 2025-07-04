import { useRef, useState } from "react";

const UseRef = () => {
  const name = useRef(null);
  const email = useRef(null);

  const [value, setValue] = useState([]);

  const handleClick = () => {
    const nameRef = name.current.value;
    const emailRef = email.current.value;

    setValue([...value, { nameRef, emailRef }]);
  };

  return (
    <div>
      <input className="border border-black mb-1 mt-1" type="text" ref={name} />
      <br />
      <input className="border border-black" type="email" ref={email} />
      <br />
      <button
        className="px-2 py-1 border rounded-lg mt-1"
        onClick={handleClick}
      >
        Submit
      </button>
      {value.map((v, i) => (
        <div key={i}>
          <div>Name: {v.nameRef}</div>
          <div>Email: {v.emailRef}</div>
        </div>
      ))}
    </div>
  );
};

export default UseRef;
