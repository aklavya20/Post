import { useState } from "react";

const ColorCards = () => {
  const [color, setColor] = useState(null);
  const colorArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="flex flex-row">
      {colorArray.map((_, index) => (
        <div key={index} className="mt-3 ml-3">
          <div
            className={`border rounded-lg ${
              color === index ? "bg-white" : "bg-black"
            } w-20 h-20 `}
            onClick={() => setColor(index)}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ColorCards;
