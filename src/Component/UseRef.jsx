import { useRef, useState } from "react";

const UseRef = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const [value, setValue] = useState([]);

  const handleClick = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;

    setValue([...value, { name, email }]);
    nameRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <div>
      <input
        className="border border-black mb-1 mt-1"
        type="text"
        ref={nameRef}
      />
      <br />
      <input className="border border-black" type="email" ref={emailRef} />
      <br />
      <button
        className="px-2 py-1 border rounded-lg mt-1"
        onClick={handleClick}
      >
        Submit
      </button>
      {value.map((v, i) => (
        <div key={i}>
          <div>Name: {v.name}</div>
          <div>Email: {v.email}</div>
        </div>
      ))}
    </div>
  );
};

export default UseRef;
