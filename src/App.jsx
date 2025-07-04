import "./App.css";
import CounterParent from "./Component/CounterParent";
import ColorCards from "./Component/ColorCards";
import ColorBox from "./Component/ColorBox";
import ColorParent from "./Component/ColorParent";

import Card from "./Post/Card";

function App() {
  return (
    <>
      <ColorCards />
      <ColorBox />
      <ColorParent />
      <CounterParent />
    </>
  );
}

export default App;
