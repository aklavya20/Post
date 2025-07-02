import NavBar from "./NavBar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import ColorCards from "./ColorCards";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
      <ColorCards />
    </div>
  );
};

export default Home;
