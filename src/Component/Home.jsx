import NavBar from "./NavBar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import ColorCards from "./ColorCards";
import ColorBox from "./ColorBox";
import ColorParent from "./ColorParent";
import ParentCounter from "./ParentCounter";
import CounterParent from "./CounterParent";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
      <ColorCards />
      <ColorBox />
      <ColorParent />
      {/* <ParentCounter /> */}
      <CounterParent />
    </div>
  );
};

export default Home;
