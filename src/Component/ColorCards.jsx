import React, { useState } from "react";

const ColorCards = () => {
  const color = [
    {
      initialcolor: "bg-black",
      clickcolor: "bg-white",
    },
    {
      initialcolor: "bg-black",
      clickcolor: "bg-white",
    },
    {
      initialcolor: "bg-black",
      clickcolor: "bg-white",
    },
    {
      initialcolor: "bg-black",
      clickcolor: "bg-white",
    },
    {
      initialcolor: "bg-black",
      clickcolor: "bg-white",
    },
    {
      initialcolor: "bg-black",
      clickcolor: "bg-white",
    },
    {
      initialcolor: "bg-black",
      clickcolor: "bg-white",
    },
    {
      initialcolor: "bg-black",
      clickcolor: "bg-white",
    },
    {
      initialcolor: "bg-black",
      clickcolor: "bg-white",
    },
    {
      initialcolor: "bg-black",
      clickcolor: "bg-white",
    },
  ];
  const [colors, setColors] = useState(color[0].initialcolor);
  return (
    <>
      {color.map((card, index) => (
        <div key={index} className="mt-1 ml-3">
          <div
            className={`border rounded-lg ${colors} border-black w-20 h-20`}
            onClick={() => setColors((prev) => card.clickcolor)}
          ></div>
        </div>
      ))}
    </>
  );
};

export default ColorCards;
