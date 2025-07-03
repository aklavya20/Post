import React, { useState } from "react";

const Test1 = () => {
  const [inIndex, setInIndex] = useState(null);

  const updateColor = (index) => {
    setInIndex(index);
  };
  const colorArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      {colorArray.map((_, index) => (
        <div key={index} className={``} onClicked={updateColor}></div>
      ))}
    </div>
  );
};

export default Test1;
