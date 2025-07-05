import "./App.css";
import CounterParent from "./Component/CounterParent";
import ColorCards from "./Component/ColorCards";
import ColorBox from "./Component/ColorBox";
import ColorParent from "./Component/ColorParent";

import Card from "./Post/Card";
import UseRef from "./Component/UseRef";
import UseRefPractice from "./Practice/UseRefPractice";
import ParentFile from "./ContextPractice/ParentFile";

function App() {
  return (
    <>
      {/* <ColorCards />
      <ColorBox />
      <ColorParent />
      <CounterParent /> */}
      <UseRef />
      <UseRefPractice />
      <ParentFile />
    </>
  );
}

export default App;
