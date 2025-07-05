import React, { useRef, useState } from "react";

const UseRefPractice = () => {
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
    <div className="flex flex-col space-y-2">
      UseRefPractice
      <input
        className="border border-black rounded-lg w-1/4"
        type="text"
        ref={nameRef}
      />
      <input
        className="border border-black rounded-lg w-1/4"
        type="text"
        ref={emailRef}
      />
      <button
        className="border px-3 py-1 rounded-lg w-1/4 bg-black text-white font-medium"
        onClick={handleClick}
      >
        Submit
      </button>
      {value.map((v, i) => (
        <div key={i} className="flex flex-col">
          <div className="flex flex-row">
            Name: <div>{v.name}</div>
          </div>
          <div className="flex flex-row">
            Email: <div>{v.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UseRefPractice;
