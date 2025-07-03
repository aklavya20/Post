import { useState } from "react";

const ColorBox = () => {
  const [color, setColor] = useState(null);
  const ColorBox = [
    {
      initialcolor: "bg-black",
      clickedcolor: "bg-white",
    },
    {
      initialcolor: "bg-black",
      clickedcolor: "bg-gray-600",
    },
    {
      initialcolor: "bg-black",
      clickedcolor: "bg-zinc-600",
    },
    {
      initialcolor: "bg-black",
      clickedcolor: "bg-yellow-600",
    },
    {
      initialcolor: "bg-black",
      clickedcolor: "bg-orange-600",
    },
    {
      initialcolor: "bg-black",
      clickedcolor: "bg-green-600",
    },
    {
      initialcolor: "bg-black",
      clickedcolor: "bg-teal-600",
    },
    {
      initialcolor: "bg-black",
      clickedcolor: "bg-cyan-600",
    },
    {
      initialcolor: "bg-black",
      clickedcolor: "bg-blue-600",
    },
    {
      initialcolor: "bg-black",
      clickedcolor: "bg-purple-600",
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

export default ColorBox;
