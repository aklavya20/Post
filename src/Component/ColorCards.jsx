import React, { useState } from "react";

const ColorCards = () => {
  const [color, setColor] = useState(null);
  const ColorBox = [
    {
      initialcolor: "bg-black",
      clickedcolor: "bg-white",
    },
    {
      initialcolor: "bg-black",
      clickedcolor: "bg-white",
    },
    {
      initialcolor: "bg-black",
      clickedcolor: "bg-white",
    },
    {
      initialcolor: "bg-black",
      clickedcolor: "bg-white",
    },
    {
      initialcolor: "bg-black",
      clickedcolor: "bg-white",
    },
    {
      initialcolor: "bg-black",
      clickedcolor: "bg-white",
    },
    {
      initialcolor: "bg-black",
      clickedcolor: "bg-white",
    },
    {
      initialcolor: "bg-black",
      clickedcolor: "bg-white",
    },
    {
      initialcolor: "bg-black",
      clickedcolor: "bg-white",
    },
    {
      initialcolor: "bg-black",
      clickedcolor: "bg-white",
    },
  ];
  return (
    <div className="flex flex-row">
      {ColorBox.map((CB, index) => (
        <div key={index} className="mt-3 ml-3">
          <div
            className={`border rounded-lg ${
              color === index ? CB.clickedcolor : CB.initialcolor
            } w-20 h-20 `}
            onClick={() => setColor(index)}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ColorCards;
