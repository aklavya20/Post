import NavBar from "./NavBar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import ColorCards from "./ColorCards";
import ColorBox from "./ColorBox";
import ColorParent from "./ColorParent";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
      <ColorCards />
      <ColorBox />
      <ColorParent />
    </div>
  );
};

export default Home;
