import { Link, Outlet } from "react-router";

const AboutUs = () => {
  return (
    <div>
      <Link to="path1">About History</Link>
      <Link to="path2">About Legacy</Link>
      <Outlet />
    </div>
  );
};

export default AboutUs;
