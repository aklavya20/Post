import NavBar from "./NavBar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import ColorCards from "./ColorCards";
import ColorBox from "./ColorBox";
import Test1 from "./Test1";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
      <ColorCards />
      <ColorBox />
      <Test1 />
    </div>
  );
};

export default Home;
