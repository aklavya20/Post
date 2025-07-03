const ColorChild = ({ ColorBox, DefaultColor, SetColor }) => {
  return (
    <div className="flex flex-row">
      Color   Child
      {ColorBox.map((cb, index) => (
        <div key={index} className="mt-3 ml-3">
          <div
            className={`border rounded-lg ${
              DefaultColor === index ? cb.clickedcolor : cb.initialcolor
            } w-20 h-20`}
            onClick={() => SetColor(index)}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ColorChild;
