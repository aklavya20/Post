import { useState } from "react";
import ColorChild from "./ColorChild";

const ColorParent = () => {
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
    <div>
      Color Parent
      <ColorChild
        ColorBox={ColorBox}
        DefaultColor={color}
        SetColor={setColor}
      />
    </div>
  );
};

export default ColorParent;
